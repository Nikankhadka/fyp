import { Request, Response } from 'express'
import { generateUploadSignature, destroyImage, hasCloudinaryCredentials } from '../../services/cloudinary/cloudinary.service'

export const getUploadSignature = async (req: Request, res: Response) => {
  try {
    if (!hasCloudinaryCredentials) {
      return res.status(503).json({
        success: false,
        error: 'Cloudinary signed uploads are not configured. Contact administrator.',
      })
    }

    const folder = (req.body.folder as string) || 'meroghar'
    const signature = generateUploadSignature(folder)

    if (!signature) {
      return res.status(500).json({
        success: false,
        error: 'Failed to generate upload signature',
      })
    }

    return res.status(200).json({
      success: true,
      data: signature,
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate signature',
    })
  }
}

export const destroyCloudinaryImage = async (req: Request, res: Response) => {
  try {
    const publicId = (req.body.publicId || req.query.publicId || req.params.publicId) as string | undefined

    if (!publicId) {
      return res.status(400).json({
        success: false,
        error: 'Public ID is required',
      })
    }

    const result = await destroyImage(publicId)

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: result.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: result.message,
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to delete image',
    })
  }
}
