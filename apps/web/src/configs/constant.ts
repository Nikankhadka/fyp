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

export const cookieSecure =
  process.env.NODE_ENV === 'production'

export const cookieSameSite =
  process.env.NODE_ENV === 'production' ? 'none' : 'lax'

export const demoPaymentMode =
  process.env.NEXT_PUBLIC_DEMO_PAYMENT_MODE !== 'false'

export const paypalClientId =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''

export const cloudinaryCloudName =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''

export const googleAuthEnabled =
  process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH === 'true'

export const facebookAuthEnabled =
  process.env.NEXT_PUBLIC_ENABLE_FACEBOOK_AUTH === 'true'

const productionApiBaseUrl = 'https://fyp-yfyb.onrender.com'
const localApiBaseUrl = 'http://localhost:2900'

const isPrivateApiHost = (hostname: string) => {
  const normalizedHost = hostname.toLowerCase()

  if (
    normalizedHost === 'localhost' ||
    normalizedHost === '0.0.0.0' ||
    normalizedHost === '::1' ||
    normalizedHost === 'api' ||
    normalizedHost.endsWith('.local')
  ) {
    return true
  }

  if (/^127\./.test(normalizedHost) || /^10\./.test(normalizedHost)) {
    return true
  }

  if (/^192\.168\./.test(normalizedHost)) {
    return true
  }

  const private172Match = normalizedHost.match(/^172\.(\d{1,2})\./)
  if (private172Match) {
    const secondOctet = Number(private172Match[1])
    return secondOctet >= 16 && secondOctet <= 31
  }

  return false
}

const normalizeApiBaseUrl = (value: string | undefined, fallback: string) => {
  const trimmedValue = value?.trim()

  if (!trimmedValue) {
    return fallback
  }

  try {
    const url = new URL(trimmedValue)

    if (process.env.NODE_ENV === 'production' && isPrivateApiHost(url.hostname)) {
      return productionApiBaseUrl
    }

    return url.origin
  } catch {
    return fallback
  }
}

const defaultApiBaseUrl =
  process.env.NODE_ENV === 'production' ? productionApiBaseUrl : localApiBaseUrl

const publicApiBaseUrl = normalizeApiBaseUrl(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  defaultApiBaseUrl,
)

const serverApiBaseUrl = normalizeApiBaseUrl(
  process.env.API_BASE_URL,
  publicApiBaseUrl,
)

export const localServer =
  typeof window === 'undefined' ? serverApiBaseUrl : publicApiBaseUrl
