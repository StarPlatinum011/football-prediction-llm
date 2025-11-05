import {lusitana} from '@/app/ui/fonts'
import { GlobeAltIcon } from '@heroicons/react/16/solid';
const Logo = () => {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <GlobeAltIcon className='h-12 w-12'/>
            <p className='text-[44px]'>Woodwork.ai</p>
        </div>
    );
};

export default Logo;