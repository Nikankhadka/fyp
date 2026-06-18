import { Router } from 'express'
import { verifyaccessToken, verifyRole } from '../../middlewares/auth.middleware'
import { verifyPayPalAndCreateBooking, getPayPalConfig } from '../../controllers/payment/payment.controller'
import { validatePayPalBooking } from '../../middlewares/inputvalidation'

const router = Router()

// Get PayPal configuration status
router.get('/config', getPayPalConfig)

// Verify PayPal payment and create booking (authenticated users only)
router.post('/verify-paypal/:id', verifyaccessToken(true), verifyRole(false), validatePayPalBooking, verifyPayPalAndCreateBooking)

export default router
