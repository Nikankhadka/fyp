'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Building2, Home, House } from 'lucide-react'
import type { SessionUser } from '../../api/server/auth'
import Card from '../../components/card/card'
import { Button, EmptyState, PageContainer } from '../../components/ui/primitives'
import { propertyOptions } from '../../configs/constant'
import { Property, wishlist } from '../../interface/response'

interface HomeProps {
  properties: Partial<Property>[]
  wishList?: wishlist
  userData: SessionUser
}

const typeIcons: Record<string, typeof Home> = {
  House,
  'Flat/apartment': Building2,
  Condominium: Building2,
  Studio: Building2,
  'Town House': House,
  Duplex: House,
  Villa: House,
  'Guest house': House,
}

function HomeTypeFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeType = searchParams?.get('propertyType') || ''

  const onSelect = (type: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '')

    if (type) {
      params.set('propertyType', type)
    } else {
      params.delete('propertyType')
    }

    const query = params.toString()
    router.push(query ? `/Home?${query}` : '/Home')
  }

  const options = ['', ...propertyOptions]

  return (
    <section className="mb-8 border-b border-outline-variant pb-3" aria-label="Filter by home type">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {options.map((type) => {
          const label = type || 'All'
          const Icon = type ? typeIcons[type] || Home : Home
          const isActive = activeType === type

          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(type)}
              aria-pressed={isActive}
              className={`flex min-w-fit flex-col items-center gap-2 border-b-2 px-3 pb-2 text-sm font-semibold transition ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-onSurface-variant hover:border-outline-variant hover:text-onSurface'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">{label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export function HomeClient({ properties, wishList, userData }: HomeProps) {
  const hasWishlist = Boolean(wishList)
  const getUserType = (property: Partial<Property>) => {
    if (!hasWishlist) {
      return userData.is_Admin ? 'admin' : ''
    }

    if (userData.is_Admin) return 'admin'
    if (userData.docId === property.userId) return 'owner'
    if (userData.docId === '') return ''
    return 'user'
  }

  return (
    <main className="flex-grow bg-background">
      <PageContainer className="pb-14 pt-8">
        <HomeTypeFilter />

        {properties.length === 0 && (
          <EmptyState
            title="No properties to display"
            description="Try changing the search filters or check back after more listings are approved."
          />
        )}

        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property, index) => {
            const inWishList = hasWishlist
              ? wishList!.wishList.some((data) => data._id === property._id)
              : false
            return (
              <Card
                use="card"
                key={property._id || index}
                wish={inWishList}
                data={property}
                user={getUserType(property)}
                index={index}
              />
            )
          })}
        </div>

        {properties.length >= 8 && (
          <div className="mt-12 flex justify-center">
            <Button type="button" tone="secondary" disabled className="rounded-lg px-6 py-3">
              Show more (coming soon)
            </Button>
          </div>
        )}
      </PageContainer>
    </main>
  )
}
