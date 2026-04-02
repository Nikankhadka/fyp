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

export const httpOnlyCookie = false

const publicApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:2900'

const serverApiBaseUrl = process.env.API_BASE_URL || publicApiBaseUrl

export const localServer =
  typeof window === 'undefined' ? serverApiBaseUrl : publicApiBaseUrl
