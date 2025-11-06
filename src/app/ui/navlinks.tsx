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
        href: '/',
        icon: TrophyIcon
    },
    {
        name: 'Calender',
        href: '/',
        icon: CalendarDaysIcon
    },
    {
        name: 'Blog',
        href: '/',
        icon: Rss
    },
];

const authLinks = [
    {
        name: 'Account',
        href: '/',
        icon: UserIcon
    },
    {
        name: 'Logout',
        href: '/',
        icon: LogOutIcon
    },
]
const NavLinks = () => {

    const pathname = usePathname();

    return (
        <div>
            <hr />
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return(
                        <Link
                            key={link.name}
                            href={link.href}
                            className=""
                        >
                            <LinkIcon />
                            <p>{link.name}</p> 
                        </Link>
                    )
                })
            }

            <hr />
            {
                authLinks.map((link) => {
                    const LinkIcon = link.icon;
                    return(
                        <Link
                         key={link.name}
                         href={link.href}
                        >
                            <LinkIcon />
                            <p>{link.name}</p>
                        
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default NavLinks;