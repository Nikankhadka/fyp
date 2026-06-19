'use client'

import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal } from 'lucide-react'
import useModal from '../../store/useModal'

const SearchButton = () => {
  const params = useSearchParams()
  const modal = useModal()

  const location =
    params?.get('city') || params?.get('state') || params?.get('country') || 'Anywhere'
  const propertyType = params?.get('propertyType') || 'Any stay'
  const rating = params?.get('rating')
  const detail = rating && Number(rating) > 0 ? `${rating}+ stars` : 'Any rating'

  return (
    <button
      type="button"
      onClick={() => modal.onOpen('search')}
      className="w-full overflow-hidden rounded-full border border-outline-variant bg-surface-container-lowest py-1 shadow-sm transition hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
      aria-label="Open rental filters"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-[120px] truncate px-3 text-sm font-semibold text-onSurface">
          {location}
        </div>
        <div className="hidden max-w-[130px] flex-1 truncate border-x border-outline-variant px-3 text-center text-sm font-semibold text-onSurface sm:block">
          {propertyType}
        </div>
        <div className="flex flex-row items-center gap-2 pl-3 pr-1 text-sm text-onSurface-variant">
          <div className="hidden max-w-[90px] truncate sm:block">{detail}</div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-on">
            {params?.toString() ? (
              <SlidersHorizontal className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </button>
  )
}

export default SearchButton
