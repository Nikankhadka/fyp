'use client'

import Link from 'next/link'
import { memo, useState } from 'react'
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
import type { IBooking, Payment, Property } from '../../interface/response'
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

function CardComponent({ use, data, wish = false, user = '', index }: CardProps) {
  const [img, setImg] = useState(0)
  // Only select the stable action setters — these never change identity, so
  // the card never re-renders when unrelated store state (e.g. modal isOpen)
  // changes. Previously each bare useStore() returned the whole store object
  // and re-rendered every card on any state change.
  const onOpenModal = useModal((s) => s.onOpen)
  const onCloseModal = useModal((s) => s.onClose)
  const onConfirmContent = useConfirm((s) => s.onContent)
  const setRejectBtn = useReject((s) => s.setbtn)
  const onRejectContent = useReject((s) => s.onContent)
  const setListIndex = useRandom((s) => s.setIndex)
  const onList = useRandom((s) => s.onList)
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
    onConfirmContent({
      header: 'Verify this property listing?',
      actionBtn: 'Verify',
      onAction: async () => {
        const res = await verifyProperty(_id!, { isVerified: true })
        if (res) {
          toast.success(`Property ${_id!} verified successfully`)
          onCloseModal()
          return router.refresh()
        }

        toast.error('Failed to verify property')
        return onCloseModal()
      },
    })

    onOpenModal('confirm')
  }

  const rejectListing = () => {
    setRejectBtn('Reject')
    onRejectContent({
      onReject: async (message: string) => {
        const res = await verifyProperty(_id!, {
          isVerified: false,
          message,
        })

        if (res) {
          toast.success('Property post rejected')
          onCloseModal()
          return router.refresh()
        }

        toast.error('Property rejection failed')
        return onCloseModal()
      },
    })

    onOpenModal('reject')
  }

  const deleteListing = () => {
    onConfirmContent({
      header: 'Delete this property listing?',
      actionBtn: 'Delete',
      onAction: () => {
        Api.delete(`/property/v1/deleteProperty/${_id}`, {
          withCredentials: true,
        })
          .then(() => {
            toast.success(`Property ${_id!} deleted successfully`)
            onCloseModal()
            return router.refresh()
          })
          .catch(() => {
            toast.error('Failed to delete property. It may be booked currently.')
            return onCloseModal()
          })
      },
    })

    onOpenModal('confirm')
  }

  return (
    <article className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative">
        <Link href={`/Home/rooms/${_id}`} target="_blank" className="block">
          <div className="relative aspect-square w-full overflow-hidden bg-surface-container">
            <SafeImage
              fill
              src={images?.[img]?.imgUrl}
              alt={name ? `${name} property` : 'Property'}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              quality={65}
              priority={index === 0}
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
                  className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-lowest/90 text-onSurface opacity-0 shadow transition hover:bg-surface-container-lowest disabled:pointer-events-none disabled:opacity-0 group-hover:opacity-100"
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
                  className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-lowest/90 text-onSurface opacity-0 shadow transition hover:bg-surface-container-lowest disabled:pointer-events-none disabled:opacity-0 group-hover:opacity-100"
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
            className="line-clamp-2 text-base font-semibold text-onSurface hover:text-primary"
          >
            {name || 'Untitled property'}
          </Link>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-onSurface-variant">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{avgRating ?? 0}</span>
          </div>
        </div>

        <p className="truncate text-sm font-medium text-onSurface-variant">
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

        <p className="text-sm text-onSurface-variant">
          <span className="font-bold text-onSurface">${rate ?? 0}</span> night
        </p>

        {showModerationActions && (
          <div className="flex flex-wrap gap-2 border-t border-outline-variant pt-3">
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
          <div className="flex flex-wrap gap-2 border-t border-outline-variant pt-3">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setListIndex(index!)
                onList('edit')
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

const Card = memo(CardComponent)

export default Card
