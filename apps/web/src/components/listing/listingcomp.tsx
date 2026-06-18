'use client'

import { Plus, Search } from 'lucide-react'
import { Property } from '../../interface/response'
import Card from '../card/card'
import useRandom from '../../store/randomStore'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import { Button, EmptyState, Field, PageHeader, PaginationBar } from '../ui/primitives'

const PostPropertyForm = dynamic(() => import('../postproperty'), {
  ssr: false,
  loading: () => (
    <div className="mx-auto my-6 max-w-3xl rounded-md border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
      Loading listing form...
    </div>
  ),
})

interface Props {
  is_Admin: boolean
  properties: Partial<Property>[]
  kycVerified?: boolean
}

export default function ListingComp({
  is_Admin,
  properties,
  kycVerified,
}: Props) {
  const list = useRandom()

  return (
    <main>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5">
        <div className="mx-auto mb-1 w-full sm:w-[98%]">
          <PageHeader
            title={is_Admin ? 'Listing Requests' : 'Your Listings'}
            description={
              is_Admin
                ? 'Review property submissions and keep the marketplace inventory trustworthy.'
                : 'Manage the homes you host, their approval status, and listing updates.'
            }
          />
          <div className="block items-center justify-between dark:divide-gray-700 sm:flex md:divide-x md:divide-gray-100">
            {is_Admin && (
              <div className="mb-4 flex items-center sm:mb-0">
                <form className="sm:pr-3">
                  <label className="sr-only">Search</label>
                  <div className="relative mt-1 w-48 sm:w-64 xl:w-96">
                    <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                    <Field
                      type="text"
                      className="pl-10"
                      placeholder="Search for Property"
                    />
                  </div>
                </form>
              </div>
            )}

            {/* only for normal user */}
            {!is_Admin && (
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault()

                  if (!kycVerified) {
                    return toast.error('Please Verify Kyc to List Property!')
                  }

                  list.onList('list')
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                List Property
              </Button>
            )}
          </div>
        </div>
      </div>

      {properties!.length! === 0 && list.listProperty == 'close' && (
        <EmptyState
          title={is_Admin ? 'No listings to review' : 'No listings yet'}
          description={
            is_Admin
              ? 'New listing requests will appear here when hosts submit properties.'
              : 'KYC-verified hosts can add their first property from this page.'
          }
        />
      )}

      {properties!.length! > 0 && (
        <div>
          {/* only available for kyc verified user */}

          {list.listProperty == 'close' && (
            <div className="mx-auto my-2 grid w-[96%] grid-cols-1 gap-x-2 gap-y-4 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
              {properties!.map((property, index) => {
                return (
                  <Card
                    use={is_Admin ? 'adminlisting' : 'userlisting'}
                    data={property}
                    key={property._id || index}
                    index={index}
                  />
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* property lisiting form  */}
      {list.listProperty == 'list' && <PostPropertyForm isUpdate={false} />}
      {list.listProperty == 'edit' && (
        <PostPropertyForm
          isUpdate={true}
          propertyData={properties[list.propIndex]}
        />
      )}

      {/* paginatioon footer */}
      {list.listProperty == 'close' && properties?.length! > 5 && (
        <PaginationBar />
      )}
    </main>
  )
}
