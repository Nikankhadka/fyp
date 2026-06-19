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
    <main className="w-full px-4 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold text-onSurface">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Surface className="p-6">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Total Users</span>
                <span className="text-lg font-bold text-onSurface">{totalUsers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Active Users</span>
                <StatusBadge tone="success">{activeUsers}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>

        <Surface className="p-6">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Total Properties</span>
                <span className="text-lg font-bold text-onSurface">{totalProperties}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Active Properties</span>
                <StatusBadge tone="success">{activeProperties}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>

        <Surface className="p-6">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CalendarCheck className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-3 w-full space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Total Bookings</span>
                <span className="text-lg font-bold text-onSurface">{totalBookings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-onSurface-variant">Active Bookings</span>
                <StatusBadge tone="info">{activeBookings}</StatusBadge>
              </div>
            </div>
          </div>
        </Surface>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-bold text-onSurface">
        Most Popular Properties
      </h2>

      <div className="overflow-x-auto rounded-lg border border-outline-variant">
        <table className="min-w-full divide-y divide-outline-variant">
          <thead className="bg-surface-container">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-onSurface-variant">
                S.No
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-onSurface-variant">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-onSurface-variant">
                Host
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-onSurface-variant">
                Reviews
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-onSurface-variant">
                Rate/Night
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
            {(properties || []).map((data, index) => {
              const hostId = typeof data.userId == 'object' ? data!.userId._id! : data._id
              const hostName = typeof data.userId == 'object' ? data!.userId.userName! : 'Host'

              return (
                <tr key={index} className="hover:bg-surface-container-low">
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-onSurface">
                    {index + 1}.
                  </td>

                  <td className="whitespace-nowrap px-4 py-4">
                    <Link
                      href={`/Home/rooms/${data._id}`}
                      className="flex items-center gap-3 hover:text-primary"
                    >
                      <SafeImage
                        className="h-12 w-16 rounded-lg object-cover"
                        src={data.images?.[0]?.imgUrl}
                        alt="Property"
                        height={48}
                        width={64}
                        fallbackText="No image"
                      />
                      <span className="text-sm font-semibold text-onSurface">
                        {data.name}
                      </span>
                    </Link>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm text-onSurface-variant">
                    <Link
                      href={`/Home/user/${hostId}`}
                      className="text-primary hover:underline"
                    >
                      {hostName}
                    </Link>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-onSurface">
                    {data.ratingCount}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-onSurface">
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