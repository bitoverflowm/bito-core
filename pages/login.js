import { useState } from 'react'
import Router from 'next/router'

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
        <div className='relative flex h-screen items-center bg-gradient-to-br from-pink-400 to-red-600 p-5 '>
          <div className="grid grid-cols-1 bg-white p-5 h-full rounded-md w-full">
              <div className='text-3xl'><BackArrow/></div>              
              <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
          </div>
        </div>
    )
}
    
export default Login
  