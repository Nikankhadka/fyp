export const amenities = [
  'Wifi',
  'Air conditioning',
  'Washing machine',
  'Indoor fireplace',
  'Kitchen',
  'Free parking on premises',
  'Gym',
  'Pool',
  'BBQ grill',
  'Patio or balcony',
  'Garden or backyard',
  'Beachfront',
  'Lake access',
  'Ski-in/Ski-out',
  'Waterfront',
  'Mini fridge',
  'Basic Toiletries/Utility Items',
]

export const propertyOptions = [
  'House',
  'Flat/apartment',
  'Cabin',
  'Castle',
  'Guest house',
  'Houseboat',
  'Shepherd’s hut',
  'Tiny home',
  'Windmill',
  'Condominium',
  'Town House',
  'Duplex',
  'Villa',
  'Studio',
  'Beach Resort',
]

export const httpOnlyCookie = true

export const demoPaymentMode =
  process.env.NEXT_PUBLIC_DEMO_PAYMENT_MODE !== 'false'

export const paypalClientId =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''

export const cloudinaryCloudName =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''

export const cloudinaryUploadPreset =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ''

const publicApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:2900'

const serverApiBaseUrl = process.env.API_BASE_URL || publicApiBaseUrl

export const localServer =
  typeof window === 'undefined' ? serverApiBaseUrl : publicApiBaseUrl
