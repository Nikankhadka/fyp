'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, Home, Settings, HousePlus, UserCheck, LogOut, LayoutDashboard } from 'lucide-react'
import { forwardRef } from 'react'
import Api from '../../api/client/axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '../../utils/cn'

interface props {
  is_Admin: boolean
  menu: boolean
}

type Ref = HTMLDivElement

const navItems = [
  { href: '/Admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/Admin/users', label: 'Users', icon: User },
  { href: '/Admin/kycRequest', label: 'KYC Requests', icon: UserCheck },
  { href: '/Admin/listing', label: 'Listings', icon: Home },
  { href: '/Admin/listingRequest', label: 'Listing Requests', icon: HousePlus },
  { href: '/Admin/account', label: 'Account', icon: Settings },
]

const SideBar = forwardRef<Ref, props>((props, ref): JSX.Element => {
  const trans = '-translate-x-full'
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'fixed top-[80px] left-0 z-20 h-screen w-full border-r border-outline-variant bg-surface-container-lowest shadow-lg transition-transform sm:w-64 md:top-0 md:translate-x-0 md:w-[220px] lg:w-64',
        props.menu ? '' : trans,
      )}
    >
      <div className="h-full w-64 overflow-y-auto bg-surface px-3 py-4 sm:w-full" ref={ref}>
        {!props.menu && (
          <div>
            <Link href="/Home" className="my-2 flex items-center gap-2">
              <Image width={40} height={40} src="/airbnb.png" alt="logo" className="block h-10 w-10" />
              <span className="block font-semibold text-primary drop-shadow-xl md:text-lg">Meroghar</span>
            </Link>
            <hr className="mt-6 border-outline-variant" />
          </div>
        )}

        <nav className="space-y-1">
          {navItems.map((item) => {
            if (item.href === '/Admin/kycRequest' && !props.is_Admin) return null
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'my-1 flex items-center rounded-lg p-2 text-base font-normal transition',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-onSurface-variant hover:bg-surface-container hover:text-onSurface',
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-3">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <hr className="my-5 border-outline-variant" />

        <button
          onClick={(e) => {
            e.preventDefault()
            Api.delete('/auth/v1/logout', { withCredentials: true })
              .then(() => {
                toast.success('User logged Out')
                router.push('/Home')
              })
              .catch(() => {
                toast.success('User logged Out')
                router.push('/Home')
              })
          }}
          className="w-full flex items-center rounded-lg p-2 text-base font-normal text-onSurface-variant transition hover:bg-surface-container hover:text-onSurface"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Log out</span>
        </button>
      </div>
    </div>
  )
})

SideBar.displayName = 'SideBar'

export default SideBar
