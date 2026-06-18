//this is index router where all the routes will be registered

import express from 'express';
import authRouter from './auth/auth.routes';
import userRouter from './user/user.routes';
import propertyRouter from './property/property.routes';
import adminRouter from './admin/admin.routes';
import cloudinaryRouter from './cloudinary/cloudinary.routes';
import paymentRouter from './payment/payment.routes';
import { verifyaccessToken } from '../middlewares/auth.middleware';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API routes
router.use('/auth/v1', authRouter);
router.use('/user/v1', verifyaccessToken(false), userRouter);
router.use('/property/v1', propertyRouter);
router.use('/admin/v1', verifyaccessToken(true), adminRouter);
router.use('/cloudinary/v1', cloudinaryRouter);
router.use('/payment/v1', paymentRouter);

export default router;