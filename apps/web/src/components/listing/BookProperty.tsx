'use client'

import { useState } from 'react'
import { ErrorText } from '../random'

import moment from 'moment'
import useModal from '../../store/useModal'
import { Property } from '../../interface/response'
import useBookingStore from '../../store/bookingStore'
import { AiFillStar } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

interface Booking{
  reservations:{
    startDate:Date,
    endDate:Date
  }[]
  ,
  user:string,
  propertyData:Partial<Property>,
  is_Admin:boolean
}

export function BookProperty({reservations,user,propertyData}:Booking) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [date, setdate] = useState({
      startDate: moment(tomorrow).format('YYYY-MM-DD'),
      endDate: moment(tomorrow).format('YYYY-MM-DD')
    });
 
        console.log(reservations)

  const[guest,setguest]=useState(0)

     
  const modal=useModal()
  const bookingStore=useBookingStore()

const currentDate = new Date();
console.log(date.startDate,currentDate);
const maxDate = new Date();
maxDate.setFullYear(currentDate.getFullYear() + 1); // set the year to be one year after the current date
maxDate.setMonth(currentDate.getMonth()); // set the month to be the same as the current date
maxDate.setDate(currentDate.getDate()); // set the day to be the same as the current date

  const minDate = moment(tomorrow).format('YYYY-MM-DD');
  const maxDateValue = moment(maxDate).format('YYYY-MM-DD');


  const onReserve=async(e:any)=>{
    const startDate = date.startDate ? new Date(`${date.startDate}T12:00:00`) : null;
    const endDate = date.endDate ? new Date(`${date.endDate}T12:00:00`) : null;
    const momentStartDate=moment(startDate);
    const momentEndDate=moment(endDate);

    e.preventDefault();

    if(user==''){
      return modal.onOpen('login');
    }

    if(user=='owner'){
      return toast.error("Owner cant book Owned Property")
    }
  


    //date setup is checked on client side
    if(startDate==null||endDate==null||guest<=0||momentEndDate.isBefore(momentStartDate,'day')){
      return bookingStore.setError(true);
    }

    if(moment(startDate).isSame(moment(),'day')){
      console.log('same date')
      return bookingStore.setError(true);
    }

     //now check for bookingg date to not overlap or something 
   const checkOverLap= reservations.some(({startDate,endDate})=>{
      const startDateI = moment(startDate);
      const endDateI = moment(endDate);

      return (
        (startDateI.isSameOrBefore(momentEndDate) && endDateI.isSameOrAfter(momentEndDate)) ||
        (startDateI.isSameOrBefore(momentStartDate) && endDateI.isSameOrAfter(momentStartDate)) ||
        (startDateI.isSameOrAfter(momentStartDate) && endDateI.isSameOrBefore(momentEndDate))
      );
    })

    if(checkOverLap) return bookingStore.setError(true);
  

    //set eroro false 
    bookingStore.setError(false);

    bookingStore.setPropertyData(propertyData);
    bookingStore.setbookingInfo({
      guest:guest,
      startDate,
      endDate
    })
    modal.onOpen("booking")

    // // send post request 
    
  }


  return (
    <main className="w-[95%] bg-white border-2 shadow-none my-4  rounded-xl md:w-[35%] md:shadow-lg  md:border-gray-200 ">
    
    <div className='flex justify-around items-center my-5'>
        <p className='text-lg font-semibold'>${propertyData.rate}<span className=' text-sm font-semibold'>/Night</span></p>
        <div className='flex  gap-x-[2px] '>
            <AiFillStar className='h-5 w-5' />
            <span className=''>{propertyData.avgRating}</span>
          
        </div>
    </div>
    
    <div className='w-[90%] mx-auto my-2 rounded-lg '>
    <div className='border-2 border-gray-300 rounded-lg my-2'>
      <div className='grid gap-2 p-3 sm:grid-cols-2'>
        <label className='text-sm font-semibold text-gray-700'>
          Check in
          <input
            type="date"
            min={minDate}
            max={maxDateValue}
            value={date.startDate}
            onChange={(e) =>
              setdate((prev) => ({
                ...prev,
                startDate: e.target.value,
                endDate: prev.endDate < e.target.value ? e.target.value : prev.endDate
              }))
            }
            className="mt-1 block h-11 w-full rounded-md border-2 border-gray-300 p-2 text-sm text-gray-700 hover:bg-hoverColor"
          />
        </label>

        <label className='text-sm font-semibold text-gray-700'>
          Check out
          <input
            type="date"
            min={date.startDate || minDate}
            max={maxDateValue}
            value={date.endDate}
            onChange={(e) =>
              setdate((prev) => ({
                ...prev,
                endDate: e.target.value
              }))
            }
            className="mt-1 block h-11 w-full rounded-md border-2 border-gray-300 p-2 text-sm text-gray-700 hover:bg-hoverColor"
          />
        </label>
      </div>
    </div>
   
    

    <form>
    <input type="number" className="w-full h-11 border-2 border-gray-300  my-1 rounded-md text-sm text-gray-700 text-md p-2 hover:bg-hoverColor" placeholder='No of Guest' value={guest}  onChange={(e)=>{
      console.log(guest)
      setguest(parseInt(e.target.value))}}/>
    
{   bookingStore.error&&<div className='my-2 '>
    <ErrorText text='Please Enter Valid Date/guest for Booking' />
    </div>}
   
    <hr className=' border-gray-300 my-2'/>
    {/* pass form value from rouet then use catch all routes to access query values */}
    <button type='submit'  className='block w-full my-4 font-semibold text-sm text-center p-3 px-3 rounded-lg bg-themeColor text-white hover:bg-mainColor' onClick={onReserve} >reserve</button>

    {/* <Link href="#" className='w-full block my-3 text-center  text-sm underline'>Contact Host</Link> */}

   

      
    </form>

   
    </div>

    {/* Review Section */}
    </main>
  )
}
