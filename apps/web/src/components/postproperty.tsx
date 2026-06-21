'use client'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import { ErrorText } from './random'
import { PropertyForm} from '../interface/form'
import { Images } from '../interface/request'
import { PostPropery, UpdatePropery } from '../api/client/property'
import { Plus, Trash2, Camera } from 'lucide-react'
import { amenities, propertyOptions } from '../configs/constant'
import { useState, useEffect } from 'react'
import useCountry from '../store/useCountry'
import type { ICountry} from 'country-state-city'
import useConfirm from '../store/useConfirm'
import useModal from '../store/useModal'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Property } from '../interface/response'
import useRandom from '../store/randomStore'
import { uploadImage } from '../api/client/uploadImag'
import Image from 'next/image'
import { Button, Field, SelectField, TextArea, PageHeader, Surface } from './ui/primitives'

interface postProperty {
  propertyData?: Partial<Property>
  isUpdate: boolean
}

export default function PostPropertyForm({
  isUpdate,
  propertyData,
}: postProperty) {
  
  let defaultValues: PropertyForm = {
    images:['default'],
    name: '',
   
      country: '',
      city: '',
      state: '',

    discription: '',
    rules: '',
    amenities: [],
    rate: 0,
    propertyType:'hotel',
  }

  // If this is an update form, set the default values based on the passed property data
  if (isUpdate && propertyData) {
    defaultValues.images = propertyData.images || defaultValues.images
    defaultValues.name = propertyData.name || ''
    defaultValues.country = propertyData.country || defaultValues.country,
    defaultValues.state = propertyData.state || defaultValues.state,
    defaultValues.city = propertyData.city || defaultValues.city,
    defaultValues.discription = propertyData.discription || ''
    defaultValues.rules = propertyData.rules! || ''
    defaultValues.amenities = propertyData.amenities || []
    defaultValues.rate = propertyData.rate || 0
    defaultValues.propertyType = propertyData.propertyType || 'hotel'
  }

  const list = useRandom()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<PropertyForm>({
    defaultValues: defaultValues,
    mode: 'onChange',
  })

  const { fields, append, remove } = useFieldArray({ name: 'images', control })

  // for country state and city
  const [countries, setCountries] = useState<ICountry[]>([])
  const countryhook = useCountry()
  const confirmModal = useConfirm()
  const modal = useModal()
  const router = useRouter()

  useEffect(() => {
    void countryhook.loadCountries().then(setCountries)
  }, [countryhook])

  // every change detected is recorded here we want to fetch the image information only
  const imagesS = watch('images')

  const imageUrl = (index: number) => {
    try {
      return URL.createObjectURL(imagesS[index][0])
    } catch (e) {
      try {
        if (propertyData?.images![index].imgUrl) {
          return propertyData.images[index].imgUrl
        }
      } catch (e) {
        return ''
      }
    }
  }

  const onSubmit: SubmitHandler<PropertyForm> = async (formdata) => {

    const postConfirmation = async () => {
      modal.setLoading(true)
      const amenities = formdata.amenities.filter((item) => item != '')

      const { name, country,state,city, discription, rate, propertyType, rules } =
        formdata
      let images: Images[] = []

      //there might be multiple image upload so
      const imageData = new FormData()
      //since there might be multiple images
      try {
        for (const image of formdata.images) {
          if (!(image?.[0] instanceof File)) {
            throw new Error('Choose an image before posting the property')
          }

          const uploadedImg = await uploadImage(image[0])

          await images.push({
            imgId: uploadedImg.imgId,
            imgUrl: uploadedImg.imgUrl,
          })
        }
      } catch (e: any) {
        toast.error(e?.message || 'Property image upload failed')
        modal.setLoading(false)
        return modal.onClose()
      }

      let RequestBody: PropertyForm={
        name,
        
          country: countryhook.getCountryData(parseInt(country)).name,
          state: countryhook.getStateData(
            parseInt(country),
            parseInt(state)
          ).name,
          city:city,
        
        discription,
        rate,
        propertyType,
        rules,
        amenities,
        images,
      }
      console.log(RequestBody)
      console.log(RequestBody.images)

      try {
        const newProperty = await PostPropery(RequestBody)
        if (newProperty) {
          toast.success('Property Posted Successfully')
          modal.onClose()
          list.onList('close')
          modal.setLoading(false)
          return router.refresh()
        }
      } catch (e: any) {
        console.log(e)
        toast.error(`property Post Failed/${e.message}`)
        modal.setLoading(false)
        modal.onClose()
      }
    }

    //now for update property

    const updateConfirmation = async () => {

      modal.setLoading(true)
      const amenities = formdata.amenities.filter((item) => item != '')

      const { name, country,state,city, discription, rate, propertyType, rules } =
        formdata
      let images: Images[] = []
      //since there might be multiple images
      try {
        for (const image of formdata.images) {
          if (image?.[0] instanceof File) {
            const { imgId, imgUrl } = await uploadImage(image[0])
            images.push({ imgId: imgId, imgUrl: imgUrl })
          } else {
            images.push(image)
          }
        }
      } catch (e: any) {
        toast.error(e?.message || 'Property image upload failed')
        modal.setLoading(false)
        return modal.onClose()
      }

      let RequestBody: PropertyForm = {
        name,
        
          country:
            propertyData?.country == formdata.country
              ? formdata.country
              : countryhook.getCountryData(parseInt(formdata.country))
                  .name,
          state:
            propertyData?.state == formdata.state
              ? formdata.state
              : countryhook.getStateData(
                  parseInt(formdata.country),
                  parseInt(formdata.state)
                ).name,
          city: formdata.city,
        
        discription,
        rate,
        propertyType,
        rules,
        amenities,
        images,
      }

      console.log('final form', RequestBody)

      try {
        const uProperty = await UpdatePropery(propertyData?._id!, RequestBody)
        if (uProperty) {
          toast.success('Property updated Successfully/Needs Reverification')
          modal.onClose()
          list.onList('close')
          modal.setLoading(false)
          return router.refresh()
        }
      } catch (e: any) {
        console.log(e)
        toast.error(`property update Failed/${e.message}`)
        modal.setLoading(false)
        modal.onClose()
      }
    }

    //confirmation logic
    confirmModal.onContent({
      header: isUpdate
        ? 'Are You Sure You Want To Update?'
        : 'Are You sure You Want to Post',
      actionBtn: isUpdate ? 'Update Property' : 'Post Property',
      onAction: isUpdate ? updateConfirmation : postConfirmation,
    })

    //render modal
    modal.onOpen('confirm')
  }

  return (
    <main className="my-2 w-full p-3">
      <PageHeader
        title={isUpdate ? 'Update Property' : 'Post Property'}
        description={isUpdate ? 'Edit your property listing details.' : 'Add a new rental property to your listings.'}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Surface>
          <div className="space-y-4">
            {fields.map((field, index) => {
              return (
                <div className="flex w-full flex-col items-center gap-3" key={field.id}>
                  <div className={
                      imageUrl(index) == ''
                        ? 'hidden'
                        : 'relative h-[200px] w-full rounded-lg sm:h-[270px] md:h-[320px] md:w-[80%] lg:h-[400px]'
                    }>
                  <Image
                    fill={true}
                    src={imageUrl(index)!}
                    alt='Image Here'
                   
                  />
                  </div>
                 

                  <div className="flex w-full flex-col items-start justify-around gap-3 sm:flex-row sm:items-center">
                    <label className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 py-5 text-center transition hover:bg-neutral-100 sm:max-w-sm">
                      <Camera className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="text-sm font-semibold text-neutral-800">
                        Upload image
                      </span>
                      <input
                        type="file"
                        className="sr-only"
                        key={field.id}
                        {...register(`images.${index}` as const, {
                          required: isUpdate ? false : true,
                        })}
                      />
                    </label>

                    {index != 0 && (
                      <Button
                        type="button"
                        tone="danger"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
                        Remove
                      </Button>
                    )}
                  </div>
                  {errors?.images?.[index] && (
                    <ErrorText text="Please Upload image for the Field" />
                  )}
                </div>
              )
            })}

            <Button
              type="button"
              tone="secondary"
              onClick={() => append({ image: 'newImage' })}
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              Add Image
            </Button>
          </div>
        </Surface>

        <Surface>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-semibold text-neutral-800">
                Property Title
              </label>
              <Field
                type="text"
                placeholder="PropertyName"
                className="mt-1"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <ErrorText text="Please Enter Valid PropertyName" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800">
                Property Type
              </label>
              <SelectField
                className="mt-1"
                {...register('propertyType', { required: true })}
              >
                {propertyOptions.map((type,index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </SelectField>

              {errors.propertyType && (
                <ErrorText text="Select Property Type Pls" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800">Usd Rate/Night</label>
              <Field
                type="number"
                placeholder="Price"
                className="mt-1"
                {...register('rate', { required: true, minLength: 1, min:{value:0,message:"Please enter non negative no."} })}
              />
              {errors.rate && <ErrorText text="Please Enter Valid Price" />}
            </div>
          </div>

          <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-semibold text-neutral-800">
                Country 
              </label>
              <SelectField
                className="mt-1"
                {...register('country', { required: true })}
              >
                <option value={defaultValues.country}>
                  {defaultValues.country == ''
                    ? 'Select a Country'
                    : defaultValues.country}
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={index}>{country.name}</option>
                ))}
              </SelectField>

              {errors?.country && (
                <ErrorText text="Please Select Valid Country" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800">State </label>
              <SelectField
                className="mt-1"
                {...register('state', { required: true })}
              >
                <option value={defaultValues.state}>
                  {defaultValues.state == ''
                    ? 'Select a state'
                    : defaultValues.state}
                </option>
                {countryhook
                  .getStates(parseInt(watch('country')))
                  .map((state, index) => (
                    <option key={index} value={index}>{state.name}</option>
                  ))}
              </SelectField>
              {errors?.state && (
                <ErrorText text="Please Select Valid State" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800">City</label>
              <SelectField
                className="mt-1"
                {...register('city', { required: true })}
              >
                <option value={defaultValues.city}>
                  {defaultValues.city == ''
                    ? 'Select a City'
                    : defaultValues.city}
                </option>
                {countryhook
                  .getCities(
                    parseInt(watch('country')),
                    parseInt(watch('state'))
                  )
                  .map((city,index) => (
                    <option key={index} value={city.name}>{city.name}</option>
                  ))}
              </SelectField>
              {errors?.city && (
                <ErrorText text="Please Select Valid City" />
              )}
            </div>
          </div>
        </Surface>

        <Surface>
          <div>
            <label className="block text-sm font-semibold text-neutral-800">
              Property Description
            </label>
            <TextArea
              rows={5}
              placeholder="Description"
              className="mt-1"
              {...register('discription', { required: true })}
            />

            {errors.discription && (
              <ErrorText text="Please Enter Valid Property Description" />
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-neutral-800">Rules</label>
            <TextArea
              rows={5}
              placeholder="Rules"
              className="mt-1"
              {...register('rules', { required: true })}
            />

            {errors.rules && <ErrorText text="Please Enter Rules/Criteria" />}
          </div>
        </Surface>

        <Surface>
          <span className="block text-sm font-semibold text-neutral-800">Amenities</span>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {amenities.map((items, index) => {
              return (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    value={items}
                    {...register(`amenities.${index}` as const)}
                    className="h-4 w-4 cursor-pointer accent-themeColor"
                  />
                  <label className="ml-2 text-sm text-neutral-700">
                    {items}
                  </label>
                </div>
              )
            })}
          </div>
        </Surface>

        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <Button type="button" tone="ghost" onClick={(e) => {
              e.preventDefault()
              list.onList('close')
            }}>
            Cancel
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </main>
  )
}
