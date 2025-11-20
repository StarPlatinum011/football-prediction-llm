import {inter} from '@/app/ui/fonts'
import { Globe2Icon } from 'lucide-react';
import Link from 'next/link';
const Logo = () => {
    return (
        <Link href={'/'} className={`${inter.className} flex flex-row items-center leading-none gap-1 text-white`}>
            <Globe2Icon className='lg:h-12 lg:w-12 text-(--color-foreground)'/>
            <p className='text-xl md:text-4xl font-bold text-(--color-foreground) text-center'>Woodwork.ai</p>
        </Link>
    );
};

export default Logo;