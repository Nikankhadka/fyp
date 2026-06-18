'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Mail, Save, X } from 'lucide-react'
import Api from '../../api/client/axios'
import { ErrorText } from '../random'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Button, Field } from '../ui/primitives'

interface Props {
  email: string
  setphonemail: React.Dispatch<React.SetStateAction<string>>
}

export default function EmailComp({ email, setphonemail }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: {
      email,
    },
  })

  const router = useRouter()
  const onSubmit: SubmitHandler<{ email: string }> = async (formdata) => {
    await Api.post(
      `/user/v1/addEmail`,
      { email: formdata.email },
      { withCredentials: true },
    )
      .then((res) => {
        toast.success('Please verify email for completion')
        router.refresh()
        setphonemail('close')
      })
      .catch((e) => {
        toast.error('Email update failed')
      })
  }

  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="block text-sm font-semibold text-neutral-800">
        Email
        <Field
          type="email"
          placeholder="Email"
          className="mt-1"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
      </label>

      {errors?.email && (
        <ErrorText text="Please enter a valid email address" />
      )}

      <div className="flex items-center justify-between border-t border-neutral-200 pt-3">
        <Button type="button" tone="ghost" onClick={() => setphonemail('close')}>
          <X className="mr-2 h-4 w-4" aria-hidden="true" />
          Cancel
        </Button>
        <Button type="submit">
          {email == '' ? (
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
          ) : (
            <Save className="mr-2 h-4 w-4" aria-hidden="true" />
          )}
          {email == '' ? 'Add email' : 'Update email'}
        </Button>
      </div>
    </form>
  )
}
