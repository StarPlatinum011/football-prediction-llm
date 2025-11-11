"use client"

import clsx from "clsx";
import { HomeIcon, TrophyIcon, Rss, CalendarDaysIcon, UserIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Leagues',
        href: '#leagues',
        icon: TrophyIcon
    },
    {
        name: 'Calendar',
        href: '/#alendar',
        icon: CalendarDaysIcon
    },
    {
        name: 'Blog',
        href: '#blog',
        icon: Rss
    },
];

const authLinks = [
    {
        name: 'Profile',
        href: '#profile',
        icon: UserIcon
    },
    {
        name: 'Logout',
        href: '#logout',
        icon: LogOutIcon
    },
]
const NavLinks = () => {

    const pathname = usePathname();

    return (
        <div className="space-y-8">
            <hr />
            <div>

                {
                    links.map((link) => {
                        const LinkIcon = link.icon;
                        return(
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex h-12 grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sidebar md:flex-none md:justify-start md:p-2 md:px-3', 
                                    {
                                        'bg-sidebar text-(--nav-foreground)': pathname === link.href,
                                    }
                                )}
                            >
                                <LinkIcon />
                                <p>{link.name}</p> 
                            </Link>
                        )
                    })
                }
            </div>

            <hr />
            <div>
                {
                    authLinks.map((link) => {
                        const LinkIcon = link.icon;
                        return(
                            <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                    'flex h-12 grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sidebar md:flex-none md:justify-start md:p-2 md:px-3', 
                                    {
                                        'bg-sidebar text-(--nav-foreground)': pathname === link.href,
                                    }
                                )}
                            >
                                <LinkIcon />
                                <p>{link.name}</p>
                            
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NavLinks;