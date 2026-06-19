'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Menu } from 'lucide-react'
import Search from './searchButton'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import { Button } from '../ui/primitives'
import useModal from '../../store/useModal'
import Api from '../../api/client/axios'
import { toast } from 'react-hot-toast'

interface NavProps {
  theme: string,
  authState: boolean,
  img: string
  is_Admin: boolean
}

const NavBar = ({ authState, img, is_Admin }: NavProps): JSX.Element => {
  const router = useRouter()
  const modal = useModal()

  const handleLogout = () => {
    Api.delete('/auth/v1/logout', { withCredentials: true })
      .then(() => {
        toast.success("User logged Out")
        router.refresh()
        router.push('/Home')
      })
      .catch(() => {
        toast.success("User logged Out")
        router.refresh()
        router.push('/Home')
      })
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-surface-container-highest bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="relative mx-auto flex h-20 w-full max-w-container-max items-center justify-between px-4 sm:px-5 lg:px-6">
        <Link href="/Home" className="relative z-10 flex shrink-0 cursor-pointer items-center gap-2 duration-150 active:scale-95">
          <Image width={40} height={40} src="/airbnb.png" alt="Meroghar logo" />
          <span className="hidden text-xl font-black text-primary lg:inline">
            Meroghar
          </span>
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-1/2 w-[min(52vw,340px)] -translate-x-1/2 -translate-y-1/2 md:w-[min(640px,calc(100vw-32rem))]">
          <div className="pointer-events-auto w-full">
            <Search />
          </div>
        </div>

        <div className="relative z-10 flex shrink-0 items-center justify-end gap-2">
          {authState && !is_Admin && (
            <Button asChild tone="secondary" className="hidden lg:inline-flex gap-2 rounded-full px-4 py-3">
              <Link href="/Home/Account/listings">
                <Home className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm">Switch to hosting</span>
              </Link>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 border border-surface-container-highest p-2 pl-3 rounded-full hover:shadow-sm transition-shadow bg-surface-container-lowest cursor-pointer active:scale-95 duration-150">
                <Menu className="h-5 w-5 text-onSurface" aria-hidden="true" />
                <Image
                  width={32}
                  height={32}
                  src={img === '' ? '/user.png' : img}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full bg-surface-container-highest"
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-60">
              {!authState ? (
                <>
                  <DropdownMenuItem onClick={() => modal.onOpen('login')} className="cursor-pointer font-semibold">
                    Log in
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => modal.onOpen('signup')} className="cursor-pointer">
                    Sign up
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => modal.onOpen('login')} className="cursor-pointer">
                    Post Property
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  {!is_Admin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/Home/Account/trips" className="font-semibold">Trips</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Home/Account/favourites" className="font-semibold">WishLists</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Home/Account/reservations" className="font-semibold">Reservations</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/Home/Account/listings">Manage Listings</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href={is_Admin ? "/Admin" : "/Home/Account"} className={is_Admin ? 'font-semibold' : ''}>
                      {is_Admin ? "Dashboard" : "Account"}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    Log Out
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
