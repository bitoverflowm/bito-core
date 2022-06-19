import Link from 'next/link'
import { useUser } from '../lib/hooks'


const Top = () => {
    const user = useUser()

    return(
        <header>
            <nav>
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
                        <li>
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        </li>
                    )
                }
            </nav>
        </header>
    )
}

export default Top;