'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Api from '../../api/client/axios'
import useModal from '../../store/useModal'
import { cn } from '../../utils/cn'

interface WishProps {
  active: boolean
  id: string
  user?: string
  className?: string
}

export default function Wish({ active, id, user, className }: WishProps) {
  const [isActive, setIsActive] = useState(active)

  const router = useRouter()
  const modal = useModal()

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full text-onSurface-variant transition hover:bg-surface-container hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25',
        className,
      )}
      aria-label={isActive ? 'Remove from favourites' : 'Save to favourites'}
      title={isActive ? 'Remove from favourites' : 'Save to favourites'}
      onClick={(e) => {
        e.preventDefault()
        if (user == '') return modal.onOpen('login')
        if (user == 'admin') return toast.error('Admin Cannot Have Favourites')
        if (user == 'owner') return toast.error("owner cant add to WishList!!")

        if (!isActive) {
          Api.post(
            `/property/v1/wishList/${id}`,
            {},
            { withCredentials: true },
          )
            .then((res) => {
              toast.success('Property Added to wishList')
              setIsActive(true)
              return router.refresh()
            })
            .catch((e) => {
              return toast.error('Failed to Add property to WishList!')
            })
        }

        if (isActive) {
          Api.delete(`/property/v1/wishList/${id}`, { withCredentials: true })
            .then((res) => {
              toast.success('Property Removed from Favourites!!')
              setIsActive(false)
              return router.refresh()
            })
            .catch((e) => {
              return toast.error('Failed to Remove Property From Favourites!!')
            })
        }
      }}
    >
      <Heart
        className={cn(
          'h-5 w-5',
          isActive ? 'fill-primary text-primary' : 'text-onSurface-variant',
        )}
        aria-hidden="true"
      />
    </button>
  )
}
