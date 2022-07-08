import { useState, useEffect } from "react"
import { BsEaselFill } from "react-icons/bs"
import {Elements, useStripe, useElements } from "@stripe/react-stripe-js"

import { fetchPostJSON } from "../../utils/api-helpers"
import getStripe from "../../utils/get-stripe"
import SubPaymentForm from "../payments/subPaymentForm"


const SignUpForm = ({
    subPlan  = 'ruby'
}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [step, setStep] = useState(1)
    const [customer, setCustomer] = useState()
    const [subscriptionPlan, setSubscriptionPlan] = useState('1')
    const [subscriptionId, setSubscriptionId] = useState()
    const [clientSecret, setClientSecret] = useState()   

    async function submitEmailHandler (e) {
        e.preventDefault()
        if(step === 1){
            try{
                const res = await fetchPostJSON('/api/createStripeCustomer', {
                    email: e.currentTarget.email.value,
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
                <form onSubmit={submitEmailHandler}>
                    Lets start with your contact info:
                    <div className="flex border-black border-2 rounded-full p-3 mt-3">
                        <input className="flex-auto" type="email" name="email" required placeholder="Email"/>
                        <div className="flex-none submit bg-blue-700 text-white rounded-full">
                            <button className="font-bold p-4" type="submit">Submit</button>
                        </div>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>}

            {step === 2 &&
                <form onSubmit={selectPlanHandler}>
                    <div className="flex">
                        Select your plan
                    </div>
                    <div className="">
                        <div className={`basis-1/3 border-black border-2 rounded-full p-8 m-2  cursor-pointer ${subscriptionPlan === '1' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('1')}>
                            <div>Ruby</div>
                        </div>
                        <div className={`basis-1/3 border-black border-2 rounded-full p-8 m-2  cursor-pointer ${subscriptionPlan === '2' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('2')}>
                            <div>Silver</div>
                        </div>
                        <div className={`basis-1/3 border-black border-2 rounded-full p-8 m-2  cursor-pointer ${subscriptionPlan === '3' ? 'bg-green-400 font-extrabold': ''}`} onClick={ () => setSubscriptionPlan('3')}>
                            <div>Gold</div>
                        </div>
                    </div>
                    <div className="flex-none submit bg-blue-700 text-white rounded-full">
                        <button className="font-bold p-4" type="submit">Go!</button>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
                }
            {step === 3 &&
            <Elements stripe={getStripe()}
                options={{
                    clientSecret: clientSecret,
                }}>
                    <SubPaymentForm clientSecret={clientSecret}/>                
            </Elements>
            }
        </div>            
    )
}

export default SignUpForm