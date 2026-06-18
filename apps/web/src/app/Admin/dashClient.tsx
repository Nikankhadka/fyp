'use client'

import Link from 'next/link'
import { Users, Building2, CalendarCheck } from 'lucide-react'
import { dashData } from '../../api/server/property/getdashboard'
import SafeImage from '../../components/common/SafeImage'
import { Surface, StatusBadge } from '../../components/ui/primitives'

export default function DashClient({
  totalBookings,
  totalProperties,
  totalUsers,
  activeBookings,
  activeProperties,
  activeUsers,
  properties,
}: dashData) {
  return (
    <main className="w-full">
      <h1 className="mb-6 text-2xl font-bold text-neutral-950">
        Data Overview
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Surface>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
              <Users className="h-7 w-7 text-themeColor" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Total Users</span>
                <span className="text-lg font-bold text-neutral-950">{totalUsers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Active Users</span>
                <StatusBadge tone="success">{activeUsers}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>

        <Surface>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
              <Building2 className="h-7 w-7 text-themeColor" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Total Properties</span>
                <span className="text-lg font-bold text-neutral-950">{totalProperties}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Active Properties</span>
                <StatusBadge tone="success">{activeProperties}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>

        <Surface>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
              <CalendarCheck className="h-7 w-7 text-themeColor" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Total Bookings</span>
                <span className="text-lg font-bold text-neutral-950">{totalBookings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Active Bookings</span>
                <StatusBadge tone="info">{activeBookings}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-bold text-neutral-950">
        Most Popular Properties
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                S.No
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Host
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Reviews
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Rate/Night
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {properties!.map((data, index) => {
              const hostId = typeof data.userId == 'object' ? data!.userId._id! : data._id
              const hostName = typeof data.userId == 'object' ? data!.userId.userName! : 'Host'

              return (
                <tr key={index} className="hover:bg-neutral-50">
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-neutral-900">
                    {index + 1}.
                  </td>

                  <td className="whitespace-nowrap px-4 py-4">
                    <Link
                      href={`/Home/rooms/${data._id}`}
                      target="_blank"
                      className="flex items-center gap-3 hover:underline"
                    >
                      <SafeImage
                        className="h-12 w-16 rounded-lg object-cover"
                        src={data.images?.[0]?.imgUrl}
                        alt="Property"
                        height={48}
                        width={64}
                        fallbackText="No image"
                      />
                      <span className="text-sm font-semibold text-neutral-900">
                        {data.name}
                      </span>
                    </Link>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-700">
                    <Link
                      target="_blank"
                      href={`/Home/user/${hostId}`}
                      className="text-themeColor hover:underline"
                    >
                      {hostName}
                    </Link>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-neutral-900">
                    {data.ratingCount}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-neutral-900">
                    ${data.rate}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}