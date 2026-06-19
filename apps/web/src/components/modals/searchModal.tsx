'use client'

import { type ReactNode } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Home, MapPin, RotateCcw, Search, SlidersHorizontal, Star } from 'lucide-react'
import useModal from '../../store/useModal'
import { ErrorText } from '../random'
import { amenities, propertyOptions } from '../../configs/constant'
import useCountry from '../../store/useCountry'
import Modal from './modal'
import {
  Button,
  Field,
  SelectField,
  StatusBadge,
} from '../ui/primitives'

export interface SearchForm {
  minRate: number
  maxRate: number
  propertyType: string
  country: string
  state: string
  city: string
  rating: number
  amenities: string[]
}

function FilterSection({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="border-b border-outline-variant px-5 py-5 last:border-b-0">
      <div className="mb-4 flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h2 className="text-base font-semibold text-onSurface">{title}</h2>
          {description && (
            <p className="mt-1 text-sm leading-5 text-onSurface-variant">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  )
}

export function SearchModal() {
  const modal = useModal()
  const countryhook = useCountry()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: {
      country: '',
      state: '',
      city: '',
      propertyType: '',
      amenities: [],
      minRate: 0,
      maxRate: 0,
      rating: 0,
    },
    mode: 'onChange',
  })

  const selectedCountryIndex = Number.parseInt(watch('country'), 10)
  const selectedStateIndex = Number.parseInt(watch('state'), 10)
  const states = countryhook.getStates(selectedCountryIndex)
  const cities = countryhook.getCities(selectedCountryIndex, selectedStateIndex)

  const onSubmit: SubmitHandler<SearchForm> = (formdata) => {
    const selectedAmenities = (formdata.amenities || []).filter(Boolean)
    const minRate = Number.isFinite(formdata.minRate) ? formdata.minRate : 0
    const maxRate = Number.isFinite(formdata.maxRate) ? formdata.maxRate : 0
    const rating = Number.isFinite(formdata.rating) ? formdata.rating : 0

    const query: Partial<SearchForm> = {
      propertyType: formdata.propertyType,
      city: formdata.city,
      amenities: selectedAmenities,
    }

    if (maxRate > 0) {
      query.minRate = Math.max(0, minRate)
      query.maxRate = maxRate
    }

    if (rating >= 1) {
      query.rating = rating
    }

    if (formdata.country !== '') {
      query.country = countryhook.getCountryData(Number.parseInt(formdata.country, 10)).name
    }

    if (formdata.country !== '' && formdata.state !== '') {
      query.state = countryhook.getStateData(
        Number.parseInt(formdata.country, 10),
        Number.parseInt(formdata.state, 10),
      ).name
    }

    const params = new URLSearchParams()

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

    const url = params.toString() ? `/Home?${params.toString()}` : '/Home'

    modal.onClose()
    return router.push(url)
  }

  const onClear = () => {
    reset()
    modal.onClose()
    router.push('/Home')
  }

  if (modal.isOpen != 'search') {
    return null
  }

  return (
    <Modal isOpen={modal.isOpen}>
      <div className="flex max-h-[86vh] w-full flex-col overflow-hidden rounded-md border border-outline-variant bg-white shadow-xl">
        <header className="sticky top-0 z-10 border-b border-outline-variant bg-white px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-primary" aria-hidden="true" />
                <h1 className="text-lg font-semibold text-onSurface">
                  Filters
                </h1>
              </div>
              <p className="mt-1 text-sm text-onSurface-variant">
                Narrow rentals by price, property type, location, rating, and amenities.
              </p>
            </div>
            <StatusBadge tone="info">Search</StatusBadge>
          </div>
        </header>

        <form className="overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <FilterSection
            icon={<Search className="h-4 w-4" aria-hidden="true" />}
            title="Price range"
            description="Set a nightly range. Leave max empty to keep all prices."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-onSurface-variant">
                Min rate / night
                <Field
                  type="number"
                  min={0}
                  placeholder="Min price"
                  className="mt-1"
                  {...register('minRate', {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: 'Please enter a non-negative price.',
                    },
                  })}
                />
                {errors.minRate && <ErrorText text="Please enter a valid price" />}
              </label>

              <label className="block text-sm font-semibold text-onSurface-variant">
                Max rate / night
                <Field
                  type="number"
                  min={0}
                  placeholder="Max price"
                  className="mt-1"
                  {...register('maxRate', {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: 'Please enter a non-negative price.',
                    },
                    validate: (value) => {
                      const min = Number(watch('minRate')) || 0
                      return !value || value >= min || 'Max must be greater than min.'
                    },
                  })}
                />
                {errors.maxRate && <ErrorText text="Please enter a valid max price" />}
              </label>
            </div>
          </FilterSection>

          <FilterSection
            icon={<Home className="h-4 w-4" aria-hidden="true" />}
            title="Property type"
          >
            <label className="block text-sm font-semibold text-onSurface-variant">
              Type
              <SelectField className="mt-1" {...register('propertyType')}>
                <option value="">Any property type</option>
                {propertyOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </SelectField>
            </label>
          </FilterSection>

          <FilterSection
            icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
            title="Location"
          >
            <div className="grid gap-3 md:grid-cols-3">
              <label className="block text-sm font-semibold text-onSurface-variant">
                Country
                <SelectField className="mt-1" {...register('country')}>
                  <option value="">Any country</option>
                  {countryhook.Countries.map((country, index) => (
                    <option key={country.isoCode} value={index}>
                      {country.name}
                    </option>
                  ))}
                </SelectField>
              </label>

              <label className="block text-sm font-semibold text-onSurface-variant">
                State
                <SelectField className="mt-1" {...register('state')}>
                  <option value="">Any state</option>
                  {states.map((state, index) => (
                    <option key={state.isoCode} value={index}>
                      {state.name}
                    </option>
                  ))}
                </SelectField>
              </label>

              <label className="block text-sm font-semibold text-onSurface-variant">
                City
                <SelectField className="mt-1" {...register('city')}>
                  <option value="">Any city</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </SelectField>
              </label>
            </div>
          </FilterSection>

          <FilterSection
            icon={<Star className="h-4 w-4" aria-hidden="true" />}
            title="Minimum rating"
          >
            <label className="block max-w-xs text-sm font-semibold text-onSurface-variant">
              Rating
              <Field
                type="number"
                min={0}
                max={5}
                placeholder="0 to 5"
                className="mt-1"
                {...register('rating', {
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: 'Please enter a valid rating.',
                  },
                  max: {
                    value: 5,
                    message: 'Please enter a valid rating.',
                  },
                })}
              />
              {errors.rating && <ErrorText text="Please enter a valid rating" />}
            </label>
          </FilterSection>

          <FilterSection
            icon={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />}
            title="Amenities"
          >
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {amenities.map((item) => {
                return (
                  <label
                    key={item}
                    className="flex min-h-10 cursor-pointer items-center gap-2 rounded-md border border-outline-variant bg-white px-3 py-2 text-sm font-medium text-onSurface-variant transition hover:bg-surface-container-low"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      {...register('amenities')}
                      className="h-4 w-4 rounded border-neutral-300 accent-primary"
                    />
                    <span>{item}</span>
                  </label>
                )
              })}
            </div>
          </FilterSection>

          <div className="sticky bottom-0 flex w-full items-center justify-between gap-3 border-t border-outline-variant bg-white px-5 py-4">
            <Button type="button" tone="ghost" onClick={onClear}>
              <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
              Clear
            </Button>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                tone="secondary"
                onClick={() => modal.onClose()}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" aria-hidden="true" />
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}
