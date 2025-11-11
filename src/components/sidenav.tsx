"use client"

import clsx from "clsx";
import { LayoutDashboardIcon, TrophyIcon, Rss, CalendarDaysIcon, UserIcon, LogOutIcon, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from '@/app/ui/theme-toggle';
import Logo from '../app/ui/logo';
import { useEffect, useState } from "react";


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
const SideNav = () => {

    const [isOpen, setIsOpen ] = useState(false)
    const [isScrolled, setIsScrolled ] = useState(false)
    // const [activeDropdown, setActiveDropdown] = useState(null);
    
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20 )
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className=' bg-background space-y-4'>
                <div className="flex items-center space-x-2">
                    <Logo/>
                    <ThemeToggle/>
                </div>

                {/* -------------------//Desktop Navigation --------------------------*/}
                <div className="hidden md:flex flex-col">
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
                                    <p className="font-medium">{link.name}</p> 
                                </Link>
                            )
                        })
                    }
                </div>

                <hr />
                {/* User Profile Nav  */}
                <div className="hidden md:flex flex-col">
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

                {/* Mobile Nav Menu Button */}
                <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-sidebar transition-colors"
                >
                    {
                        isOpen ? (
                            <X className="w-6 h-6 text-foreground" /> 
                        ) : (
                            <Menu className="w-6 h-6 text-foreground"/>
                        )
                    }
                </button>


                {/* ----------------------------Mobile Navigation bar ------------------------------- */}
                {isOpen && (
                    <div className="md:hidden bg-muted border-t border-card-foreground shadow-xl animation-duration-initial slide-in-from-top duration-200">
                        <div className="px-4 py-3 space-y-1">
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
                                                    'bg-sidebar text-foreground': pathname === link.href,
                                                }
                                            )}
                                            onClick={()=> setIsOpen(false)}
                                        >
                                            <LinkIcon />
                                            <p className="font-medium">{link.name}</p> 
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        <hr />
                        {/* User Profile Nav  */}
                        <div className="pt-3 mt-3 border-t border-card-foreground space-y-1 ">
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
                                                    'bg-sidebar text-foreground': pathname === link.href,
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
                )} 
            </nav>
        </>
    );
};

export default SideNav;