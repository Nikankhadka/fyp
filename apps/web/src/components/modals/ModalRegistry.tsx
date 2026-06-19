'use client'

import dynamic from 'next/dynamic'
import ToasterProvider from '../toast/toastProvider'
import { LoginModal } from './loginModal'
import { RegisterModal } from './registerModal'
import { ConfirmModal } from './confirmModal'
import { MessageModal } from './rejectReportModal'

const BookingModal = dynamic(
  () => import('./bookingBillModal').then((mod) => mod.BookingModal),
  { ssr: false },
)
const ResetPassword = dynamic(() => import('./forgotpassword'), { ssr: false })
const SearchModal = dynamic(
  () => import('./searchModal').then((mod) => mod.SearchModal),
  { ssr: false },
)

export default function ModalRegistry() {
  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <ConfirmModal />
      <MessageModal />
      <BookingModal />
      <ResetPassword />
      <SearchModal />
    </>
  )
}
