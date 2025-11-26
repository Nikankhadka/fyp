import { getFavourites } from '../../../../api/server/property/getwishlist'
import Link from 'next/link'
import Card from '../../../../components/card/card'
import ClientComp from '../../../../components/clientComp'

export default async function Favourites() {
  const wishList = await getFavourites(1, 10)

  return (
    <main>
      <h1 className="my-3 text-lg font-semibold sm:text-2xl">
        Your Favourites/HighLights Here ....!
      </h1>
      {wishList.wishList.length <= 0 && (
        <div>
          <p className="text-md mt-3 mb-8 font-semibold text-gray-600">
            {' '}
            No Properties Added to Favourites!!!
          </p>
          <Link
            href={'/Home'}
            className=" rounded-lg border-2 border-gray-900 p-3  px-5 font-semibold text-black transition-all hover:bg-gray-100"
          >
            Start Searching
          </Link>
        </div>
      )}

      {wishList.wishList.length >= 1 && (
        <div className="my-4 grid grid-cols-1 gap-2 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ClientComp>
            {wishList.wishList.map((data, index) => {
              return <Card data={data} key={index} use="card" wish={true} />
            })}
          </ClientComp>
        </div>
      )}
    </main>
  )
}
