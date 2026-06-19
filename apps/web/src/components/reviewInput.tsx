'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ErrorText } from './random'
import { FetchedMe } from '../interface/response'
import Api from '../api/client/axios'
import useConfirm from '../store/useConfirm'
import useModal from '../store/useModal'
import { normalizeImageSrc } from './common/normalizeImageSrc'
import { Button, TextArea } from './ui/primitives'
import { cn } from '../utils/cn'

interface Props {
  userData: Partial<FetchedMe>
  propertyId: string
  reviewId?: string
  setEdit?: React.Dispatch<React.SetStateAction<string>>
  edit: boolean
  rating: number
  Review: string
}

export default function ReviewInput({
  userData,
  propertyId,
  edit,
  rating,
  Review,
  setEdit,
  reviewId,
}: Props) {
  const [rate, setrate] = useState(rating - 1)
  const [review, setreview] = useState(Review)
  const [err, seterr] = useState(false)
  const profileImageSrc = normalizeImageSrc(userData.profileImg?.imgUrl)
  const router = useRouter()
  const confirm = useConfirm()
  const modal = useModal()

  const ratings = [1, 2, 3, 4, 5]
  const memberYear = userData.createdAt
    ? new Date(userData.createdAt).getFullYear()
    : 'Member'

  return (
    <main className="my-3">
      <div>
        <div className="flex w-full items-center gap-x-3">
          {profileImageSrc ? (
            <Image
              height={48}
              width={48}
              src={profileImageSrc}
              alt="User"
              className={`block h-12 w-12 object-cover ${edit ? 'rounded-lg' : 'rounded-full'}`}
            />
          ) : (
            <div
              className={`flex h-12 w-12 items-center justify-center bg-neutral-100 text-center text-[10px] text-neutral-500 ${edit ? 'rounded-lg' : 'rounded-full'}`}
            >
              No image
            </div>
          )}
          <p>
            <span className="block text-sm font-semibold text-neutral-950">
              {userData.userName || 'Guest'}
            </span>
            <span className="text-sm text-neutral-500">{memberYear}</span>
          </p>
        </div>

        <div className="my-2 mt-3 flex items-center gap-1">
          {ratings.map((ratevalue, index) => {
            return (
              <button
                type="button"
                key={index}
                aria-label={`Rate ${ratevalue} star${ratevalue === 1 ? '' : 's'}`}
                aria-pressed={index <= rate}
                className="rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
                onClick={() => {
                  setrate(index)
                }}
              >
                <Star
                  className={cn(
                    'h-6 w-6 transition',
                    index <= rate
                      ? 'fill-primary text-primary'
                      : 'text-neutral-300 hover:text-primary',
                  )}
                />
              </button>
            )
          })}
        </div>
        <form>
          <label className="mb-2 mt-2 block text-left text-sm font-semibold text-neutral-800">
            Your Review
          </label>
          <TextArea
            id="message"
            rows={4}
            className="my-2"
            placeholder="Leave a comment..."
            defaultValue={review}
            onChange={(e) => setreview(e.target.value)}
          />

          {err && <ErrorText text="Please Provide rating and review Both!" />}

          <div className="flex items-center justify-between">
            {edit && (
              <Button
                type="button"
                tone="ghost"
                className="px-0"
                onClick={() => {
                  setEdit!('')
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              type="button"
              className="my-3"
              onClick={(e) => {
                e.preventDefault()
                const newrate = rate + 1
                if (newrate < 1 || review.length <= 2) {
                  return seterr(true)
                }

                const onSubmit = () => {
                  if (!edit) {
                    Api.post(
                      `/property/v1/review/${propertyId}`,
                      { rating: newrate, review },
                      { withCredentials: true },
                    )
                      .then((res) => {
                        toast.success('Review Posted Successfully!!')
                        setrate(0)
                        setreview('')
                        router.refresh()
                        return modal.onClose()
                      })
                      .catch((e) => {
                        toast.error('Failed to Post Review!!!')
                        return modal.onClose()
                      })
                  }

                  if (edit) {
                    Api.patch(
                      `/property/v1/review/${reviewId}`,
                      { rating: newrate, review },
                      { withCredentials: true },
                    )
                      .then((res) => {
                        toast.success('Review updated Successfully!!')
                        router.refresh()
                        setEdit!('')
                        return modal.onClose()
                      })
                      .catch((e) => {
                        toast.error('Failed to update Review!!!')
                        return modal.onClose()
                      })
                  }
                }

                confirm.onContent({
                  header: 'Are You Sure To Post Review',
                  actionBtn: 'Submit Review',
                  onAction: onSubmit,
                })

                modal.onOpen('confirm')
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
