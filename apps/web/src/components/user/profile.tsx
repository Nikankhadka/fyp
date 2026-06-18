'use client'

import { FiUserCheck, FiUserMinus } from 'react-icons/fi'
import { HiStar, HiMinus } from 'react-icons/hi'

import { HiCheck } from 'react-icons/hi'

import Card from '../card/card'
import { FetchedMe, Property } from '../../interface/response'
import { bg } from '../../styles/variants'
import useAccount from '../../store/AccountState'
import Image from 'next/image'
import { normalizeImageSrc } from '../common/normalizeImageSrc'
import dynamic from 'next/dynamic'
import { EmptyState, PageHeader, StatusBadge } from '../ui/primitives'

const EditBasic = dynamic(() => import('./editProfile').then((mod) => mod.EditBasic), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading profile editor...</div>,
})
const AccountComponent = dynamic(() => import('./account'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading account settings...</div>,
})
const Password = dynamic(() => import('./pasword'), {
  ssr: false,
  loading: () => <div className="p-4 text-sm text-neutral-600">Loading password editor...</div>,
})
interface ProfileProps {
  userId: string
  profileData: Partial<FetchedMe>,
  listings?:Partial<Property>[],
  is_Admin:boolean
}

export default function Profile({ userId, profileData,listings,is_Admin}: ProfileProps) {
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
    password
  } = profileData
  const profileImageSrc = normalizeImageSrc(profileImg?.imgUrl)

    const account=useAccount();

  return (
    <main className='my-5'>
      <div className={`${bg} rounded-lg`}>
        <PageHeader
          title={`Hi, I am ${userName}`}
          description={`Joined in ${new Date(createdAt!).getFullYear()}`}
        />
        
        <div className="flex flex-wrap-reverse items-center justify-between">
          <div />
          {profileImageSrc ? (
            <Image
              height={150}
              width={150}
              src={profileImageSrc}
              alt="user"
              className="my-2 h-[100px] w-[100px] rounded-full border-2 border-gray-300 p-1 shadow-lg md:h-[150px] md:w-[150px]"
            />
          ) : (
            <div className="my-2 flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 p-1 text-center text-xs text-gray-500 shadow-lg md:h-[150px] md:w-[150px]">
              No image available
            </div>
          )}
        </div>

        <div className="my-3 flex flex-col gap-2">
         

          <div className="my-2 flex items-center gap-x-2">
            {kyc!.isVerified ? (
              <FiUserCheck className="h-6 w-6 stroke-sky-700  " />
            ) : (
              <FiUserMinus className="h-6 w-6 stroke-sky-700  " />
            )}
            <StatusBadge tone={kyc!.isVerified ? 'success' : 'warning'}>
              {kyc!.isVerified ? 'Identity verified' : 'Identity not verified'}
            </StatusBadge>
          </div>

          <div className="flex items-center gap-x-2 ">
            <HiStar className="h-6 w-6 fill-themeColor" />
            <span>{recievedReviewcount} Reviews</span>
            {/* {recievedReviewcount! > 0 && (
              <Link href="#" className="text-sm font-semibold underline">
                {' '}
                Show all reviews
              </Link>
            )} */}
          </div>

          <div className="flex items-center gap-x-2 ">
            <HiStar className="h-6 w-6 fill-themeColor" />
            <span>{avgRating} Average Rating</span>
          </div>
        </div>
        <hr className="my-5 border-gray-400" />

        <div className=" my-5  flex  items-center justify-around ">
          <div className="flex items-center gap-x-2 ">
            {kyc!.isVerified ? (
              <HiCheck className="h-6 w-6 fill-themeColor" />
            ) : (
              <HiMinus className="h-6 w-6 fill-themeColor" />
            )}
            <span>Identity</span>
          </div>

          <div className="flex items-center gap-x-2 ">
            {email!.isVerified ? (
              <HiCheck className="h-6 w-6 fill-themeColor" />
            ) : (
              <HiMinus className="h-6 w-6 fill-themeColor" />
            )}
            <span>Email</span>
          </div>

          <div className="flex items-center gap-x-2 ">
            {kycInfo!.phoneNumber ? (
              <HiCheck className="h-6 w-6 fill-themeColor" />
            ) : (
              <HiMinus className="h-6 w-6 fill-themeColor" />
            )}
            <span>Phone Number</span>
          </div>
        </div>

        <hr className="my-5 border-gray-400" />

        {userId==profileData._id!&& <div className='w-full  flex gap-x-1 sm:gap-x-3 '>
            
              <button
                onClick={(e) => {
                  e.preventDefault()
                  account.onOpen('profile')
                }}
                className={`mb-2 p-2 block text-left text-sm text-gray-600 font-semibold ${account.openComponent=='profile'?'border-b-2 border-themeColor text-black':'border-b-2 border-white transition-all hover:border-themeColor hover:text-black '}`}
              >
                Edit Profile
              </button>
           
            
              <button
              onClick={(e) => {
                e.preventDefault()
                account.onOpen('account')
              }}
                className={`mb-2 p-2 block text-left text-sm text-gray-600 font-semibold ${account.openComponent=='account'?'border-b-2 border-themeColor text-black':'border-b-2 border-white transition-all hover:border-themeColor hover:text-black '}`}
              >
                Account-Settings
              </button>
            

          {password&&(
                        <button
                        onClick={(e) => {
                          e.preventDefault()
                          account.onOpen('password')
                        }}
                          className={`mb-2 p-2 block text-left text-sm text-gray-600 font-semibold ${account.openComponent=='password'?'border-b-2 border-themeColor text-black':'border-b-2 border-white transition-all hover:border-themeColor hover:text-black '}`}
                      >
                          Password
                        </button>
            )}


          </div>}

         {/* this all will not be rendered on  */}
         {account.openComponent=='close'&& (
          <div className="my-2 w-[95%] p-2 md:w-[80%]">
            <h2 className="my-2 text-lg font-semibold">About</h2>
            <p className="text-md rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-lg">
              {about ? about : '..................'}
            </p>
          </div>
        )}

        
        <hr className='text-gray-300 mt-5 mb-3' />

     {account.openComponent=='close'&& listings!.length===0&& (
      <EmptyState
        title="No public listings yet"
        description="Listings from this host will appear here after they are approved."
      />
     )}

     {account.openComponent=='close'&& listings!.length>0&& <div className='p-2'>
          <h1 className='text-lg ms:text-xl my-2 mb-6 font-semibold '>{profileData.userName}s Listings</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {
              listings!.map((data,index)=>{
                return(
                 <Card data={data} key={index}/>
                )
              })
            }
          </div>
      </div>}
       
      </div>

      {account.openComponent=='profile'&&<div className={`${bg} my-2 rounded-lg`}>
        
        
          <EditBasic
            img={profileImg!.imgUrl}
            userName={userName!}
            about={about!}
          />
        
      </div>}


      {/* this is for admin exclusive */}
      {
        is_Admin&&userId!==profileData._id&&account.openComponent=='close'&&<div className='my-3'>
        <AccountComponent  userData={profileData} is_Admin={true} userId={userId}/>
        </div>
      }

     {account.openComponent=='account'&&<div className='my-3'>
      <AccountComponent  userData={profileData} is_Admin={is_Admin} userId={userId}/>
      </div>}

      {account.openComponent=='password'&&<div className='my-3'>
        <Password />
      </div>}


   


    </main>
  )
}
