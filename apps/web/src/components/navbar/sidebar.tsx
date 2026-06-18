'use client'

import Link from 'next/link'

import { User, Home, Settings, Lock, Shield, HousePlus, UserCheck, LogOut, LayoutDashboard } from 'lucide-react'
import { forwardRef } from 'react'
import Api from '../../api/client/axios'
import toast from 'react-hot-toast'
import {useRouter } from 'next/navigation'
interface props{
    is_Admin:boolean
    menu:boolean
}

type Ref = HTMLDivElement;

import {useState} from 'react'
import Image from 'next/image'

// takes in role and renders some element while others dont 
const  SideBar=forwardRef<Ref,props>((props,ref):JSX.Element=>{

    const trans='-translate-x-full '
   
    const router=useRouter()

  return (
      <div className={`fixed top-[80px] w-[100%] bg-slate-500 bg-opacity-50 left-0 z-20 h-screen sm:w-64  border-r-2 border-gray-200 shadow-lg transition-transform ${props.menu?'':trans} md:translate-x-0 md:top-0 md:w-[220px] lg:w-64 sm:bg-white sm:opacity-100`}
      
      >
        
        {/* content div */}
        <div className="h-full z-40 w-64 overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-slate-700  sm:w-full" ref={ref}>

        <div >
            {/* content */}

   {  !props.menu&&<div >

        <Link
          href="/"
          className="my-2 flex items-center gap-2  "
        >
          <Image width={40} height={40} src="/airbnb.png" alt="logo" className="block h-10 w-10" />
          <span className="block font-semibold text-mainColor drop-shadow-xl dark:text-themeColor md:text-lg"> MeroGhar</span>
        </Link>

        <hr className=" block mt-6 border-gray-400" />
      </div>
}
     

            <Link
              href="/Admin"
              className=" my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <LayoutDashboard
                className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Dashboard
              </span>
            </Link>

            <Link
              href="/Admin/users"
              className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <User className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Users
              </span>
            </Link>

 

            {props.is_Admin&&<Link
              href="/Admin/kycRequest"
              className=" my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <UserCheck className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Kyc Requests
              </span>
            </Link>}

           

            <Link
              href={'Admin/listing'}
              className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <Home className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Listings
              </span>
            </Link>


            <Link
              href={'/Admin/listingRequest'}
              className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <HousePlus className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Listing Requests
              </span>
            </Link>




            {/* <Link
              href="/Account/reviews"
              className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <MdOutlineReviews className="h-6 w-6 fill-gray-500 transition duration-75 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Reviews
              </span>
            </Link> */}


           {/* {
            !props.is_Admin&&<Link
            href="#"
            className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
          >
            <BsFillChatLeftFill className="h-5 w-5 fill-gray-500 transition duration-75 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white" />
            <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
              Message
            </span>
          </Link>
           } */}


            

           <div className='rounded-lg'>

           {/* <button
               className="w-full group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
              onClick={(e)=>{
                e.preventDefault();
                setaccount(!account)
              }}
            >
              <AiFillSetting className="h-6 w-6 fill-gray-500 transition duration-75 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Settings
              </span>
            </button> */}

           <div className='w-[full] mx-auto '>
            <Link
              href="/Admin/account"
              className=" group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <Settings className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Account
              </span>
            </Link>

            {/* <Link
              href="/Account/password"
              className="my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <RiLockPasswordFill className="h-6 w-6 fill-gray-500 transition duration-75 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Change Password
              </span>
            </Link> */}

            </div>
           </div>
            


           

           {/* { props.is_Admin&&<Link
              href="#"
              className=" my-2 group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <RiAdminFill className="h-6 w-6 fill-gray-500 transition duration-75 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Add Admin
              </span>
            </Link>} */}

            <hr className=" my-5 border-gray-400" />
            
            <div className=''>
            
            <button
              onClick={(e)=>{
                e.preventDefault();
                const res= Api.delete('/auth/v1/logout',{withCredentials:true}).then((res)=>{
                    toast.success("User logged Out");
                    return router.push('/Home')
                }).catch((e)=>{
                  toast.success("User logged Out");
                  return router.push('/Home')
                
            })}}
              className="w-full group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-hoverColor dark:text-white dark:hover:bg-slate-500"
            >
              <LogOut className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="ml-3 dark:text-gray-300 dark:group-hover:text-white">
                Log out
              </span>
            </button>
            </div>
            




          </div>
        </div>
      </div>
    
  )
})


SideBar.displayName = 'SideBar';

export default SideBar;