'use client'

import { FormEvent, useState } from 'react'
import { Star } from 'lucide-react'
import { toast } from 'react-hot-toast'
import useModal from '../../store/useModal'
import { Property } from '../../interface/response'
import useBookingStore from '../../store/bookingStore'
import dayjs from '../../utils/dayjs'
import { Button, Field, StatusBadge, Surface } from '../ui/primitives'

interface Booking {
  reservations: {
    startDate: Date
    endDate: Date
  }[]
  user: string
  propertyData: Partial<Property>
  is_Admin: boolean
}

export function BookProperty({ reservations, user, propertyData }: Booking) {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [date, setdate] = useState({
    startDate: dayjs(tomorrow).format('YYYY-MM-DD'),
    endDate: dayjs(tomorrow).format('YYYY-MM-DD'),
  })
  const [guest, setguest] = useState(0)

  const modal = useModal()
  const bookingStore = useBookingStore()

  const currentDate = new Date()
  const maxDate = new Date()
  maxDate.setFullYear(currentDate.getFullYear() + 1)
  maxDate.setMonth(currentDate.getMonth())
  maxDate.setDate(currentDate.getDate())

  const minDate = dayjs(tomorrow).format('YYYY-MM-DD')
  const maxDateValue = dayjs(maxDate).format('YYYY-MM-DD')

  const onReserve = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const startDate = date.startDate
      ? new Date(`${date.startDate}T12:00:00`)
      : null
    const endDate = date.endDate ? new Date(`${date.endDate}T12:00:00`) : null
    const bookingStartDate = dayjs(startDate)
    const bookingEndDate = dayjs(endDate)

    if (user == '') {
      return modal.onOpen('login')
    }

    if (user == 'owner') {
      return toast.error("Owner cant book Owned Property")
    }

    if (
      startDate == null ||
      endDate == null ||
      guest <= 0 ||
      bookingEndDate.isBefore(bookingStartDate, 'day') ||
      dayjs(startDate).isSame(dayjs(), 'day')
    ) {
      return bookingStore.setError(true)
    }

    const checkOverLap = reservations.some(({ startDate, endDate }) => {
      const startDateI = dayjs(startDate)
      const endDateI = dayjs(endDate)

      return (
        (startDateI.isSameOrBefore(bookingEndDate) &&
          endDateI.isSameOrAfter(bookingEndDate)) ||
        (startDateI.isSameOrBefore(bookingStartDate) &&
          endDateI.isSameOrAfter(bookingStartDate)) ||
        (startDateI.isSameOrAfter(bookingStartDate) &&
          endDateI.isSameOrBefore(bookingEndDate))
      )
    })

    if (checkOverLap) return bookingStore.setError(true)

    bookingStore.setError(false)

    bookingStore.setPropertyData(propertyData)
    bookingStore.setbookingInfo({
      guest: guest,
      startDate,
      endDate,
    })
    modal.onOpen('booking')
  }

  return (
    <Surface className="my-4 w-full p-5 md:sticky md:top-24 md:w-[35%]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-bold text-neutral-950">
            ${propertyData.rate}
          </p>
          <p className="text-sm font-medium text-neutral-500">per night</p>
        </div>
        <StatusBadge tone="info" className="gap-1">
          <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          {propertyData.avgRating || 'New'}
        </StatusBadge>
      </div>

      <form className="mt-5" onSubmit={onReserve}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold text-neutral-700">
            Check in
            <Field
              type="date"
              min={minDate}
              max={maxDateValue}
              value={date.startDate}
              onChange={(e) =>
                setdate((prev) => ({
                  ...prev,
                  startDate: e.target.value,
                  endDate:
                    prev.endDate < e.target.value
                      ? e.target.value
                      : prev.endDate,
                }))
              }
              className="mt-1"
            />
          </label>

          <label className="text-sm font-semibold text-neutral-700">
            Check out
            <Field
              type="date"
              min={date.startDate || minDate}
              max={maxDateValue}
              value={date.endDate}
              onChange={(e) =>
                setdate((prev) => ({
                  ...prev,
                  endDate: e.target.value,
                }))
              }
              className="mt-1"
            />
          </label>
        </div>

        <label className="mt-3 block text-sm font-semibold text-neutral-700">
          Guests
          <Field
            type="number"
            min={1}
            placeholder="No. of guests"
            value={guest || ''}
            onChange={(e) => setguest(Number.parseInt(e.target.value, 10) || 0)}
            className="mt-1"
          />
        </label>

        {bookingStore.error && (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            Please enter valid dates and at least one guest.
          </p>
        )}

        <div className="mt-5 border-t border-neutral-200 pt-5">
          <Button type="submit" className="w-full">
            Reserve
          </Button>
          <p className="mt-3 text-center text-xs text-neutral-500">
            Demo checkout opens before a booking is finalized.
          </p>
        </div>
      </form>
    </Surface>
  )
}
