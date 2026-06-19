'use client'

import Link from 'next/link'

import { Globe, Search, Heart, User } from 'lucide-react'

const LinkStyle = 'mx-4 sm:mx-7 flex flex-col items-center gap-1'

export function PrimaryFooter(): JSX.Element {
  const Svgstyle = 'h-6 w-6 text-onSurface-variant transition-all hover:text-primary'
  return (
    <main className="w-full border-t border-outline-variant/50 bg-surface-container-lowest md:hidden">
      <footer className="p-2 flex justify-center items-center md:hidden">
        <Link href="/Home" className={LinkStyle}>
          <Search className="h-6 w-6 stroke-onSurface-variant hover:stroke-primary" />
          <span className="text-xs text-onSurface-variant">Home</span>
        </Link>

        <Link href="/Home/Account/favourites" className={LinkStyle}>
          <Heart className={Svgstyle} />
          <span className="text-xs text-onSurface-variant">WishLists</span>
        </Link>

        <Link href="/Home/Account/trips" className={LinkStyle}>
          <Globe className={Svgstyle} />
          <span className="text-xs text-onSurface-variant">Trips</span>
        </Link>

        <Link href="/Home/Account" className={LinkStyle}>
          <User className="h-6 w-6 text-onSurface-variant hover:text-primary" />
          <span className="text-xs text-onSurface-variant">Profile</span>
        </Link>
      </footer>
    </main>
  )
}

export const SecondaryFooter = () => {
  return (
    <footer className="hidden bg-surface-container-lowest border-t border-outline-variant w-full py-10 px-gutter md:block">
      <div className="mx-auto max-w-container-max">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold text-primary">Meroghar</span>
            <p className="max-w-[300px] text-onSurface-variant">Discover extraordinary homes with spectacular views and premium amenities around the world.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-onSurface mb-2">Support</h4>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Help Center</Link>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Safety information</Link>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Cancellation options</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-onSurface mb-2">Community</h4>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Disaster relief housing</Link>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Combating discrimination</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-onSurface mb-2">Hosting</h4>
              <Link href="/Home/Account/listings" className="text-onSurface-variant hover:text-primary hover:underline">Meroghar your home</Link>
              <Link href="/Home/Account/listings" className="text-onSurface-variant hover:text-primary hover:underline">Host resources</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-onSurface mb-2">Meroghar</h4>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">About</Link>
              <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Careers</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-onSurface-variant">© {new Date().getFullYear()} Meroghar Inc. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Privacy</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Terms</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/Home" className="text-onSurface-variant hover:text-primary hover:underline">Sitemap</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-onSurface hover:text-primary hover:underline text-sm">
              <Globe className="h-4 w-4" />
              English (US)
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
