'use client'

import Link from 'next/link'
import { Home, MapPin, Pencil, Star } from 'lucide-react'
import Carousel from '../../../../components/carousel'
import { BookProperty } from '../../../../components/listing/BookProperty'
import Review from '../../../../components/review'
import Wish from '../../../../components/Svg/wishSvg'
import { FetchedMe, IReview, Property } from '../../../../interface/response'
import type { Reservation } from './page'
import ReviewInput from '../../../../components/reviewInput'
import SafeImage from '../../../../components/common/SafeImage'
import {
  EmptyState,
  LinkButton,
  StatusBadge,
  Surface,
  PageContainer,
} from '../../../../components/ui/primitives'

interface RoomProps {
  propertyData: Partial<Property>

  //check if in wishlist
  inWishList: boolean
  // user is owener tennnat admin
  user: string
  //onlydates
  reservations: Reservation[]

  //some features are not availabel for admin
  is_Admin: boolean

  //listout reviews and also check if current user provided review for edit and delete
  reviews: IReview[]

  //current user is passed to check if user has provided review then allow to edit
  currentUser?: string
}

function toTitleCase(value?: string | null) {
  if (!value) return ''

  return value
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function RoomClient({
  propertyData,
  inWishList,
  user,
  reservations,
  is_Admin,
  reviews,
  currentUser,
}: RoomProps) {
  const {
    images,
    name,
    country,
    state,
    city,
    avgRating,
    ratingCount,
    userId,
    propertyType,
    discription,
    amenities,
    rules,
    isBanned,
    isVerified,

    _id,
  } = propertyData

  const host = userId as FetchedMe | undefined
  const location = [country, state, city].filter(Boolean).join(', ')
  const isBannedListing = Boolean(isBanned?.status)
  const isVerifiedListing = Boolean(isVerified?.status)
  const canBook = !is_Admin && !isBannedListing && isVerifiedListing
  const canSave = !(is_Admin || user == 'owner')

  return (
    <main className="w-full bg-surface">
      <PageContainer className="pb-14 pt-8">
        <div className="flex flex-col gap-4 border-b border-outline-variant pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-onSurface md:text-3xl">
              {toTitleCase(name)}
            </h1>

            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-onSurface-variant">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {location || 'Location unavailable'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {canSave && (
              <div className="flex items-center gap-1 rounded-md border border-outline-variant bg-surface-container-lowest px-2 py-1">
                <Wish active={inWishList} id={_id!} user={user} />
                <span className="pr-2 text-sm font-semibold text-onSurface-variant">
                  Save
                </span>
              </div>
            )}

            {user == 'owner' && (
              <LinkButton href="/Home/Account/listings" tone="secondary">
                <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
                Edit
              </LinkButton>
            )}
          </div>
        </div>

        <Carousel images={images || []} />

        <div className="my-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="w-full space-y-6 md:w-[60%]">
            <Surface className="flex w-full items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-onSurface">
                  {toTitleCase(propertyType)} hosted by{' '}
                  {host?.userName || 'Meroghar host'}
                </h2>
                <p className="mt-1 text-sm text-onSurface-variant">
                  Verified marketplace host profile
                </p>
              </div>

              {host?._id ? (
                <Link href={`/Home/user/${host._id}`} className="block" target="_blank">
                  <SafeImage
                    src={host?.profileImg?.imgUrl}
                    alt="userProfile"
                    height={56}
                    width={56}
                    className="h-14 w-14 rounded-full border border-outline-variant object-cover"
                    fallbackText="No image"
                  />
                </Link>
              ) : (
                <SafeImage
                  src={host?.profileImg?.imgUrl}
                  alt="userProfile"
                  height={56}
                  width={56}
                  className="h-14 w-14 rounded-full border border-outline-variant object-cover"
                  fallbackText="No image"
                />
              )}
            </Surface>

            <Surface className="space-y-4">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-onSurface-variant">
                  {toTitleCase(propertyType)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-onSurface-variant">
                  {location || 'Location unavailable'}
                </p>
              </div>
            </Surface>

            <Surface>
              <h2 className="text-lg font-semibold text-onSurface">
                Description
              </h2>
              <p className="mt-2 text-sm leading-6 text-onSurface-variant">
                {toTitleCase(discription) || 'No description provided.'}
              </p>
            </Surface>

            <Surface>
              <h2 className="text-lg font-semibold text-onSurface">
                What this place offers
              </h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {(amenities || []).map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-md bg-surface-container px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <p className="text-sm text-onSurface-variant">{items}</p>
                    </div>
                  )
                })}
              </div>
              {(amenities || []).length === 0 && (
                <p className="mt-2 text-sm text-onSurface-variant/60">
                  Amenities have not been added yet.
                </p>
              )}
            </Surface>

            <Surface>
              <h2 className="text-lg font-semibold text-onSurface">Rules</h2>
              <p className="mt-2 text-sm leading-6 text-onSurface-variant">
                {toTitleCase(rules) || 'No specific rules provided.'}
              </p>
            </Surface>
          </div>

          {canBook && (
            <BookProperty
              reservations={reservations}
              user={user}
              propertyData={propertyData}
              is_Admin={is_Admin}
            />
          )}
          {!canBook && !is_Admin && (
            <Surface className="my-4 w-full bg-surface-container md:w-[35%]">
              <StatusBadge tone={isBannedListing ? 'danger' : 'warning'}>
                {isBannedListing ? 'Unavailable' : 'Pending approval'}
              </StatusBadge>
              <p className="mt-3 text-sm text-onSurface-variant">
                This property is not currently available for booking.
              </p>
            </Surface>
          )}
        </div>

        <hr className="my-8 border-outline-variant" />

        <div className="my-10 w-fit border-b-2 border-primary pb-3 text-lg font-semibold text-onSurface sm:text-xl">
          Reviews
        </div>

        {user == 'tennant' && (
          <Surface className="mb-8">
            <ReviewInput
              rating={1}
              Review=""
              userData={host || {}}
              propertyId={_id!}
              edit={false}
            />
          </Surface>
        )}

        <div>
          <div className="my-8 flex items-center gap-2">
            <Star
              className="h-5 w-5 fill-primary text-primary"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold text-onSurface sm:text-xl">
              {avgRating || 'New'}
            </p>
            <span className="text-outline-variant">/</span>
            <p className="text-lg font-semibold text-onSurface sm:text-xl">
              {ratingCount || 0} reviews
            </p>
          </div>

          {reviews.length === 0 && (
            <EmptyState
              title="No reviews yet"
              description="Reviews from completed guest stays will appear here."
            />
          )}
          <div className="grid w-full gap-5 md:grid-cols-2">
            {reviews.map((data, index) => {
              return (
                <Review
                  key={index}
                  reviewData={data}
                  currentUser={currentUser!}
                />
              )
            })}
          </div>
        </div>
      </PageContainer>
    </main>
  )
}
