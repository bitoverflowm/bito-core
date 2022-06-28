import Image from 'next/image'

const Avatar = props => {
    return (
        <div className='flex'>
            <div className='flex-initial capitalize mt-2'>{props.username}</div> 
            <div className='flex-initial ml-3 mt-1'><Image src='/bear.png' alt='avatar' width="32" height="32"/></div>
        </div>
    )
}

export default Avatar;