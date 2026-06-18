'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Home, LogIn, Menu, UserPlus } from 'lucide-react'
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

  useEffect(() => {
    router.refresh()
  }, [])

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
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-neutral-200 bg-white dark:bg-slate-700">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-3 px-3 sm:px-4 lg:px-6">
        <Link href="/Home" className="flex shrink-0 items-center gap-2">
          <Image width={40} height={40} src="/airbnb.png" alt="MeroGhar logo" />
          <span className="hidden text-lg font-semibold text-mainColor drop-shadow-xl dark:text-themeColor sm:inline">
            MeroGhar
          </span>
        </Link>

        <div className="min-w-0 flex-1 md:flex md:justify-center">
          <div className="w-full md:max-w-xl">
            <Search />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!authState && (
            <div className="hidden items-center gap-2 md:flex">
              <Button
                type="button"
                tone="ghost"
                className="gap-2 px-3"
                onClick={() => modal.onOpen('login')}
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Log in
              </Button>
              <Button
                type="button"
                className="gap-2 px-3"
                onClick={() => modal.onOpen('signup')}
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Sign up
              </Button>
            </div>
          )}

          {authState && !is_Admin && (
            <Button asChild tone="secondary" className="hidden gap-2 px-3 md:inline-flex">
              <Link href="/Home/Account/listings">
                <Home className="h-4 w-4" aria-hidden="true" />
                Post Room
              </Link>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button tone="secondary" className="gap-2 border-gray-200 px-2 py-1">
                <Menu className="h-5 w-5" aria-hidden="true" />
                <Image
                  width={32}
                  height={32}
                  src={img === '' ? '/user.png' : img}
                  alt="user"
                  className="h-8 w-8 rounded-full"
                />
              </Button>
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
