import Link from 'next/link'
import { useUser } from '../lib/hooks'


const Top = () => {
    const user = useUser()

    return(
        <header>
            <div className="absolute top-10 left-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-4xl font-bold">
                🤖BitO 
            </div>
            <div className='absolute right-10 top-10 font-bold rounded-full bg-black text-white p-2 px-4'>
                {
                    user ? (
                        <>
                            <li>
                                <Link href="/profile">
                                    <a>Profile</a>
                                </Link>
                            </li>
                            <li>
                                <a href="/api/logout">Logout</a>
                            </li>
                        </>
                    ) : (
                        <div>
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        </div>
                    )
                }
            </div>
            
        </header>
    )
}

export default Top;