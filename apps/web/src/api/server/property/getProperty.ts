import { api } from '@/api/api'
import type { SearchForm } from '../../../components/modals/searchModal'
import { Property } from '../../../interface/response'
import { getAccessToken } from '../auth'

//for admin verificationnpm
export async function getPropertyRequests(
  page: number,
  limit: number
): Promise<Partial<Property>[]> {
  try {
    const res = await fetch(
      `${api}/admin/v1/propertyRequests?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: { cookie: getAccessToken() },
        next: { revalidate: 10, tags: ['property-requests'] },
      }
    ).then((res) => res.json())

    if (!res.success) throw new Error('failed to fetch Property Requests')

    return res.propertyRequests
  } catch (e) {
    throw e
  }
}

//use this to get properties of a owner
export async function getMyProperties(
  userId: string,
  page: number,
  limit: number
): Promise<Partial<Property>[]> {
  try {
    const res = await fetch(
      `${api}/property/v1/myProperties/${userId}?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: { cookie: getAccessToken() },
        next: { revalidate: 0, tags: [`my-properties-${userId}`] },
      }
    ).then((res) => res.json())

    if (!res.success) throw new Error('failed to fetch Property Requests')

    return res.propertyData
  } catch (e) {
    throw e
  }
}

export async function getPropertyById(
  id: string
): Promise<{ property: Partial<Property>; user: string; inWishList: boolean }> {
  try {
    const res = await fetch(`${api}/property/v1/getProperty/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: { cookie: getAccessToken() },
      next: { revalidate: 60, tags: [`property-${id}`, 'properties'] },
    }).then((res) => res.json())

    if (!res.success) throw new Error('failed to fetch Property data')

    return res.propertyData
  } catch (e) {
    throw e
  }
}

//home page and search
export async function getProperties(
  page: number,
  limit: number,
  queryParams: SearchForm
): Promise<Partial<Property>[]> {
  try {
    const url = new URL(`${api}/property/v1/getProperty`)
    const params = new URLSearchParams()
    const query = { page, limit, ...queryParams }

    Object.entries(query).forEach(([key, value]) => {
      if (value == null || value === '') return

      if (Array.isArray(value)) {
        value
          .filter((item) => item != null && item !== '')
          .forEach((item) => params.append(key, String(item)))
        return
      }

      params.set(key, String(value))
    })

    url.search = params.toString()

    // Cache the unfiltered/default home view (no search filters); keep
    // filtered queries fully dynamic so search results stay fresh.
    const hasFilters = Object.entries(queryParams ?? {}).some(
      ([key, value]) =>
        key !== 'page' &&
        key !== 'limit' &&
        value != null &&
        value !== '' &&
        !(Array.isArray(value) && value.length === 0)
    )
    const cacheOpts = hasFilters
      ? { cache: 'no-store' as const }
      : ({ revalidate: 60, tags: ['properties'] } as const)

    const res = await fetch(url.toString(), {
      method: 'GET',
      credentials: 'include',
      headers: { cookie: getAccessToken() },
      ...cacheOpts,
    }).then((res) => res.json())

    if (!res.success) throw new Error('failed to fetch Property data')

    return res.propertyData
  } catch (e) {
    console.error(e)
    throw e
  }
}

///for admin exclusive to fetch all properties information shown in admin list

export async function getAllProperties(
  page: number,
  limit: number
): Promise<Partial<Property>[]> {
  try {
    const propertyData = await fetch(
      `${api}/admin/v1/allProperties/?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: { cookie: getAccessToken() },
        next: { revalidate: 10, tags: ['all-properties'] },
      }
    ).then((res) => res.json())

    if (!propertyData.success)
      throw new Error('failed to fetch property information')

    return propertyData.properties
  } catch (e) {
    throw e
  }
}
