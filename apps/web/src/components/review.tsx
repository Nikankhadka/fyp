'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Flag, Pencil, Star, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import ReviewInput from './reviewInput'
import { IReview } from '../interface/response'
import useConfirm from '../store/useConfirm'
import useModal from '../store/useModal'
import Api from '../api/client/axios'
import dayjs from '../utils/dayjs'
import { normalizeImageSrc } from './common/normalizeImageSrc'
import { Button, Surface } from './ui/primitives'

interface Props {
  reviewData: IReview
  currentUser: string
}

export default function Review({ reviewData, currentUser }: Props) {
  const [Edit, setEdit] = useState('')
  const profileImageSrc = normalizeImageSrc(reviewData.userId.profileImg?.imgUrl)
  const confirm = useConfirm()
  const modal = useModal()
  const router = useRouter()

  return (
    <Surface className="p-4">
      {Edit == '' && (
        <div>
          <div className="flex items-center justify-between">
            <div className="flex w-full items-center gap-x-3">
              <Link href={`/Home/user/${reviewData.userId._id}`} target="_space">
                {profileImageSrc ? (
                  <Image
                    src={profileImageSrc}
                    alt="User"
                    height={48}
                    width={48}
                    className="block h-12 w-12 rounded-md border border-neutral-200 object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-neutral-100 text-center text-[10px] text-neutral-500">
                    No image
                  </div>
                )}
              </Link>

              <p>
                <span className="block text-sm font-semibold text-neutral-950">
                  {reviewData.userId.userName}
                </span>
                <span className="text-sm text-neutral-500">
                  Date: {dayjs(reviewData.createdAt).format('MM/YY/DD')}
                </span>
              </p>
            </div>

            {currentUser == reviewData.userId._id && (
              <div className="mr-2 flex items-center gap-2">
                <Button
                  type="button"
                  tone="ghost"
                  className="h-9 w-9 p-0"
                  aria-label="Edit review"
                  onClick={() => {
                    setEdit(reviewData._id)
                  }}
                >
                  <Pencil className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  type="button"
                  tone="ghost"
                  className="h-9 w-9 p-0 text-red-600 hover:bg-red-50"
                  aria-label="Delete review"
                  onClick={() => {
                    const onDelete = () => {
                      Api.delete(`/property/v1/review/${reviewData._id}`, {
                        withCredentials: true,
                      })
                        .then((res) => {
                          toast.success('Review Deleted Successfully!!')
                          router.refresh()
                          return modal.onClose()
                        })
                        .catch((e) => {
                          toast.error('Failed to Deleted Review')
                          return modal.onClose()
                        })
                    }

                    confirm.onContent({
                      header: 'Are You Sure to delete Review',
                      actionBtn: 'Delete',
                      onAction: onDelete,
                    })

                    modal.onOpen('confirm')
                  }}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            )}
          </div>

          <p className="my-3 mt-4 text-sm leading-6 text-neutral-700">
            {reviewData.review}
          </p>
          <div className="flex items-center justify-between">
            <p className="my-2 ml-1 flex items-center gap-2">
              <Star
                className="h-4 w-4 fill-themeColor text-themeColor"
                aria-hidden="true"
              />
              <span className="block text-sm font-semibold">
                {reviewData.rating}.0
              </span>
            </p>
          </div>

          {currentUser == reviewData.hostId && (
            <Button type="button" tone="ghost" className="px-0 text-neutral-600">
              <Flag className="mr-2 h-4 w-4" aria-hidden="true" />
              Report Review
            </Button>
          )}
        </div>
      )}

      {Edit == reviewData._id && (
        <div>
          <ReviewInput
            rating={reviewData.rating}
            Review={reviewData.review}
            propertyId={reviewData.propertyId}
            reviewId={reviewData._id}
            edit={true}
            userData={reviewData.userId}
            setEdit={setEdit}
          />
        </div>
      )}
    </Surface>
  )
}
