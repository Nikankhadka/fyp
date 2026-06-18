'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  XCircle,
} from 'lucide-react'
import { FetchedMe } from '../../interface/response'
import { normalizeImageSrc } from '../common/normalizeImageSrc'
import {
  Button,
  PageHeader,
  StatusBadge,
  Surface,
} from '../ui/primitives'

const Kyc = dynamic(() => import('./kyc'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading KYC form...</div>,
})
const PhoneComp = dynamic(() => import('./phone').then((mod) => mod.PhoneComp), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading phone verification...</div>,
})
const EmailComp = dynamic(() => import('./emailcomp'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading email editor...</div>,
})

interface Props {
  userId?: string
  userData: Partial<FetchedMe>
  is_Admin: boolean
}

export default function AccountComponent({ userData, is_Admin, userId }: Props) {
  const [openKyc, setopenKyc] = useState('close')
  const [phonemail, setphonemail] = useState('close')

  const { kycInfo, kyc, email } = userData
  const kycImageSrc = normalizeImageSrc(kycInfo?.img?.imgUrl)
  const hasKycInfo = Boolean(kyc?.isVerified || kyc?.pending)
  const userMatch = userData._id == userId
  const adminKycView = userId != userData._id && is_Admin
  const canViewPrivateInfo = userMatch || is_Admin
  const statusTone = kyc?.isVerified ? 'success' : kyc?.pending ? 'warning' : 'danger'
  const statusLabel = kyc?.isVerified
    ? 'Verified'
    : kyc?.pending
      ? 'Pending'
      : kyc?.message
        ? 'Rejected / apply again'
        : 'Not submitted'

  if (openKyc == 'add' || openKyc == 'edit') {
    return <Kyc setopenKyc={setopenKyc} userData={userData} />
  }

  return (
    <Surface className="mx-auto p-5">
      <PageHeader
        title="Personal information"
        description="Manage identity, email, phone, and KYC details."
        action={<StatusBadge tone={statusTone}>{statusLabel}</StatusBadge>}
      />

      {userMatch && !is_Admin && (
        <div className="mb-6 rounded-md border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-neutral-900">KYC status</p>
            <StatusBadge tone={statusTone}>{statusLabel}</StatusBadge>
            {kyc?.pending && <Clock3 className="h-4 w-4 text-amber-600" aria-hidden="true" />}
            {kyc?.isVerified && (
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            )}
            {!kyc?.pending && !kyc?.isVerified && (
              <XCircle className="h-4 w-4 text-red-600" aria-hidden="true" />
            )}
          </div>

          {kyc?.message && (
            <p className="mt-2 text-sm font-medium text-red-600">
              Message: {kyc.message}
            </p>
          )}
        </div>
      )}

      {!hasKycInfo && !is_Admin && (
        <div className="mb-6 flex flex-col gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-neutral-950">
              Provide KYC information?
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Verified identity is required before creating listings.
            </p>
          </div>
          <Button type="button" onClick={() => setopenKyc('add')}>
            Add KYC
          </Button>
        </div>
      )}

      {hasKycInfo && canViewPrivateInfo && (
        <div className="space-y-3">
          <Info title="First name" value={kycInfo?.firstName || 'Not provided'} />
          <Info title="Last name" value={kycInfo?.lastName || 'Not provided'} />
          <Info title="Gender" value={kycInfo?.gender || 'Not provided'} />
          <Info
            title="Address"
            value={[kycInfo?.country, kycInfo?.state, kycInfo?.city]
              .filter(Boolean)
              .join(', ') || 'Not provided'}
          />
        </div>
      )}

      {canViewPrivateInfo && (
        <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
          {phonemail != 'email' && (
            <Info
              title="Email"
              value={
                kycInfo?.email ||
                (email?.mail ? `${email.mail}${email.isVerified ? '' : ' -- verify mail'}` : 'Not provided')
              }
              icon={<Mail className="h-4 w-4 text-themeColor" aria-hidden="true" />}
              action={
                !adminKycView && (
                  <Button
                    type="button"
                    tone="secondary"
                    onClick={() => setphonemail('email')}
                  >
                    {kycInfo?.email ? 'Edit' : 'Add'}
                  </Button>
                )
              }
            />
          )}

          {phonemail == 'email' && (
            <Surface className="bg-neutral-50">
              <EmailComp email={kycInfo?.email || ''} setphonemail={setphonemail} />
            </Surface>
          )}

          {phonemail != 'phone' && (
            <Info
              title="Phone number"
              value={kycInfo?.phoneNumber || 'Not provided'}
              icon={<Phone className="h-4 w-4 text-themeColor" aria-hidden="true" />}
              action={
                !adminKycView && (
                  <Button
                    type="button"
                    tone="secondary"
                    onClick={() => setphonemail('phone')}
                  >
                    {kycInfo?.phoneNumber ? 'Edit' : 'Add'}
                  </Button>
                )
              }
            />
          )}

          {phonemail == 'phone' && (
            <Surface className="bg-neutral-50">
              <PhoneComp
                phoneNumber={kycInfo?.phoneNumber || ''}
                setphonemail={setphonemail}
              />
            </Surface>
          )}
        </div>
      )}

      {hasKycInfo && canViewPrivateInfo && (
        <div className="mt-6 border-t border-neutral-200 pt-6">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-themeColor" aria-hidden="true" />
            <h2 className="text-sm font-semibold text-neutral-950">Identity document</h2>
          </div>
          {kycImageSrc ? (
            <Image
              width={720}
              height={480}
              src={kycImageSrc}
              alt="KYC document"
              className="h-auto max-h-[420px] w-full rounded-md border border-neutral-200 object-contain"
            />
          ) : (
            <div className="flex min-h-[180px] w-full items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 text-center text-sm text-neutral-500">
              KYC image unavailable
            </div>
          )}
        </div>
      )}

      {hasKycInfo && !is_Admin && (
        <div className="mt-6 flex justify-end border-t border-neutral-200 pt-5">
          {!adminKycView && (
            <Button type="button" tone="secondary" onClick={() => setopenKyc('edit')}>
              Edit all
            </Button>
          )}
        </div>
      )}
    </Surface>
  )
}

interface InfoProps {
  title: string
  value: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

function Info({ title, value, icon, action }: InfoProps) {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        {icon || <ShieldCheck className="mt-0.5 h-4 w-4 text-themeColor" aria-hidden="true" />}
        <div>
          <h3 className="text-sm font-semibold text-neutral-950">{title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{value}</p>
        </div>
      </div>
      {action}
    </div>
  )
}
