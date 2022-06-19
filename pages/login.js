import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'

import { Magic } from 'magic-sdk'

import LoginForm from '../components/loginForm'


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
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" required />
                </label>

                <div className="submit">
                <button type="submit">Sign Up / Login</button>
                </div>

                {errorMsg && <p className="error">{errorMsg}</p>}
            </form>
            <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
    )
}
    
export default Login
  