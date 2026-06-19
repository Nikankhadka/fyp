'use client'

import Link from "next/link"
import { Search, Heart, User, Globe, MessageSquare } from "lucide-react"
import { cn } from "../../utils/cn"

interface FooterChild {
    page: string
    active: boolean
}

const iconMap: Record<string, typeof Search> = {
    Explore: Search,
    WishList: Heart,
    'Log in': User,
    Profile: User,
    Trips: Globe,
    Inbox: MessageSquare,
}

const hrefMap: Record<string, string> = {
    Explore: '/',
    WishList: '/wishList',
    'Log in': '/login',
    Profile: '/Account',
    Trips: '/Bookings',
    Inbox: '#',
}

export default function FooterChild({ page, active }: FooterChild) {
    const Icon = iconMap[page]
    const href = hrefMap[page] ?? '#'

    if (!Icon) {
        return <h1>hello</h1>
    }

    return (
        <Link href={href} className="mx-4 flex flex-col items-center gap-1 sm:mx-7">
            <Icon
                className={cn(
                    'h-6 w-6 transition-all',
                    active
                        ? 'stroke-themeColor'
                        : 'stroke-gray-400 hover:stroke-themeColor'
                )}
                strokeWidth={page === 'Explore' ? 2.5 : page === 'WishList' ? 2 : 1.5}
            />
            <span className="text-xs">{page}</span>
        </Link>
    )
}
