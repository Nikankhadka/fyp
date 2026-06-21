'use server'

import { revalidateTag } from 'next/cache'

// Centralized Next.js data-cache invalidation. Client-side mutations hit the
// backend API directly via axios; after a successful response they call one of
// these actions to purge the matching ISR cache entries so subsequent server
// component renders see fresh data without waiting for the revalidate window.

export async function revalidateTags(tags: string[]): Promise<void> {
  for (const tag of tags) {
    revalidateTag(tag)
  }
}

// KYC submitted by a user.
export async function revalidateKyc() {
  await revalidateTags(['me', 'kyc-requests'])
}

// KYC verified/rejected by an admin.
export async function revalidateKycAdmin(userId: string) {
  await revalidateTags(['kyc-requests', `user-${userId}`, 'all-users', 'me'])
}

// Property created.
export async function revalidatePropertyCreated() {
  await revalidateTags([
    'properties',
    'all-properties',
    'property-requests',
    'dashboard',
  ])
}

// Property updated.
export async function revalidatePropertyUpdated(id: string) {
  await revalidateTags(['properties', 'all-properties', `property-${id}`])
}

// Property verified/rejected by an admin.
export async function revalidatePropertyVerified(id: string) {
  await revalidateTags([
    'property-requests',
    `property-${id}`,
    'properties',
    'all-properties',
    'dashboard',
  ])
}

// Booking created (guest books a stay).
export async function revalidateBookingCreated(propertyId: string) {
  await revalidateTags([
    `property-${propertyId}`,
    `bookings-${propertyId}`,
    'my-bookings',
    'all-bookings',
  ])
}

// Booking status changed (check-in / check-out / cancel).
export async function revalidateBookingUpdated() {
  await revalidateTags(['my-bookings', 'on-bookings', 'all-bookings'])
}

// Wishlist toggled (add/remove favourite).
export async function revalidateWishlist(propertyId: string) {
  await revalidateTags(['wishlist', `property-${propertyId}`])
}
