import { Request, Response } from 'express'
import { verifyPayPalPayment, hasPayPalCredentials } from '../../services/payment/payment.service'
import { postBookingS } from '../../services/property/booking.service'
import { propertyModel } from '../../models/property'

const TAX_RATE = 0.18
const ONE_DAY = 24 * 60 * 60 * 1000

function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

export const verifyPayPalAndCreateBooking = async (req: Request, res: Response) => {
  try {
    if (!hasPayPalCredentials) {
      return res.status(503).json({
        success: false,
        error: 'PayPal verification is not configured. Use demo checkout mode.',
      })
    }

    const { orderId, startDate, endDate, guest, bill } = req.body

    if (!orderId || !startDate || !endDate || !guest || !bill) {
      return res.status(400).json({
        success: false,
        error: 'orderId, startDate, endDate, guest, and bill are required',
      })
    }

    const property = await propertyModel.findById(req.params.id).select('rate').exec()

    if (!property || typeof property.rate !== 'number') {
      return res.status(400).json({
        success: false,
        error: 'Property not found or cannot be booked',
      })
    }

    const start = new Date(startDate)
    const end = new Date(endDate)
    const stay = Math.ceil((end.getTime() - start.getTime()) / ONE_DAY) + 1

    if (!Number.isFinite(stay) || stay <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Booking dates are invalid',
      })
    }

    const initialAmount = roundMoney(stay * property.rate)
    const serviceCharge = roundMoney(initialAmount * TAX_RATE)
    const totalAmount = roundMoney(initialAmount + serviceCharge)

    const verification = await verifyPayPalPayment(orderId, totalAmount)

    if (!verification.success || !verification.verified) {
      return res.status(400).json({
        success: false,
        error: verification.message,
      })
    }

    const bookingPayload = {
      startDate,
      endDate,
      guest,
      initialAmount,
      serviceCharge,
      totalAmount,
      stay,
      bill,
      payerId: verification.payerId || 'unknown',
      paymentId: orderId,
    }

    const bookingCreated = await postBookingS(
      req.params.id,
      req.userData.docId,
      bookingPayload
    )

    if (!bookingCreated) {
      return res.status(409).json({
        success: false,
        error: 'Booking already exists for the given property and dates.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Payment verified and booking created successfully',
      data: {
        payerId: verification.payerId,
        paymentId: orderId,
        amount: verification.amount,
        totalAmount,
      },
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Payment verification and booking failed',
    })
  }
}

export const getPayPalConfig = async (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: {
      enabled: hasPayPalCredentials,
      clientId: process.env.PAYPAL_CLIENT_ID || '',
    },
  })
}
