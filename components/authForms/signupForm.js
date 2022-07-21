import { useState, useEffect } from "react"
import Router from 'next/router'
import { BsEaselFill } from "react-icons/bs"
import {Elements, useStripe, useElements } from "@stripe/react-stripe-js"
import { Magic } from 'magic-sdk'
import Link from "next/link"

import { useUser } from '../../lib/hooks'

import { fetchPostJSON } from "../../utils/api-helpers"
import getStripe from "../../utils/get-stripe"
import SubPaymentForm from "../payments/subPaymentForm"


const SignUpForm = ({
    subPlan  = 'gold'
}) => {
    useUser({ redirectIfFound: false})
    const [errorMessage, setErrorMessage] = useState('')
    const [step, setStep] = useState(1)
    const [customer, setCustomer] = useState()
    const [subscriptionPlan, setSubscriptionPlan] = useState('3')
    const [subscriptionId, setSubscriptionId] = useState()
    const [clientSecret, setClientSecret] = useState()  

    async function submitEmailHandler (e) {
        e.preventDefault()
        if(step === 1){
            let emailVal = e.currentTarget.email.value
            const body = {
                email: emailVal
            }
            try{
                const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
                const didToken = await magic.auth.loginWithMagicLink({
                    email: emailVal,
                  })
                const signUpRes = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + didToken,
                      },
                      body: JSON.stringify(body),
                })
                if(signUpRes.status === 200){
                    console.log('account created')
                } else {
                    Router.push('/')
                    throw new Error(await res.text())
                }
                
                const res = await fetchPostJSON('/api/createStripeCustomer', {
                    email: emailVal,
                }).then((data) => {
                    setCustomer(data.customer)
                    console.log(data.customer)
                    setStep(step + 1)
                })
            } catch (error) {
                console.error('An unexpected error happened occurred:', error)
                setErrorMessage(error.message)
            }
        }
        return null;
    }

    async function selectPlanHandler (e) {
        console.log(customer.id);
        e.preventDefault()
        if(step === 2){
            try {
                const res = await fetchPostJSON('/api/createSubscription', {
                    priceId: testPlans[subscriptionPlan],
                    customerId: customer.id,
                }).then((data) => {
                    setSubscriptionId(data.subscriptionId)
                    setClientSecret(data.clientSecret)
                    setStep(3)
                })
            } catch (error) {
                console.error('An unexpected error happened occurred:', error)
                setErrorMessage(error.message)
            }
        }
    }


    const testPlans = {
        '1': 'price_1LA225ILjX7EMe6xZsUiNe70',
        '2': 'price_1LA20oILjX7EMe6xSo2vOHcO',
        '3': 'price_1LA1yJILjX7EMe6xA9OhcKWT'
    }

    return (
        <div>
            {step === 1 &&
                <form onSubmit={submitEmailHandler} className="text-center">
                    Lets get you started ~ what is your email 👀?
                    <div className="flex border-black border-2 rounded-full p-3 mt-3">
                        <input className="flex-auto focus:border-white focus:outline-none" type="email" name="email" required placeholder="Email"/>
                        <div className="flex-none submit bg-blue-700 text-white rounded-full">
                            <button className="font-bold p-4" type="submit">Submit</button>
                        </div>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <div className='SignUp flex place-content-center p-4 text-sm cursor-pointer'>
                            Already have an account? <Link href='/login' ><div className='underline text-blue-600 pl-2'>Login</div></Link>
                    </div>
                </form>}

            {step === 2 &&
                <form onSubmit={selectPlanHandler}>
                    <div className="text-center italic">
                        Select your plan. 1st month is just a deposit. If you are not 100% satisfied with us, you get all cash back!
                    </div>
                    <div className="sm:flex">
                        <div className={`basis-1/3 border border-black rounded-md p-8 m-2  cursor-pointer ${subscriptionPlan === '1' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('1')}>
                            <div>Ruby</div>
                            <div>$600 / month</div>
                            <div>1st website delivery within 24hrs</div>
                            <div>Select this if you expect to have a simple display only website</div>
                        </div>
                        <div className={`basis-1/3 border-black border rounded-md p-8 m-2  cursor-pointer ${subscriptionPlan === '2' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('2')}>
                            <div>Silver</div>
                            <div>$1000/ month</div>
                            <div>1st website delivery within 24hrs</div>
                            <div>You expect to eventually have some more interactivity on your site. More traffic. More capabilities...</div>
                        </div>
                        <div className={`basis-1/3 border-black border rounded-md p-8 m-2  cursor-pointer ${subscriptionPlan === '3' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('3')}>
                            <div>Gold</div>
                            <div>$5000 / month</div>
                            <div>1st website delivery within 24hrs</div>
                            <div>The Gold pack. Maybe you need an app along with your site. Maybe you run an ecomemrce platform that needs regular updates and regular work. Maybe you want to delve into crypto. You plan to do something real with your tech capabilities, beyond display and visibility.</div>
                        </div>
                    </div>
                    <div className="submit grid place-content-center">
                        <button className="font-bold p-4 w-24 bg-blue-700 text-white rounded-full" type="submit">Go!</button>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
                }
            {step === 3 &&
                <div className="grid place-content-center">
                    <Elements stripe={getStripe()}
                        options={{
                            clientSecret: clientSecret,
                        }}>
                            <SubPaymentForm clientSecret={clientSecret}/>                
                    </Elements>
                </div>
            }
        </div>            
    )
}

export default SignUpForm