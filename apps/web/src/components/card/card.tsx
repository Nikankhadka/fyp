'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Hourglass,
  Star,
  Trash2,
  XCircle,
} from 'lucide-react'

import { verifyProperty } from '../../api/client/admin'
import Api from '../../api/client/axios'
import { IBooking, Payment, Property } from '../../interface/response'
import useConfirm from '../../store/useConfirm'
import useModal from '../../store/useModal'
import useRandom from '../../store/randomStore'
import useReject from '../../store/useReject'
import SafeImage from '../common/SafeImage'
import Wish from '../Svg/wishSvg'
import { Button, StatusBadge } from '../ui/primitives'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

interface CardProps {
  use?: string
  data?: Partial<Property>
  booking?: Partial<IBooking>
  payment?: Partial<Payment>
  index?: number
  wish?: boolean
  user?: string
}

function getListingStatus(data: Partial<Property>) {
  if (data.isBanned?.status) {
    return { label: 'Banned', tone: 'danger' as const, icon: XCircle }
  }

  if (data.isVerified?.status) {
    return { label: 'Verified', tone: 'success' as const, icon: CheckCircle2 }
  }

  if (data.isVerified?.pending) {
    return { label: 'Pending', tone: 'warning' as const, icon: Hourglass }
  }

  return { label: 'Rejected', tone: 'danger' as const, icon: XCircle }
}

export default function Card({ use, data, wish = false, user = '', index }: CardProps) {
  const [img, setImg] = useState(0)
  const modal = useModal()
  const confirm = useConfirm()
  const reject = useReject()
  const list = useRandom()
  const router = useRouter()

  if (!data) {
    return null
  }

  const {
    images = [],
    _id,
    avgRating,
    country,
    city,
    rate,
    name,
    isVerified,
  } = data
  const imageCount = images.length
  const showModerationActions = use === 'adminlisting'
  const showOwnerActions = use === 'userlisting'
  const showStatus = showModerationActions || showOwnerActions
  const status = getListingStatus(data)
  const StatusIcon = status.icon

  const previousImage = () => {
    setImg((current) => Math.max(0, current - 1))
  }

  const nextImage = () => {
    setImg((current) => Math.min(Math.max(imageCount - 1, 0), current + 1))
  }

  const verifyListing = () => {
    confirm.onContent({
      header: 'Verify this property listing?',
      actionBtn: 'Verify',
      onAction: async () => {
        const res = await verifyProperty(_id!, { isVerified: true })
        if (res) {
          toast.success(`Property ${_id!} verified successfully`)
          modal.onClose()
          return router.refresh()
        }

        toast.error('Failed to verify property')
        return modal.onClose()
      },
    })

    modal.onOpen('confirm')
  }

  const rejectListing = () => {
    reject.setbtn('Reject')
    reject.onContent({
      onReject: async (message: string) => {
        const res = await verifyProperty(_id!, {
          isVerified: false,
          message,
        })

        if (res) {
          toast.success('Property post rejected')
          modal.onClose()
          return router.refresh()
        }

        toast.error('Property rejection failed')
        return modal.onClose()
      },
    })

    modal.onOpen('reject')
  }

  const deleteListing = () => {
    confirm.onContent({
      header: 'Delete this property listing?',
      actionBtn: 'Delete',
      onAction: () => {
        Api.delete(`/property/v1/deleteProperty/${_id}`, {
          withCredentials: true,
        })
          .then(() => {
            toast.success(`Property ${_id!} deleted successfully`)
            modal.onClose()
            return router.refresh()
          })
          .catch(() => {
            toast.error('Failed to delete property. It may be booked currently.')
            return modal.onClose()
          })
      },
    })

    modal.onOpen('confirm')
  }

  return (
    <article className="group overflow-hidden rounded-md border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md">
      <div className="relative">
        <Link href={`/Home/rooms/${_id}`} target="_blank" className="block">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <SafeImage
              fill
              src={images?.[img]?.imgUrl}
              alt={name ? `${name} property` : 'Property'}
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              fallbackText="Property image unavailable"
            />
          </div>
        </Link>

        {imageCount > 1 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label="Previous property image"
                  disabled={img === 0}
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Previous image</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label="Next property image"
                  disabled={img >= imageCount - 1}
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Next image</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {imageCount > 1 && (
          <div className="absolute bottom-3 flex w-full justify-center">
            <div className="flex items-center gap-1 rounded-full bg-neutral-950/40 px-2 py-1">
              {images.map((image, dotIndex) => (
                <span
                  key={image.imgId || dotIndex}
                  className={`h-1.5 w-1.5 rounded-full ${
                    img === dotIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {use === 'card' && (
          <div className="absolute right-3 top-3">
            <Wish active={wish} id={_id!} user={user} />
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/Home/rooms/${_id}`}
            target="_blank"
            className="line-clamp-2 text-base font-semibold text-neutral-950 hover:text-mainColor"
          >
            {name || 'Untitled property'}
          </Link>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-neutral-700">
            <Star className="h-4 w-4 fill-themeColor text-themeColor" />
            <span>{avgRating ?? 0}</span>
          </div>
        </div>

        <p className="truncate text-sm font-medium text-neutral-600">
          {[country, city].filter(Boolean).join(', ') || 'Location not set'}
        </p>

        {showStatus && (
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone={status.tone}>
              <StatusIcon className="mr-1 h-3.5 w-3.5" />
              {status.label}
            </StatusBadge>
            {!isVerified?.status && isVerified?.message && (
              <span className="line-clamp-1 text-xs text-red-600">
                {isVerified.message}
              </span>
            )}
          </div>
        )}

        <p className="text-sm text-neutral-700">
          <span className="font-bold text-neutral-950">${rate ?? 0}</span> night
        </p>

        {showModerationActions && (
          <div className="flex flex-wrap gap-2 border-t border-neutral-100 pt-3">
            <Button type="button" onClick={verifyListing}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Verify
            </Button>
            <Button type="button" tone="danger" onClick={rejectListing}>
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
          </div>
        )}

        {showOwnerActions && (
          <div className="flex flex-wrap gap-2 border-t border-neutral-100 pt-3">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                list.setIndex(index!)
                list.onList('edit')
              }}
            >
              <Edit3 className="mr-2 h-4 w-4" />
              Update
            </Button>
            <Button type="button" tone="danger" onClick={deleteListing}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}
