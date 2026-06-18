'use client'

import { SessionUser } from '../../api/server/auth'
import Card from '../../components/card/card'
import { Button, EmptyState, PageHeader, PageContainer } from '../../components/ui/primitives'
import { Property, wishlist } from '../../interface/response'

interface HomeProps {
  properties: Partial<Property>[]
  wishList?: wishlist
  userData: SessionUser
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
    <main className="w-full">
      <PageContainer className="pb-24 pt-24">
        <PageHeader
          title="Explore stays"
          description="Browse verified homes, apartments, cabins, and guest houses across the LuxeStay marketplace."
        />

        {properties.length === 0 && (
          <EmptyState
            title="No properties to display"
            description="Try changing the search filters or check back after more listings are approved."
          />
        )}

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              />
            )
          })}
        </div>

        {properties.length >= 8 && (
          <div className="mt-8 flex justify-center">
            <Button type="button">Load more</Button>
          </div>
        )}
      </PageContainer>
    </main>
  )
}
