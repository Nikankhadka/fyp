'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { KeyRound, Save, X } from 'lucide-react'
import toast from 'react-hot-toast'
import useAccount from '../../store/AccountState'
import useConfirm from '../../store/useConfirm'
import Api from '../../api/client/axios'
import { useRouter } from 'next/navigation'
import useModal from '../../store/useModal'
import { ErrorText } from '../random'
import { Button, Field, PageHeader } from '../ui/primitives'

interface PasswordForm {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

export default function Password() {
  const account = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>()
  const [error, seterror] = useState(0)
  const router = useRouter()
  const confirm = useConfirm()
  const confirmModal = useModal()

  const onSubmit: SubmitHandler<PasswordForm> = async (formdata) => {
    const { oldPassword, newPassword, confirmNewPassword } = formdata
    if (newPassword != confirmNewPassword) return seterror(1)
    seterror(0)

    const onSubmit = async () => {
      await Api.patch(
        '/user/v1/updateProfile',
        { oldPassword, newPassword },
        { withCredentials: true },
      )
        .then((res) => {
          toast.success('Password successfully updated')
          router.refresh()
          account.onClose()
          return confirmModal.onClose()
        })
        .catch((e) => {
          confirmModal.onClose()
          seterror(2)
          return toast.error('Password update failed')
        })
    }

    confirm.onContent({
      header: 'Are you sure you want to update password?',
      actionBtn: 'Update',
      onAction: onSubmit,
    })

    confirmModal.onOpen('confirm')
  }

  return (
    <main className="mx-auto max-w-2xl">
      <PageHeader
        title="Change password"
        description="Update the password used for email and password login."
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block text-sm font-semibold text-neutral-800">
          Old password
          <Field
            type="password"
            placeholder="Old password"
            className="mt-1"
            {...register('oldPassword', { required: true })}
          />
          {errors.oldPassword && <ErrorText text="Please enter your current password" />}
        </label>

        <label className="block text-sm font-semibold text-neutral-800">
          New password
          <Field
            type="password"
            placeholder="New password"
            className="mt-1"
            {...register('newPassword', { required: true })}
          />
          {errors.newPassword && <ErrorText text="Please enter a new password" />}
        </label>

        <label className="block text-sm font-semibold text-neutral-800">
          Confirm password
          <Field
            type="password"
            placeholder="Confirm password"
            className="mt-1"
            {...register('confirmNewPassword', { required: true })}
          />
          {errors.confirmNewPassword && (
            <ErrorText text="Please confirm your new password" />
          )}
        </label>

        {error == 1 && <ErrorText text="New passwords do not match" />}
        {error == 2 && <ErrorText text="Current password or new password is invalid" />}

        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <Button type="button" tone="ghost" onClick={() => account.onClose()}>
            <X className="mr-2 h-4 w-4" aria-hidden="true" />
            Cancel
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" aria-hidden="true" />
            Update
          </Button>
        </div>
      </form>
    </main>
  )
}
