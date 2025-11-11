import {inter} from '@/app/ui/fonts'
import { Globe2Icon } from 'lucide-react';
const Logo = () => {
    return (
        <div className={`${inter.className} flex flex-row items-center leading-none text-white`}>
            <Globe2Icon className='h-12 w-12'/>
            <p className='text-[36px] text-(--color-foreground)'>Woodwork.ai</p>
        </div>
    );
};

export default Logo;