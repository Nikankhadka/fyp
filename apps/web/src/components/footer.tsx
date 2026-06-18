'use client'

import Link from 'next/link'

import { Globe, Search, Heart, User } from 'lucide-react'

const LinkStyle = 'mx-4 sm:mx-7 flex flex-col items-center gap-1'

export function PrimaryFooter(): JSX.Element {
  const active = false
  const Svgstyle = active ? 'h-6 w-6 text-primary' : 'h-6 w-6 text-gray-400 transition-all hover:text-primary'
  return (
    <main className="fixed bg-surface-container-lowest bottom-0 w-full border-t border-outline-variant/50">
      <footer className="p-2 flex justify-center items-center md:hidden">
        <Link href="/Home" className={LinkStyle}>
          <Search className="h-6 w-6 stroke-gray-400 hover:stroke-primary" />
          <span className="text-xs">Home</span>
        </Link>

        <Link href="/Home/Account/favourites" className={LinkStyle}>
          <Heart className={Svgstyle} />
          <span className="text-xs">WishLists</span>
        </Link>

        <Link href="/Home/Account/trips" className={LinkStyle}>
          <Globe className={Svgstyle} />
          <span className="text-xs">Trips</span>
        </Link>

        <Link href="/Home/Account" className={LinkStyle}>
          <User className="h-6 w-6 text-gray-400 hover:text-primary" />
          <span className="text-xs">Profile</span>
        </Link>
      </footer>
    </main>
  )
}

export const SecondaryFooter = () => {
  return (
    <main className="fixed bg-surface-container-lowest bottom-0 w-full border-t border-outline-variant/50">
      <footer className="hidden fixed bottom-0 left-0 w-full p-4 bg-surface-container-lowest border-t border-outline-variant/50 shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-inverse-surface dark:border-outline-variant">
        <span className="text-sm text-onSurface-variant sm:text-center">© 2023 <Link href="/Home" className="hover:text-primary">LuxeStay</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-onSurface-variant sm:mt-0">
          <li>
            <Link href="/Home" className="mr-4 hover:text-primary md:mr-6">Home</Link>
          </li>
          <li>
            <Link href="/Home/login" className="mr-4 hover:text-primary md:mr-6">Log in</Link>
          </li>
          <li>
            <Link href="/Home/signup" className="hover:text-primary">Sign up</Link>
          </li>
        </ul>
      </footer>
    </main>
  )
}
