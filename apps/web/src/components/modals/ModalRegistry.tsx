'use client'

import dynamic from 'next/dynamic'
import ToasterProvider from '../toast/toastProvider'

const LoginModal = dynamic(
  () => import('./loginModal').then((mod) => mod.LoginModal),
  { ssr: false },
)
const RegisterModal = dynamic(
  () => import('./registerModal').then((mod) => mod.RegisterModal),
  { ssr: false },
)
const ConfirmModal = dynamic(
  () => import('./confirmModal').then((mod) => mod.ConfirmModal),
  { ssr: false },
)
const MessageModal = dynamic(
  () => import('./rejectReportModal').then((mod) => mod.MessageModal),
  { ssr: false },
)
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
