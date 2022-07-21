import { useEffect, useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

import { fetchPostJSON } from "../../utils/api-helpers"

const SubPaymentForm = (props) => {
    //we may not actually need payment intents with subscriptions
    const [payment, setPayment] = useState({status: 'initial'})
    const [paymentIntent, setPaymentIntent] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [fullName, setFullName] = useState()
    const [paymentType, setPaymentType] = useState('')

    const client_secret = props.clientSecret

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        fetchPostJSON('/api/payment_intents', {
            amount: 400,
        }).then((data) => {
            setPaymentIntent(data)
        })
    }, [setPaymentIntent])

    const paymentHandler = async (e) => {
        e.preventDefault()
        //double check form validity
        if(!e.currentTarget.reportValidity()) return
        if(!elements) return
        setPayment({ status: 'processing'})

        const response = await fetchPostJSON('/api/payment_intents', {
            amount: 400,
            payment_intent_id: paymentIntent.id,
            client_secret: client_secret
        })

        setPayment(response)

        if (response.statusCode === 500){
            setPayment({ status: 'error'})
            setErrorMessage(response.message)
            return
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/',
                payment_method_data: {
                    billing_details: {
                        name: fullName,
                    }                    
                },
            }
        })

        if (error) {
            setPayment({status: 'error'})
            setErrorMessage(error.message ?? 'An unknown error orrcurred')
        } else if (paymentIntent){
            setPayment(paymentIntent)
        }
    }

    const handleInputChange = (e) => setFullName(e.currentTarget.value)


    return (
            <form onSubmit={paymentHandler}>
                    <input
                        placeholder="Cardholder name"
                        className="elements-style"
                        type="Text"
                        name="fullName"
                        onChange={handleInputChange}
                        required
                    />
                    <div>
                        <PaymentElement 
                            onChange = {(e) => {
                                setDisabled(e.empty)
                                setErrorMessage(e.error ? e.error.message: "")
                                setPaymentType(e.value.type)
                                }}
                            />
                    </div>                   
                    <button 
                        disabled={processing || disabled || succeeded}
                        className="font-bold p-4" type="submit">
                            Lets Build!
                    </button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
    )
}

export default SubPaymentForm;
