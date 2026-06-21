import type { SearchForm } from '../../components/modals/searchModal'
import { checkSession } from '../../api/server/auth'
import { getProperties } from '../../api/server/property/getProperty'
import { getFavourites } from '../../api/server/property/getwishlist'
import { HomeClient } from './HomeClient'

interface HomeProps {
  searchParams: SearchForm
}

export default async function Home({ searchParams }: HomeProps) {
  const [properties, { session, userData }] = await Promise.all([
    getProperties(1, 8, searchParams),
    checkSession(),
  ])

  if (!session || userData.is_Admin) {
    return <HomeClient properties={properties} userData={userData} />
  }

  const wishList = await getFavourites(1, 20)

  return (
    <HomeClient properties={properties} wishList={wishList} userData={userData} />
  )
}
