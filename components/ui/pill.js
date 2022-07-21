
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Avatar from './avatar'

const Pill = props => {
    const router = useRouter()
    /* linked values can be Logout, Login, Profile */
    const linker = props.linker
    const label = props.label
    const color = props.color ? props.color : 'bg-black'
    const username = props.username
    const avatar = '/bear.png'

    const handleClick = (e) => {
        e.preventDefault()
        router.push(linker)
    }


    return (
        <div className={`font-bold rounded-full ${color} text-white p-2 px-4 flex hover:bg-nft-orange hover:font-extrabold hover:text-black m-1 cursor-pointer`} onClick={handleClick}>
            {
                    linker === '/profile' ? (
                        <Avatar username={username}/>
                    ) : (<div className='capitalize'>{label}</div>)
                }
        </div>
    )

}

export default Pill;