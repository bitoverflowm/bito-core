import { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { useUser } from '../lib/hooks'
import { Magic } from 'magic-sdk'

import LoginForm from '../components/loginForm'
import BackArrow from '../components/navigation/backArrow'

/*<li><a href="/api/logout">Logout</a></li>*/

const Login = () => {
    useUser({ redirectTo: '/', redirectIfFound: true })
  
    const [errorMsg, setErrorMsg] = useState('')
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (errorMsg) setErrorMsg('')
  
      const body = {
        email: e.currentTarget.email.value,
      }
  
      try {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
        const didToken = await magic.auth.loginWithMagicLink({
          email: body.email,
        })
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + didToken,
          },
          body: JSON.stringify(body),
        })
        if (res.status === 200) {
          Router.push('/')
        } else {
          throw new Error(await res.text())
        }
      } catch (error) {
        console.error('An unexpected error happened occurred:', error)
        setErrorMsg(error.message)
      }
    }

    return (
        <div className='relative flex h-screen items-center bg-gradient-to-br from-nft-purple to-nft-cotton p-5 '>
          <div className='p-5 h-full rounded-md w-full bg-white grid grid-cols-1 divide-y divide-black'>
            <div className="grid grid-cols-1 grid-rows-5">
                <div className='text-3xl row-span-1'><BackArrow/></div>
                <div className='row-span-4'>
                  <div className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-6xl text-center">
                    🤖
                  </div>
                  <div className='text-3xl font-bold text-center p-2'>
                    Let's sign you in.
                  </div>
                  <div className='text-xl font-light text-center p-1'>
                    Welcome back. We've missed you!
                  </div>
                  <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
                </div>
            </div>
            <div className='SignUp flex place-content-center p-4'>
              Don't have an account? <Link href='/signup' ><div className='underline text-blue-600 pl-2'>Register Now</div></Link>
            </div>
          </div>
          
        </div>
    )
}
    
export default Login
  