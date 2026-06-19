'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  CheckCircle2,
  Edit3,
  KeyRound,
  MinusCircle,
  ShieldCheck,
  ShieldX,
  Star,
  UserRoundCog,
} from 'lucide-react'
import Card from '../card/card'
import { FetchedMe, Property } from '../../interface/response'
import useAccount from '../../store/AccountState'
import { normalizeImageSrc } from '../common/normalizeImageSrc'
import {
  Button,
  EmptyState,
  PageHeader,
  StatusBadge,
  Surface,
} from '../ui/primitives'
import { cn } from '../../utils/cn'

const EditBasic = dynamic(() => import('./editProfile').then((mod) => mod.EditBasic), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-onSurface-variant">Loading profile editor...</div>,
})
const AccountComponent = dynamic(() => import('./account'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-onSurface-variant">Loading account settings...</div>,
})
const Password = dynamic(() => import('./pasword'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-onSurface-variant">Loading password editor...</div>,
})

interface ProfileProps {
  userId: string
  profileData: Partial<FetchedMe>
  listings?: Partial<Property>[]
  is_Admin: boolean
}

function ProfileTab({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean
  icon: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <Button
      type="button"
      tone={active ? 'secondary' : 'ghost'}
      onClick={onClick}
      className={cn(
        'min-h-10 justify-start whitespace-nowrap',
        active && 'border-primary text-primary',
      )}
    >
      {icon}
      {label}
    </Button>
  )
}

function VerificationItem({
  label,
  verified,
}: {
  label: string
  verified: boolean
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-surface-container px-3 py-2">
      {verified ? (
        <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
      ) : (
        <MinusCircle className="h-4 w-4 text-onSurface-variant/40" aria-hidden="true" />
      )}
      <span className="text-sm font-medium text-onSurface-variant">{label}</span>
    </div>
  )
}

export default function Profile({
  userId,
  profileData,
  listings = [],
  is_Admin,
}: ProfileProps) {
  const {
    profileImg,
    kycInfo,
    email,
    kyc,
    about,
    recievedReviewcount,
    avgRating,
    createdAt,
    userName,
    password,
  } = profileData
  const profileImageSrc = normalizeImageSrc(profileImg?.imgUrl)
  const account = useAccount()
  const isOwnProfile = userId == profileData._id
  const joinedYear = createdAt ? new Date(createdAt).getFullYear() : 'Unknown'
  const identityVerified = Boolean(kyc?.isVerified)
  const emailVerified = Boolean(email?.isVerified)
  const phoneVerified = Boolean(kycInfo?.phoneNumber)
  const activeComponent = isOwnProfile ? account.openComponent : 'close'
  const showingOverview = activeComponent == 'close'

  return (
    <main className="my-5 space-y-4">
      <Surface className="p-5">
        <PageHeader
          title={`Hi, I am ${userName || 'Meroghar user'}`}
          description={`Joined in ${joinedYear}`}
          action={
            <StatusBadge tone={identityVerified ? 'success' : 'warning'}>
              {identityVerified ? 'Identity verified' : 'Identity not verified'}
            </StatusBadge>
          }
        />

        <div className="grid gap-6 md:grid-cols-[180px_1fr]">
          <div className="flex justify-center md:justify-start">
            {profileImageSrc ? (
              <Image
                height={160}
                width={160}
                src={profileImageSrc}
                alt="user"
                className="h-32 w-32 rounded-full border border-neutral-200 object-cover p-1 md:h-40 md:w-40"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 p-1 text-center text-xs text-neutral-500 md:h-40 md:w-40">
                No image available
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-md border border-neutral-200 p-3">
                <div className="flex items-center gap-2 text-primary">
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase text-neutral-500">
                    Reviews
                  </span>
                </div>
                <p className="mt-2 text-xl font-bold text-neutral-950">
                  {recievedReviewcount || 0}
                </p>
              </div>

              <div className="rounded-md border border-neutral-200 p-3">
                <div className="flex items-center gap-2 text-primary">
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase text-neutral-500">
                    Rating
                  </span>
                </div>
                <p className="mt-2 text-xl font-bold text-neutral-950">
                  {avgRating || 'New'}
                </p>
              </div>

              <div className="rounded-md border border-neutral-200 p-3">
                <div className="flex items-center gap-2 text-primary">
                  {identityVerified ? (
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ShieldX className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="text-xs font-semibold uppercase text-neutral-500">
                    Trust
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-neutral-950">
                  {identityVerified ? 'Verified' : 'Pending'}
                </p>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <VerificationItem label="Identity" verified={identityVerified} />
              <VerificationItem label="Email" verified={emailVerified} />
              <VerificationItem label="Phone" verified={phoneVerified} />
            </div>

            {isOwnProfile && (
              <div className="flex gap-2 overflow-x-auto border-t border-neutral-200 pt-4">
                <ProfileTab
                  active={activeComponent == 'profile'}
                  icon={<Edit3 className="mr-2 h-4 w-4" aria-hidden="true" />}
                  label="Edit profile"
                  onClick={() => account.onOpen('profile')}
                />
                <ProfileTab
                  active={activeComponent == 'account'}
                  icon={<UserRoundCog className="mr-2 h-4 w-4" aria-hidden="true" />}
                  label="Account settings"
                  onClick={() => account.onOpen('account')}
                />
                {password && (
                  <ProfileTab
                    active={activeComponent == 'password'}
                    icon={<KeyRound className="mr-2 h-4 w-4" aria-hidden="true" />}
                    label="Password"
                    onClick={() => account.onOpen('password')}
                  />
                )}
                {!showingOverview && (
                  <Button type="button" tone="ghost" onClick={() => account.onClose()}>
                    Overview
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {showingOverview && (
          <div className="mt-6 border-t border-neutral-200 pt-5">
            <h2 className="text-lg font-semibold text-neutral-950">About</h2>
            <p className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-700">
              {about || 'This user has not added an about section yet.'}
            </p>
          </div>
        )}

        {showingOverview && listings.length === 0 && (
          <EmptyState
            title="No public listings yet"
            description="Listings from this host will appear here after they are approved."
          />
        )}

        {showingOverview && listings.length > 0 && (
          <div className="mt-6 border-t border-neutral-200 pt-5">
            <h2 className="mb-4 text-lg font-semibold text-neutral-950">
              {profileData.userName || 'Host'}&apos;s listings
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {listings.map((data, index) => {
                return <Card data={data} key={data._id || index} />
              })}
            </div>
          </div>
        )}
      </Surface>

      {activeComponent == 'profile' && (
        <Surface>
          <EditBasic
            img={profileImg?.imgUrl || ''}
            userName={userName || ''}
            about={about || ''}
          />
        </Surface>
      )}

      {is_Admin && userId !== profileData._id && showingOverview && (
        <AccountComponent userData={profileData} is_Admin={true} userId={userId} />
      )}

      {activeComponent == 'account' && (
        <AccountComponent userData={profileData} is_Admin={is_Admin} userId={userId} />
      )}

      {activeComponent == 'password' && (
        <Surface>
          <Password />
        </Surface>
      )}
    </main>
  )
}
