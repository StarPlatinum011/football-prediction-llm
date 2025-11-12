import { inter } from '@/app/ui/fonts'
import { Globe2Icon } from 'lucide-react';
import Link from 'next/link';

const LogoCompact = () => {
    return (
        <Link href={'/'} className={`${inter.className} flex flex-row items-center leading-none gap-2 text-white`}>
            <Globe2Icon className='h-6 w-6 lg:h-8 lg:w-8 text-foreground'/>
            <p className='text-lg lg:text-xl font-bold text-foreground'>Woodwork.ai</p>
        </Link>
    );
};

export default LogoCompact;