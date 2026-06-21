import { cloudinaryCloudName } from '../../configs/constant'

interface UploadSignature {
  signature: string
  timestamp: number
  apiKey: string
  cloudName: string
  folder: string
}

interface ImageUpload {
  imgId: string
  imgUrl: string
}

async function getUploadSignature(folder = 'meroghar'): Promise<UploadSignature> {
  try {
    const response = await fetch('/backend/cloudinary/v1/signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ folder }),
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.error || 'Failed to get signed upload parameters')
    }

    return result.data
  } catch (error) {
    console.error('Failed to request upload signature:', error)
    throw error
  }
}

export async function uploadImage(image: File): Promise<ImageUpload> {
  try {
    if (!cloudinaryCloudName) {
      throw new Error('Cloudinary is not configured')
    }

    const signature = await getUploadSignature()

    const imageData = new FormData()
    imageData.append('file', image)
    imageData.append('api_key', signature.apiKey)
    imageData.append('timestamp', signature.timestamp.toString())
    imageData.append('signature', signature.signature)
    imageData.append('folder', signature.folder)

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`,
      {
        method: 'POST',
        body: imageData,
      }
    )

    const response = await res.json()

    if (response.error) {
      throw new Error(response.error.message || 'Upload failed')
    }

    return {
      imgId: response.public_id,
      imgUrl: response.secure_url ?? response.url,
    }
  } catch (error) {
    console.error('Image upload failed:', error)
    throw error
  }
}

export async function deleteImage(imgId: string): Promise<boolean> {
  try {
    const response = await fetch('/backend/cloudinary/v1/destroy', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ publicId: imgId }),
    })

    const result = await response.json()
    return result.success === true
  } catch (error) {
    console.error('Image deletion failed:', error)
    return false
  }
}
