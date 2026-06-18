
'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { IBooking, } from '../../interface/response'
import { Trash2 } from 'lucide-react'
import {
  CheckCircle,
} from 'lucide-react'

import { House, X } from 'lucide-react'
import Api from '../../api/client/axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import useConfirm from '../../store/useConfirm'
import useModal from '../../store/useModal'
import dayjs from '../../utils/dayjs'
import Image from 'next/image'
import { normalizeImageSrc } from '../common/normalizeImageSrc'
import { Button, StatusBadge } from '../ui/primitives'


function capitalize(str?: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}


interface Props{
 trips:boolean
 is_Admin?:boolean
 bookings:Partial<IBooking>[]
  
}

export default function TripBookingClient({trips,bookings,is_Admin}:Props) {
  const router=useRouter();
  const confirm=useConfirm();
  const modal=useModal()
  console.log(trips);


      const onCheckIn=(id:string)=>{
        //first set content for the store
        confirm.onContent({
          header:"Are you Sure You want to Check In!",
          onAction:()=>{ Api.patch(`/property/v1/booking/confirmCheckIn/${id}`,{},{withCredentials:true}).then(()=>{
            console.log("user checkedIn");
            toast.success("Checked In Successfully!");
             modal.onClose()
            return router.refresh();
          })
          .catch(()=>{
            toast.error("Check In Failed/Check In repeated!!");
            return router.refresh();
          })},
          actionBtn:"Check In"
        });

        //now open confirm modal 
        modal.onOpen("confirm");
      }



      const onCheckOut=(id:string)=>{
        confirm.onContent({
          header:"Are you Sure You want to Check Out!",
          actionBtn:"Check Out",
          onAction:()=>{ Api.patch(`/property/v1/booking/confirmCheckOut/${id}`,{},{withCredentials:true}).then(()=>{
            console.log("user checkedIn");
            toast.success("Checked Out Successfully!");
            modal.onClose()
            return router.refresh();
          })
          .catch(()=>{
            toast.error("Check In Failed!!");
            return router.refresh();
          })},
         
        });

        //now open confirm modal 
        modal.onOpen("confirm");
      }



      //booking id
      const cancelBooking=(id:string)=>{
        //set content for modal
        confirm.onContent({
          header:"Are you Sure to Cancel Booking!",
          actionBtn:"Delete",
          onAction:()=>{
            Api.patch(`property/v1/booking/cancelBooking/${id}`,{},{withCredentials:true}).then((res)=>{
               toast.success("booking cancelled Successfully");
               router.refresh();
               return modal.onClose()
            }).catch((e)=>{
              console.log(e);
              return toast.error("failed to cancel booking")
            })
          }
        })

       return  modal.onOpen('confirm');
      }
      
    

  return (
    <main>
     {!is_Admin!&&<div className="block items-center justify-between border-b border-neutral-200 bg-white p-4 sm:flex lg:mt-1.5">
        <div className="mb-1 mx-auto w-full sm:w-[98%]">
          <div className="mb-4">

            <h1 className="text-2xl font-semibold text-neutral-900 sm:text-2xl">
             {trips? "Trips !":"Reservations on Your Properties !"}
            </h1>
          </div>
         
        </div>
      </div>}
     

        {bookings!.length!>0&&<div>
          {/* only available for kyc verified user */}
          <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    Property
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                   {trips? 'Host':"Tennant"}
                  </th> 
                 {is_Admin&&<th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                   Host
                  </th>}

                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    StartDate
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    EndDate
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    Amount
                  </th>
                  
                 {!is_Admin&&<th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  >
                    Actions
                  </th>}
                </tr>
              </thead>

              <tbody className="divide-y divide-neutral-200 bg-white">
        {
          bookings.map((data,index)=>{
            console.log(data);
            const propertyImageSrc = normalizeImageSrc(data.propertyId?.images?.[0]?.imgUrl)
            return(
              <tr key={index} className="hover:bg-neutral-50">

              <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-neutral-900">
                  {index+1}.
                </td>
                
                <td className="whitespace-nowrap px-4 py-4">
                  <Link href={`/Home/rooms/${data.propertyId?._id}`} target='_blank' className="flex items-center gap-3 hover:underline">
                  {propertyImageSrc ? (
                    <Image
                      alt='propertyimage'
                      height={64}
                      width={80}
                      className="rounded-lg"
                      src={propertyImageSrc}
                    />
                  ) : (
                    <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-neutral-100 text-center text-xs text-neutral-500">
                      No image available
                    </div>
                  )}

                  <div className="text-sm font-semibold text-neutral-900">
                    {data.propertyId?.name}
                  </div>
                  </Link>
                </td>

                <td className="whitespace-nowrap px-4 py-4">
                  <StatusBadge tone={data.status === 'Booked' ? 'info' : data.status === 'Completed' ? 'success' : 'danger'}>
                    {data.status}
                  </StatusBadge>
                </td>

             
           { !trips&& <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-700">
              <Link href={`/Home/user/${data.userId?._id}`} className='text-themeColor hover:underline'>  {capitalize(data.userId?.userName)}</Link>  
               </td>}

{            is_Admin||trips&& <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-700">
              <Link href={`/Home/user/${data.hostId?._id}`} className='text-themeColor hover:underline'>  {capitalize(data.hostId?.userName)}</Link>  
               </td>}

                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-700">
                  {dayjs(data.startDate).format('DD/MM/YY')}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-700">
                {dayjs(data.endDate).format('DD/MM/YY')}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-neutral-900">
                 $ {data.paymentId?.totalAmount}
                </td>

              
             {!is_Admin&& <td>
                 {/* for owner */}
                 {(!trips&&!data.checkInStatus)&&data.status=='Booked'&&
                  <td className="whitespace-nowrap px-4 py-4">
                   <div className="flex items-center gap-2">
                   <Button
                     type="button"
                     className="min-h-8 px-2 py-1 text-xs"
                    onClick={(e)=>onCheckIn(data._id!)}>
                     <CheckCircle className="mr-2 h-4 w-4" />
                     CheckIn
                   </Button>

                   <Button
                     type="button"
                     tone="danger"
                     className="min-h-8 px-2 py-1 text-xs"
                     onClick={(e)=>cancelBooking(data._id!)} >
                     <Trash2 className="mr-2 h-4 w-4" />
                     Cancel
                   </Button>
                   </div>
                 </td>}

                 {/* for tennant */}
                 {trips&&(!data.checkInStatus)&&data.status=='Booked'&&
                 <td className="whitespace-nowrap px-4 py-4">
                    <Button
                      type="button"
                      tone="danger"
                      className="min-h-8 px-2 py-1 text-xs"
                      onClick={(e)=>cancelBooking(data._id!)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Cancel Booking
                    </Button>
                 </td>}


                 {(!trips&&!data.checkOutStatus&&data.checkInStatus)&&data.status=='Booked'&&
                 <td className="whitespace-nowrap px-4 py-4">
                    <Button
                      type="button"
                      className="min-h-8 px-2 py-1 text-xs"
                      onClick={(e)=>onCheckOut(data._id!)}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      CheckOut
                    </Button>
                 </td>}

               {/* for both client and owner */}
               {data.checkInStatus&&
               <td className="whitespace-nowrap px-4 py-4">
                 
                 <div className='flex items-center gap-x-2 text-sm font-semibold text-neutral-600'>
                 {(trips?data.checkInStatus:data.checkOutStatus)&&<House className='h-5 w-5 text-emerald-600' />}
                {data.status=='Completed'&&<p>  Booking Completed!   </p>}
                {(trips&&data.checkInStatus&&data.status!="Completed")&& <p>  Checked In!   </p>}
                 </div>
               
                 
                 </td>}

               {
                 (data.status=='tenantCancelled'||data.status=="ownerCancelled")&&
                 <td className="whitespace-nowrap px-4 py-4">
                 
                   <div className='flex items-center gap-x-2 text-sm font-semibold text-neutral-600'>
                    <X className='h-5 w-5 text-red-600' />
                   <p>Booking Cancelled!   </p>
                
                   </div>
                 
                   
                   </td>
                 }

               </td>}
                

              </tr>
            )
          })
        }
        </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
         
            
         
 
         </div>}
       

      

      
 

      {/* paginatioon footer */}
      {bookings!.length!>5&&<div className="sticky bottom-0 right-0 w-full border-t border-neutral-200 bg-white p-4 sm:flex sm:justify-between">
        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-themeColor px-3 py-2 text-center text-sm font-medium text-white hover:bg-mainColor"
          >
          <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Link>
          <Link
            href="#"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-themeColor px-3 py-2 text-center text-sm font-medium text-white hover:bg-mainColor"
          >
            
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>}

    </main>
  )
}