'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import SideBar from "./sidebar"

import { useState, useEffect, createRef } from 'react'
import Image from "next/image"

export default function DashboardNav() {
  const [openSide, setopenSide] = useState(false)
  const sideRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const clickHandler = (e: any) => {
      if (!sideRef.current?.contains(e.target)) {
        setopenSide(false)
      }
    }
    document.addEventListener('mousedown', clickHandler)

    return () => {
      document.removeEventListener('mousedown', clickHandler)
    }
  })

  return (
    <main className="fixed z-50 flex h-20 w-full items-center justify-between bg-surface-container-lowest border-b border-outline-variant shadow-md md:hidden">
      <div ref={sideRef}>
        <button
          className="rounded-lg p-2 text-onSurface-variant hover:bg-surface-container hover:text-onSurface"
          onClick={(e) => {
            e.preventDefault()
            setopenSide(!openSide)
          }}
        >
          <Menu className="h-6 w-6" />
        </button>

        {openSide && <SideBar is_Admin={false} menu={true} ref={sideRef} />}
      </div>

      <Link href="/Home" className="flex items-center gap-2">
        <Image height={40} width={40} src="/airbnb.png" alt="logo" className="block" />
        <span className="block text-lg font-semibold text-primary drop-shadow-xl">LuxeStay</span>
      </Link>
    </main>
  )
}
