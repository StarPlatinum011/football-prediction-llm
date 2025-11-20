"use client"

import clsx from "clsx";
import { LayoutDashboardIcon, TrophyIcon, Rss, CalendarDaysIcon, UserIcon, LogOutIcon, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from '@/app/ui/theme-toggle';
import { useEffect, useState } from "react";
import LogoCompact from "@/app/ui/logo-compact";

const links = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboardIcon
    },
    {
        name: 'Leagues',
        href: '#leagues',
        icon: TrophyIcon
    },
    {
        name: 'Calendar',
        href: '/#calendar',
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

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className='lg:h-full flex flex-col bg-background p-4 lg:p-6 relative'>
            {/* Top bar - Logo and controls */}
            <div className="flex items-center justify-between lg:flex-col lg:items-start lg:space-y-4 lg:mb-8">
                <div className="flex items-center space-x-2">
                    <LogoCompact/>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle/>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-foreground" /> 
                        ) : (
                            <Menu className="w-6 h-6 text-foreground"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-2">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return(
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-12 items-center gap-3 rounded-md px-3 text-sm font-medium hover:bg-sidebar-accent transition-colors', 
                                {
                                    'bg-sidebar-accent': pathname === link.href,
                                }
                            )}
                        >
                            <LinkIcon className="w-5 h-5" />
                            <p className="font-medium">{link.name}</p> 
                        </Link>
                    )
                })}

                {/* Spacer to push auth links to bottom */}
                <div className="flex-1" />

                <hr className="my-4 border-border" />

                {/* User Profile Nav */}
                {authLinks.map((link) => {
                    const LinkIcon = link.icon;
                    return(
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-12 items-center gap-3 rounded-md px-3 text-sm font-medium hover:bg-sidebar-accent transition-colors', 
                                {
                                    'bg-sidebar-accent': pathname === link.href,
                                }
                            )}
                        >
                            <LinkIcon className="w-5 h-5" />
                            <p>{link.name}</p>
                        </Link>
                    )
                })}
                
                <div className="mt-4">
                    <ThemeToggle/>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div 
                className={clsx(
                    "lg:hidden absolute left-0 right-0 top-full bg-muted border-t border-border shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50",
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 py-3 space-y-1">
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return(
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex h-12 items-center gap-3 rounded-md px-3 text-sm font-medium hover:bg-sidebar-accent transition-colors', 
                                    {
                                        'bg-sidebar-accent text-foreground': pathname === link.href,
                                    }
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <LinkIcon className="w-5 h-5" />
                                <p className="font-medium">{link.name}</p> 
                            </Link>
                        )
                    })}
                </div>

                <hr className="border-border" />

                {/* User Profile Nav */}
                <div className="px-4 py-3 space-y-1">
                    {authLinks.map((link) => {
                        const LinkIcon = link.icon;
                        return(
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex h-12 items-center gap-3 rounded-md px-3 text-sm font-medium hover:bg-sidebar-accent transition-colors', 
                                    {
                                        'bg-sidebar-accent text-foreground': pathname === link.href,
                                    }
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                <LinkIcon className="w-5 h-5" />
                                <p>{link.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default SideNav;