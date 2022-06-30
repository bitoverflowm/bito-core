import Link from 'next/link';

import { useUser } from '../lib/hooks';
import Pill from './ui/pill'


const Top = () => {
    const user = useUser();

    return(
        <header>
            <div className="absolute top-10 left-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-4xl font-bold">
                🤖BitO 
            </div>
            <div className='absolute right-10 top-10 z-30'>
                {
                    user ? (
                        <Pill linker='/profile' label='Profile' usename={user.email}/>
                    ) : (
                        <Pill linker='/login' label='Login'/>
                    )
                }
            </div>
            <div className='logout'>
                <Link href="/api/logout"><a>Logout</a></Link>
            </div>            
        </header>
    )
}

export default Top;