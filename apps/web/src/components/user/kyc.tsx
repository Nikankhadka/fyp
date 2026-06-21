'use client'


import { useState, useEffect } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { ErrorText } from '../random'

import 'react-phone-input-2/lib/style.css'

import {postKyc} from '../../api/client/user'
import { uploadImage } from '../../api/client/uploadImag'
import { KycData } from '../../interface/form'
import useModal from '../../store/useModal'
import useConfirm from '../../store/useConfirm'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { PhoneComp } from './phone'
import useCountry from '../../store/useCountry'
import type { ICountry } from 'country-state-city'
import { FetchedMe } from '../../interface/response'
import Image from 'next/image'
import { Camera, Save, X } from 'lucide-react'
import { Button, Field, SelectField, PageHeader, Surface } from '../ui/primitives'

interface form {
  firstName: string
  lastName: string
  gender: string

    country: string,
    state:string,
    city: string,

  email?: string
  img: any|{
        imgId: string
        imgUrl: string
      }
}

interface kycprops {
  setopenKyc: React.Dispatch<React.SetStateAction<string>>
  userData:Partial<FetchedMe>
}

export default function Kyc({ setopenKyc,userData }: kycprops) {
  const {email,kyc,kycInfo}=userData
 
  const confirmData=useConfirm();
        const [countries, setCountries] = useState<ICountry[]>([]);
        const country=useCountry();
        const confirm=useConfirm();
        const confirmModal=useModal();
        const router=useRouter();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<form>({
    defaultValues:{
      firstName:kycInfo!.firstName,
      lastName:kycInfo!.lastName,
      gender:kycInfo!.gender,
      
        country:kycInfo!.country,
        state:kycInfo!.state,
        city:kycInfo!.city,
     
      
      //donot put image here since onlyfile can be default 
    }
  })
  const gender = ['Male', 'Female', 'Others']
  const img = watch('img')

  const imageUrl = () => {
    try {
      return URL.createObjectURL(img[0])
    } catch (e) {
      console.log(e)
      return kycInfo!.img.imgUrl||''
    }
  }

 useEffect(()=>{
        void country.loadCountries().then(setCountries)
},[country])

  const onSubmit: SubmitHandler<form> = async (formdata) => {


    const submitAction=async()=>{

      try {
      confirmModal.setLoading(true)
      let kycdata: KycData = {
        kycInfo: {
          firstName:formdata.firstName,
          lastName:formdata.lastName,
          email:kycInfo!.email,
          gender:formdata.gender,
         
            country:kycInfo!.country==formdata.country? formdata.country:  country.getCountryData(parseInt(formdata.country)).name,
            state:kycInfo!.state==formdata.state? formdata.state: country.getStateData(parseInt(formdata.country),parseInt(formdata.state)).name,
            city:formdata!.city,
         
          phoneNumber:kycInfo!.phoneNumber,
          img:{
            imgId:'',
            imgUrl:""
          }
          
        },
      }

      
      if(formdata.img.length!=0){
      const uploadedImage= await uploadImage(formdata.img[0]);
      if(uploadedImage){
        kycdata.kycInfo.img!.imgId=uploadedImage.imgId;
        kycdata.kycInfo.img!.imgUrl=uploadedImage.imgUrl

      }
      }else{
        kycdata.kycInfo.img!.imgId=kycInfo!.img.imgId;
        kycdata.kycInfo.img!.imgUrl=kycInfo!.img.imgUrl;
      }

     

  
      console.log('kycdata',kycdata)
      const kyc=await postKyc(kycdata)
      if(!kyc){
        toast.error("Failed to Post/Update Kyc")
        confirmModal.setLoading(false)
        return confirmModal.onClose()
      }
  
      toast.success('kyc posted/Updated successfuly')
      confirmModal.setLoading(false)
      confirmModal.onClose()
      setopenKyc('close')
      return router.refresh();
      } catch (e: any) {
        confirmModal.setLoading(false)
        confirmModal.onClose()
        return toast.error(e?.message || 'Failed to submit KYC')
      }
      
    }


  // call the main confirmation trigger
    try{ 
    confirmData.onContent({
      header:'Are You Sure To Submit Kyc?',
      actionBtn:"Submit",
      onAction:submitAction
    })
    

    confirmModal.onOpen('confirm')
    }catch(e:any){
      console.log(e);
      return toast.error(e.message)
    }

   

  }

  


  return (
    <main className="w-full">
      <PageHeader title="KYC Form" description="Submit your identity verification to become a host." />

      <form>
        <Surface className="mb-4">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-semibold text-neutral-800">
                First Name
              </label>
              <Field
                type="text"
                placeholder="First Name"
                className="mt-1"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && (
                <ErrorText text="Please Enter Valid firstName" />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-800">
                Last Name
              </label>
              <Field
                type="text"
                placeholder="Last Name"
                className="mt-1"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <ErrorText text="Please Enter Valid lastName" />
              )}
            </div>


            <div>
              <label className="block text-sm font-semibold text-neutral-800">Gender</label>

              <SelectField
                className="mt-1"
                {...register('gender', { required: true })}
              >
                  <option value="" >Select Gender</option>
                {gender.map((type,index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </SelectField>

              {errors.gender && <ErrorText text="Select Property Type Pls" />}
            </div>
          </div>
        </Surface>

        <Surface className="mb-4">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <label className="block text-sm font-semibold text-neutral-800">Country </label>
                <SelectField className="mt-1" defaultValue={kycInfo!.country} {...register('country', { required: true})}>
                <option value={kycInfo!.country}>{kycInfo!.country==''?'Select a Country':kycInfo!.country}</option>
                        {
                            countries.map((country,index)=><option key={index} value={index}>{country.name}</option>)
                        }
                </SelectField>


                  {errors?.country && ( <ErrorText text='Please Select Valid Country'/>)}
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-800">State </label>
                <SelectField className="mt-1"  {...register('state', { required: true})}>
                <option value={kycInfo!.state}>{kycInfo!.state==''?'Select a State':kycInfo!.state}</option>
                        {
                            
                            country.getStates(parseInt(watch('country'))).map((state,index)=><option key={index} value={index}>{state.name}</option>)
                        }
                </SelectField>
                  {errors?.state && ( <ErrorText text='Please Select Valid State'/>)}
                </div>

                <div>
                <label className="block text-sm font-semibold text-neutral-800">City</label>
                <SelectField className="mt-1"  {...register('city', { required: true})}>
                        <option value={kycInfo!.city}>{kycInfo!.city==''?'Select a City':kycInfo!.city}</option>
                        {
                            
                            country.getCities(parseInt(watch('country')),parseInt(watch('state'))).map((city,index)=><option key={index} value={city.name}>{city.name}</option>)
                        }
                </SelectField>
                  {errors?.city && ( <ErrorText text='Please Select Valid City'/>)}
                </div>
              </div>
        </Surface>
          
        

        
        <Surface className="mb-4">
          <div className="my-2 flex w-full flex-col items-center gap-y-3">
              <div   className={
                imageUrl() == ''
                  ? 'hidden'
                  : 'relative h-[200px] w-full rounded-lg sm:h-[270px] md:h-[300px] md:w-[80%] lg:h-[350px]'
              }>

            <Image
              fill={true}
              src={imageUrl()}
              alt="ImagePreviewHere"
            
            />
            </div>
          

            <label className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 py-5 text-center transition hover:bg-neutral-100 sm:max-w-sm">
              <Camera className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-neutral-800">
                Upload KYC image
              </span>
              <span className="mt-1 text-xs text-neutral-500">
                CitizenShip / Passport / Driving License
              </span>
              <input
                type="file"
                className="sr-only"
                {...register(`img`, { required:kycInfo!.img.imgUrl==''?true:false })}
              />
            </label>
            {errors?.img && (
              <ErrorText text="Please Upload image for the Field" />
            )}
          </div>
        </Surface>

        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <Button type="button" tone="ghost" onClick={(e) => {
              e.preventDefault()
              setopenKyc('close')
            }}>
            <X className="mr-2 h-4 w-4" aria-hidden="true" />
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            <Save className="mr-2 h-4 w-4" aria-hidden="true" />
            Submit KYC
          </Button>
        </div>
      </form>
    </main>
  )
}
