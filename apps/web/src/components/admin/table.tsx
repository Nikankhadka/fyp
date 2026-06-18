'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Ban, CheckCircle2, Search, Undo2 } from 'lucide-react'

import Api from '../../api/client/axios'
import { FetchedMe, IBooking, Property } from '../../interface/response'
import useConfirm from '../../store/useConfirm'
import useModal from '../../store/useModal'
import useReject from '../../store/useReject'
import { normalizeImageSrc } from '../common/normalizeImageSrc'
import TripBookingClient from '../listing/TripsReservationClient'
import {
  Button,
  Field,
  PageHeader,
  StatusBadge,
} from '../ui/primitives'
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../ui/data-table'

interface AdminTableProps {
  use?: string
  bookings?: Partial<IBooking>[]
  users?: Partial<FetchedMe>[]
  properties?: Partial<Property>[]
}

const titleCase = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')

export default function AdminTable({
  use,
  users = [],
  properties = [],
  bookings = [],
}: AdminTableProps) {
  const [stateUsers, setStateUsers] = useState(users)
  const [stateProperties, setStateProperties] = useState(properties)
  const [search, setSearch] = useState('')
  const modal = useModal()
  const reject = useReject()
  const confirm = useConfirm()

  useEffect(() => {
    setStateUsers(users)
  }, [users])

  useEffect(() => {
    setStateProperties(properties)
  }, [properties])

  useEffect(() => {
    if (use === 'booking') return

    const controller = new AbortController()
    const timeout = window.setTimeout(async () => {
      try {
        if (use === 'user') {
          const res = await Api.get(`/admin/v1/allUsers/?search=${search}`, {
            withCredentials: true,
            signal: controller.signal,
          })
          setStateUsers(res.data.users)
          return
        }

        if (use === 'property') {
          const res = await Api.get(`/admin/v1/allProperties/?search=${search}`, {
            withCredentials: true,
            signal: controller.signal,
          })
          setStateProperties(res.data.properties)
        }
      } catch (error: any) {
        if (error?.code === 'ERR_CANCELED') return
        setStateUsers(users)
        setStateProperties(properties)
      }
    }, 300)

    return () => {
      controller.abort()
      window.clearTimeout(timeout)
    }
  }, [properties, search, use, users])

  const pageTitle = use === 'user'
    ? 'Users'
    : use === 'property'
      ? 'Properties'
      : 'Bookings'

  const pageDescription = use === 'user'
    ? 'Search, review, ban, and unban marketplace users.'
    : use === 'property'
      ? 'Search property inventory and apply admin moderation actions.'
      : 'Review booking activity across guests and hosts.'

  const banUnbanUser = (id: string, ban: boolean) => {
    if (ban) {
      reject.setbtn('Ban User')
      reject.onContent({
        onReject: (message: string) => {
          Api.patch(`/admin/v1/banUnbanUser/${id}`, { ban, message }, { withCredentials: true })
            .then(() => {
              toast.success('User successfully banned')
              modal.onClose()
              window.location.reload()
            })
            .catch(() => {
              toast.error('User ban failed')
            })
        },
      })

      return modal.onOpen('reject')
    }

    confirm.onContent({
      header: 'Are you sure you want to unban this user?',
      actionBtn: 'Unban User',
      onAction: () => {
        Api.patch(`/admin/v1/banUnbanUser/${id}`, { ban }, { withCredentials: true })
          .then(() => {
            toast.success('User successfully unbanned')
            modal.onClose()
            window.location.reload()
          })
          .catch(() => {
            toast.error('User unban failed')
          })
      },
    })

    return modal.onOpen('confirm')
  }

  const banUnbanProperty = (id: string, ban: boolean) => {
    if (ban) {
      reject.setbtn('Ban Property')
      reject.onContent({
        onReject: (message: string) => {
          Api.patch(`/admin/v1/banUnbanProperty/${id}`, { ban, message }, { withCredentials: true })
            .then(() => {
              toast.success('Property successfully banned')
              modal.onClose()
              window.location.reload()
            })
            .catch(() => {
              toast.error('Property ban failed')
            })
        },
      })

      return modal.onOpen('reject')
    }

    confirm.onContent({
      header: 'Are you sure you want to unban this property?',
      actionBtn: 'Unban Property',
      onAction: () => {
        Api.patch(`/admin/v1/banUnbanProperty/${id}`, { ban }, { withCredentials: true })
          .then(() => {
            toast.success('Property successfully unbanned')
            modal.onClose()
            window.location.reload()
          })
          .catch(() => {
            toast.error('Property unban failed')
          })
      },
    })

    return modal.onOpen('confirm')
  }

  if (use === 'booking') {
    return <TripBookingClient trips={false} is_Admin={true} bookings={bookings} />
  }

  return (
    <main className="mx-auto w-[96%]">
      <PageHeader title={pageTitle} description={pageDescription} />

      <div className="mb-5 max-w-md">
        <label className="sr-only">Search {pageTitle}</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-onSurface-variant/50" />
          <Field
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-10"
            placeholder={`Search ${pageTitle.toLowerCase()}`}
          />
        </div>
      </div>

      <DataTable>
        <Table>
          <TableHead>
            <TableRow className="hover:bg-surface-container">
              <TableHeaderCell className="w-20">S.No</TableHeaderCell>
              <TableHeaderCell>{use === 'user' ? 'User' : 'Property'}</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>{use === 'user' ? 'About' : 'Host'}</TableHeaderCell>
              <TableHeaderCell className="text-right">Actions</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {use === 'property' && stateProperties.length === 0 && (
              <TableEmpty
                colSpan={5}
                title="No properties found"
                description="Search results and property records will appear here."
              />
            )}

            {use === 'property' &&
              stateProperties.map((data, index) => {
                const propertyImageSrc = normalizeImageSrc(data.images?.[0]?.imgUrl)
                const hostName =
                  typeof data.userId === 'object' ? data.userId.userName || 'Host' : 'Host'
                const hostId =
                  typeof data.userId === 'object' ? data.userId._id || '' : ''

                return (
                  <TableRow key={data._id || index}>
                    <TableCell className="font-semibold">{index + 1}.</TableCell>
                    <TableCell>
                      <Link
                        href={`/Home/rooms/${data._id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 font-semibold text-onSurface hover:text-primary"
                      >
                        {propertyImageSrc ? (
                          <Image
                            alt="Room"
                            height={64}
                            width={80}
                            className="h-16 w-20 rounded-md object-cover"
                            src={propertyImageSrc}
                          />
                        ) : (
                          <div className="flex h-16 w-20 items-center justify-center rounded-md bg-surface-container text-center text-xs text-onSurface-variant">
                            No image
                          </div>
                        )}
                        <span className="max-w-[220px] truncate">{data.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <StatusBadge tone={data.isBanned?.status ? 'danger' : 'success'}>
                        {data.isBanned?.status ? 'Banned' : 'Active'}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      {hostId ? (
                        <Link href={`/Home/user/${hostId}`} className="font-semibold text-primary underline">
                          {titleCase(hostName)}
                        </Link>
                      ) : (
                        <span>{titleCase(hostName)}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {data.isBanned?.status ? (
                        <Button
                          type="button"
                          tone="primary"
                          onClick={() => banUnbanProperty(data._id!, false)}
                        >
                          <Undo2 className="mr-2 h-4 w-4" />
                          Unban
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          tone="danger"
                          onClick={() => banUnbanProperty(data._id!, true)}
                        >
                          <Ban className="mr-2 h-4 w-4" />
                          Ban
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}

            {use === 'user' && stateUsers.length === 0 && (
              <TableEmpty
                colSpan={5}
                title="No users found"
                description="Search results and user records will appear here."
              />
            )}

            {use === 'user' &&
              stateUsers.map((data, index) => {
                const profileImageSrc = normalizeImageSrc(data.profileImg?.imgUrl)

                return (
                  <TableRow key={data._id || index}>
                    <TableCell className="font-semibold">{index + 1}.</TableCell>
                    <TableCell>
                      <Link
                        href={`/Home/user/${data._id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 font-semibold text-onSurface hover:text-primary"
                      >
                        {profileImageSrc ? (
                          <Image
                            alt="Profile"
                            height={48}
                            width={48}
                            className="h-12 w-12 rounded-full object-cover"
                            src={profileImageSrc}
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container text-center text-[10px] text-onSurface-variant">
                            No image
                          </div>
                        )}
                        <span className="max-w-[220px] truncate">{data.userName}</span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <StatusBadge tone={data.isBanned?.status ? 'danger' : 'success'}>
                        {data.isBanned?.status ? 'Banned' : 'Active'}
                      </StatusBadge>
                    </TableCell>
                    <TableCell className="max-w-md truncate text-onSurface-variant">
                      {data.about || 'No profile summary provided'}
                    </TableCell>
                    <TableCell className="text-right">
                      {data.isBanned?.status ? (
                        <Button
                          type="button"
                          tone="primary"
                          onClick={() => banUnbanUser(data._id!, false)}
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Unban
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          tone="danger"
                          onClick={() => banUnbanUser(data._id!, true)}
                        >
                          <Ban className="mr-2 h-4 w-4" />
                          Ban
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </DataTable>
    </main>
  )
}
