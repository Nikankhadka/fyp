import { Router } from 'express'
import { verifyaccessToken } from '../../middlewares/auth.middleware'
import { getUploadSignature, destroyCloudinaryImage } from '../../controllers/cloudinary/cloudinary.controller'

const router = Router()

// Generate signed upload parameters (authenticated users only)
router.post('/signature', verifyaccessToken(true), getUploadSignature)

// Delete image from Cloudinary (authenticated users only)
router.delete('/destroy', verifyaccessToken(true), destroyCloudinaryImage)
router.delete('/destroy/:publicId', verifyaccessToken(true), destroyCloudinaryImage)

export default router
