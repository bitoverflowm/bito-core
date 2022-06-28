
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Avatar from './avatar'

const Pill = props => {
    const router = useRouter()
    /* linked values can be Logout, Login, Profile */
    const linker = props.linker
    const label = props.label
    const username = 'John'
    const avatar = '/bear.png'

    const handleClick = (e) => {
        e.preventDefault()
        router.push(linker)
    }


    return (
        <div className="font-bold rounded-full bg-black text-white p-2 px-4 flex" onClick={handleClick}>
            {
                    linker === '/profile' ? (
                        <Avatar username={username}/>
                    ) : (<div className='capitalize'>{label}</div>)
                }
        </div>
    )

}

export default Pill;