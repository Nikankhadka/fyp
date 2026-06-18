import crypto from 'crypto'

const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME || ''
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY || ''
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET || ''

const hasCloudinaryCredentials = Boolean(
  cloudinaryCloudName &&
  cloudinaryApiKey &&
  cloudinaryApiSecret &&
  cloudinaryCloudName !== 'replace-me' &&
  cloudinaryApiKey !== 'replace-me' &&
  cloudinaryApiSecret !== 'replace-me'
)

export function generateUploadSignature(
  folder: string = 'meroghar',
  resourceType: string = 'image'
): { signature: string; timestamp: number; apiKey: string; cloudName: string; folder: string } | null {
  if (!hasCloudinaryCredentials) {
    return null
  }

  const timestamp = Math.round(new Date().getTime() / 1000)
  const paramsToSign = `folder=${folder}&timestamp=${timestamp}`
  const signature = crypto
    .createHash('sha1')
    .update(paramsToSign + cloudinaryApiSecret, 'utf-8')
    .digest('hex')

  return {
    signature,
    timestamp,
    apiKey: cloudinaryApiKey,
    cloudName: cloudinaryCloudName,
    folder,
  }
}

export async function destroyImage(publicId: string): Promise<{ success: boolean; message: string }> {
  if (!hasCloudinaryCredentials) {
    return { success: false, message: 'Cloudinary credentials not configured' }
  }

  const timestamp = Math.round(new Date().getTime() / 1000)
  const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`
  const signature = crypto
    .createHash('sha1')
    .update(paramsToSign + cloudinaryApiSecret, 'utf-8')
    .digest('hex')

  const url = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/destroy`
  const formData = new URLSearchParams()
  formData.append('public_id', publicId)
  formData.append('timestamp', timestamp.toString())
  formData.append('api_key', cloudinaryApiKey)
  formData.append('signature', signature)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })

    const result = await response.json()

    if (result.result === 'ok') {
      return { success: true, message: 'Image deleted successfully' }
    }

    return { success: false, message: result.error?.message || 'Failed to delete image' }
  } catch (error: any) {
    return { success: false, message: error.message || 'Delete request failed' }
  }
}

export { hasCloudinaryCredentials }
