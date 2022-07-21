import Link from 'next/link';

import { useUser } from '../lib/hooks';
import Pill from './ui/pill'


const Top = () => {
    const user = useUser();

    return(
        <div className='block m-16'>
            <div className="absolute top-10 left-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-4xl font-bold">
                🤖BitO 
            </div>
            <div className='absolute right-10 top-10 z-30 cursor-pointer'>
                {
                    user ? (
                        <div className='flex place-items-center'>
                            <div className='hover:text-nft-orange hover:font-extrabold invisible hidden sm:visible sm:block'>
                                <Link href="/api/logout"><a>Logout</a></Link>
                            </div>
                            <div className='mx-4'>
                                <Pill linker='/profile' label='Profile' username={user.email}/>
                            </div>                            
                        </div>
                    ) : (
                        <Pill linker='/login' label='Login'/>
                    )
                }
            </div>         
        </div>
    )
}

export default Top;