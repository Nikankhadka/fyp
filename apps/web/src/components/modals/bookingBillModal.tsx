'use client'


import useBookingStore from "../../store/bookingStore"
import useModal from "../../store/useModal"
import { Star } from 'lucide-react'

import { useRouter } from "next/navigation"
import dayjs  from "dayjs"
import Modal from "./modal"
import Invoice from "../listing/invoiceUI"
import {createRef, useState} from 'react'
import { toast } from "react-hot-toast"
import SafeImage from "../common/SafeImage"
import { demoPaymentMode, paypalClientId } from "../../configs/constant"
import dynamic from "next/dynamic"
import { Button } from "../ui/primitives"

const PayPalCheckout = dynamic(() => import('./PayPalCheckout'), {
    ssr: false,
    loading: () => (
        <div className="rounded-md border border-neutral-200 bg-neutral-50 p-3 text-center text-sm text-neutral-600">
            Loading payment provider...
        </div>
    ),
})




export function BookingModal(){
    const bookingModal=useModal()
    const billref=createRef<HTMLDivElement>()
  
    const bookingStore=useBookingStore()
    const router=useRouter();
    const {images,propertyType,name,avgRating,userId,rate,_id}=bookingStore.propertyData;
    const {startDate,endDate}=bookingStore.bookingInfo

    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const totalDays = end.diff(start,'day') + 1;
    const  basePrice=totalDays*rate!
    const taxPrice=(basePrice/100)*18;
    const totalCost=basePrice+taxPrice;

    const useDemoCheckout = demoPaymentMode || !paypalClientId
   
   
 

    
 

   
     
    const handleDownloadPdf = async () => {
        const element = billref.current;
        const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
            import('html2canvas'),
            import('jspdf'),
        ]);
        const canvas = await html2canvas(element!);
        const data = canvas.toDataURL('image/png');
        console.log('data',data);
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
        
        const billpdf= pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('bill.pdf');
       
        bookingModal.onClose()
        bookingStore.setError(false)
        return router.refresh();
      };

    const handleDemoCheckout = () => {
        bookingStore.setBillData({
            payerId: 'demo-payer',
            paymentId: `demo-${Date.now()}`
        });
        toast.success("Demo payment completed successfully");
        bookingModal.onOpen('bill')
    };
    



    if(bookingModal.isOpen=='booking'){
        return(
            <>
        <Modal isOpen={bookingModal.isOpen}>
        <main className="w-full rounded-lg border border-neutral-200 bg-white shadow-lg md:w-[540px]">

           <div className="w-full p-4">
                <div className="flex flex-col items-center justify-center" >
                    <div className="relative h-40 w-[95%] rounded-lg sm:m-0 sm:h-48">
                    <SafeImage
                      fill
                      src={images?.[0]?.imgUrl}
                      alt="propertyImage"
                      fallbackText="Property image unavailable"
                    />
                    </div>
                    
                    
                    <div className="flex w-full flex-row items-center justify-around p-2" >

                    <div >
                    <p className="text-sm text-neutral-600">{propertyType!}</p>
                    <h1 className="text-md font-semibold">{name!}</h1>
                    </div>
                  
                    <div className="">
                    <p className="text-sm flex items-center gap-x-1"><Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />{avgRating}</p>
                    <p className="mt-2 text-sm font-semibold">{ typeof userId === 'string' ? userId : userId?.userName}</p>
                    </div>
                   
                    </div>
                </div>
                

                <hr className="my-3 border-neutral-200"/>

                <div>
                <h2 className="mb-3 text-lg font-semibold">Your Total</h2>
                <div className="flex items-center justify-between">
                    <p className="text-sm">{totalDays} nights</p>
                    <p className="font-semibold">${basePrice}</p>
                </div>

                <div className="my-3 flex items-center justify-between">
                <p className="text-sm">Taxes/Charge</p>
                <p className="font-semibold">${taxPrice}</p>
                </div>

                </div>

                <hr className="my-3 border-neutral-200"/>
                
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Total</p>
                    <p className="font-semibold text-lg">${totalCost}</p>
                </div>

                <div className="mt-5">
               
                {useDemoCheckout ? (
                <Button
                  type="button"
                  className="w-full"
                  onClick={handleDemoCheckout}
                >
                  Complete Demo Checkout
                </Button>
                ) : (
                <PayPalCheckout
                    clientId={paypalClientId}
                    totalCost={totalCost}
                    onSuccess={(payerId, paymentId) => {
                        bookingStore.setBillData({
                            payerId,
                            paymentId,
                        });
                        
                        toast.success("Payment Successfull");
                        
                        router.refresh();
                       return  bookingModal.onOpen('bill')
                    }}
                />
                )}

                {useDemoCheckout && (
                  <p className="mt-3 text-xs text-neutral-500">
                    Demo mode is enabled. No real payment provider is contacted.
                  </p>
                )}

      
                </div>
           </div>
           </main>
           </Modal>
           </>
        )
        
    }

    if(bookingModal.isOpen=='bill'){
        return(
            <>
            <Modal isOpen={bookingModal.isOpen}>
            <main className="w-full rounded-lg border border-neutral-200 bg-white shadow-lg md:w-[540px]">
                        <div className="w-full">
                <div ref={billref}  >
                <Invoice payerId={bookingStore.billData.payerId} paymentId={bookingStore.billData.paymentId} rate={rate!} nights={totalDays} tennantId="Random1" propertyName={name!} hostId={ typeof userId === 'string' ? userId : userId!.userName!} initialPrice={basePrice} taxAndServiceChargePrice={taxPrice} totalPrice={totalCost} />
                </div>
            
                <div className="flex w-[95%] items-center justify-between p-2 ml-2">
                <Button type="button" tone="ghost" onClick={(e)=>{
                    e.preventDefault();
                    bookingModal.onClose();
                  
                    bookingStore.setError(false)
                    return router.refresh();
                }}>
                Cancel
                </Button>
                <Button type="button" tone="secondary" onClick={handleDownloadPdf}>
                Download Bill
                </Button>
                </div>
               

                </div>
               </main>
               </Modal>
               </>
        )
       
    }

    return null;
      
            
 

            
  
  
}