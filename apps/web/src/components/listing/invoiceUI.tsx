'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import useBookingStore from '../../store/bookingStore'
import toast from 'react-hot-toast'
import Api from '../../api/client/axios'
import { useRouter } from 'next/navigation'
import { revalidateBookingCreated } from '../../api/server/revalidate'
import dayjs from '../../utils/dayjs'
import { Surface } from '../ui/primitives'

interface InvoiceProps {
    tennantId: string
    nights: number
    rate: number
    hostId: string
    propertyName: string
    initialPrice: number
    taxAndServiceChargePrice: number
    totalPrice: number
    paymentId: string
    payerId: string
    createBookingOnMount?: boolean
}

const Invoice = (props: InvoiceProps) => {
    const {
        tennantId,
        propertyName,
        hostId,
        initialPrice,
        taxAndServiceChargePrice,
        totalPrice,
        paymentId,
        nights,
        rate,
        payerId,
        createBookingOnMount = true
    } = props

    const bookingStore = useBookingStore()
    const billref = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useEffect(() => {
        if (!createBookingOnMount) return

        const action = async () => {
            const element = billref.current
            if (!element) return
            const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
                import('html2canvas'),
                import('jspdf'),
            ])
            const canvas = await html2canvas(element)
            const data = canvas.toDataURL('image/png')

            const pdf = new jsPDF()
            const imgProperties = pdf.getImageProperties(data)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

            const billpdf = pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
            const pdfData = billpdf.output('dataurlstring')

            const body = {
                startDate: bookingStore.bookingInfo.startDate,
                endDate: bookingStore.bookingInfo.endDate,
                guest: bookingStore.bookingInfo.guest,
                payerId,
                paymentId,
                initialAmount: initialPrice,
                serviceCharge: taxAndServiceChargePrice,
                totalAmount: totalPrice,
                stay: nights,
                bill: pdfData
            }

            try {
                const propertyId = bookingStore.propertyData._id
                const newBooking = await Api.post(`/property/v1/booking/${propertyId}`, body, { withCredentials: true })
                if (!newBooking.data.success) {
                    toast.error(newBooking.data.error)
                    return bookingStore.setError(true)
                }

                toast.success('Booking successful/bill has been sent')
                if (typeof propertyId === 'string') {
                    await revalidateBookingCreated(propertyId)
                }
                return router.refresh()
            } catch {
                toast.error('This booking conflicts with an existing booking/Error occurred.')
                router.refresh()
                return bookingStore.setError(true)
            }
        }

        action()
    }, [])

    return (
        <div ref={billref}>
            <Surface className="mx-auto w-full max-w-4xl rounded-lg bg-white">
            <div className="border-b border-gray-200 bg-gray-100 p-4">
                <div className="flex w-full items-center justify-between">
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <Image src="/airbnb.png" alt="airbnb" height={56} width={56} />
                            <div className="flex items-center gap-x-1">
                                <div className="font-semibold">Date:</div>
                                <div>{dayjs().format("MM/DD/YYYY")}</div>
                            </div>
                        </div>
                        <h6 className="mb-1 mt-2 font-semibold text-gray-600">Invoice #: {paymentId}</h6>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="w-full">
                    <div className="my-2">
                        <div className="font-semibold">Billed From:</div>
                        <div>{hostId}</div>
                    </div>

                    <div className="my-2">
                        <div className="font-semibold">Billed to:</div>
                        <div>{tennantId}</div>
                    </div>

                    <div className="my-3 flex items-center gap-x-5">
                        <div>
                            <div className="font-semibold">Start Date:</div>
                            <div>{dayjs(bookingStore.bookingInfo.startDate).format('MM/DD/YYYY')}</div>
                        </div>
                        <div>
                            <div className="font-semibold">End Date:</div>
                            <div>{dayjs(bookingStore.bookingInfo.endDate).format('MM/DD/YYYY')}</div>
                        </div>
                    </div>
                </div>

                <table className="mt-8 w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="p-2 text-left">Nights</th>
                            <th className="p-2 text-left">Property Id</th>
                            <th className="p-2 text-left">Rate</th>
                            <th className="p-2 text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 text-center">{nights}</td>
                            <td className="p-2">{propertyName}</td>
                            <td className="p-2">${rate}/Night</td>
                            <td className="p-2">${initialPrice}</td>
                        </tr>
                    </tbody>
                </table>

                <hr className="my-5 border border-gray-200" />

                <div className="my-4 w-full">
                    <div className="my-2 flex items-center gap-x-3">
                        <h2 className="text-md font-bold">SubTotal:</h2>
                        <p>${initialPrice}</p>
                    </div>

                    <div className="my-2 flex items-center gap-x-3">
                        <h2 className="text-md font-semibold">Tax/Service Charge:</h2>
                        <p>${taxAndServiceChargePrice}</p>
                    </div>

                    <div className="my-2 flex items-center gap-x-3">
                        <h2 className="text-md font-semibold">Total Amount:</h2>
                        <p>${totalPrice}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="font-semibold">Success! Amount Paid</span>
                </div>
                </div>
            </Surface>
        </div>
    )
}

export default Invoice
