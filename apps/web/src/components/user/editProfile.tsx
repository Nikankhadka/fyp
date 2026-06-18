'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Camera, Save, X } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { ErrorText } from '../random'
import { uploadImage } from '../../api/client/uploadImag'
import Api from '../../api/client/axios'
import useConfirm from '../../store/useConfirm'
import useModal from '../../store/useModal'
import useAccount from '../../store/AccountState'
import { Button, Field, TextArea } from '../ui/primitives'
import { normalizeImageSrc } from '../common/normalizeImageSrc'

interface EditProfile {
  userName?: string
  profileImg?: FileList
  about?: string
}

interface ProfilePayload {
  userName?: string
  profileImg?: {
    imgId: string
    imgUrl: string
  }
  about?: string
}

interface Prop {
  userName: string
  about: string
  img: string
}

export function EditBasic({ userName, about, img }: Prop) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditProfile>({
    defaultValues: {
      userName,
      about,
    },
  })

  const confirm = useConfirm()
  const confirmModal = useModal()
  const router = useRouter()
  const account = useAccount()
  const [error, seterror] = useState(false)

  const image = watch('profileImg')
  const existingImageSrc = normalizeImageSrc(img)
  const selectedFile = image?.[0]
  const previewSrc = useMemo(() => {
    if (!selectedFile) return existingImageSrc
    return URL.createObjectURL(selectedFile)
  }, [existingImageSrc, selectedFile])

  const submitHandler: SubmitHandler<EditProfile> = async (formdata) => {
    const hasName = Boolean(formdata.userName?.trim())
    const hasAbout = Boolean(formdata.about?.trim())
    const hasProfileImage = Boolean(formdata.profileImg?.length)

    if (!hasName && !hasAbout && !hasProfileImage) {
      return seterror(true)
    }
    seterror(false)

    const onSubmit = async () => {
      try {
        confirmModal.setLoading(true)

        const profileData: ProfilePayload = {}

        if (hasName) profileData.userName = formdata.userName?.trim()
        if (hasAbout) profileData.about = formdata.about?.trim()

        if (hasProfileImage && formdata.profileImg?.[0]) {
          const upload = await uploadImage(formdata.profileImg[0])
          profileData.profileImg = {
            imgId: upload.imgId,
            imgUrl: upload.imgUrl,
          }
        }

        const updateProfile = await Api.patch(
          '/user/v1/updateProfile',
          { ...profileData },
          { withCredentials: true },
        )
        if (updateProfile.data.success) {
          toast.success('User profile data successfully updated')
          account.onClose()
          confirmModal.setLoading(false)
          confirmModal.onClose()
          return router.refresh()
        }
        confirmModal.setLoading(false)
        confirmModal.onClose()
        toast.error('Profile upload failed')
      } catch (e: any) {
        confirmModal.setLoading(false)
        confirmModal.onClose()
        return toast.error(e?.message || 'Profile upload failed')
      }
    }

    confirm.onContent({
      header: 'Are you sure you want to update profile details?',
      actionBtn: 'Update',
      onAction: onSubmit,
    })

    confirmModal.onOpen('confirm')
  }

  return (
    <main className="w-full max-w-3xl p-2">
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-neutral-800">
            Profile image
          </label>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            {previewSrc ? (
              <Image
                width={160}
                height={160}
                src={previewSrc}
                alt="Profile preview"
                className="h-28 w-28 rounded-full border border-neutral-200 object-cover p-1 md:h-40 md:w-40"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-neutral-300 bg-neutral-50 text-center text-xs text-neutral-500 md:h-40 md:w-40">
                No image
              </div>
            )}

            <label className="flex min-h-24 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 py-5 text-center transition hover:bg-neutral-100 sm:max-w-sm">
              <Camera className="mb-2 h-5 w-5 text-themeColor" aria-hidden="true" />
              <span className="text-sm font-semibold text-neutral-800">
                Upload profile image
              </span>
              <span className="mt-1 text-xs text-neutral-500">
                JPG, PNG, or WebP
              </span>
              <input type="file" accept="image/*" className="sr-only" {...register('profileImg')} />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-800">
            Username
          </label>
          <Field
            type="text"
            placeholder="Username"
            className="mt-1 max-w-xl"
            {...register('userName')}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-800">
            About
          </label>
          <TextArea
            rows={5}
            placeholder="Tell guests and hosts a little about yourself"
            className="mt-1 max-w-2xl"
            {...register('about')}
          />
        </div>

        {errors.profileImg && <ErrorText text="Please select a valid image" />}
        {error && <ErrorText text="Please enter at least one profile update" />}

        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <Button type="button" tone="ghost" onClick={() => account.onClose()}>
            <X className="mr-2 h-4 w-4" aria-hidden="true" />
            Cancel
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" aria-hidden="true" />
            Save
          </Button>
        </div>
      </form>
    </main>
  )
}
