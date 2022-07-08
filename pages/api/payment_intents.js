import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
})

export default async function payment_intent(req, res){
    if(req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
        return
    }
    const {
        amount,
        subscription_id,
        client_secret,
        payment_intent_id,
    } = req.body
    if(payment_intent_id) {
        try{
            const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id)
            if (current_intent){
                const updated_intent = await stripe.paymentIntents.update(
                    payment_intent_id,
                    {
                        amount: amount,
                    }
                )
                res.status(200).json(updated_intent)
                return
            }
        } catch (e) {
            if(err instanceof Error){
                throw new Error(err.message)
            }
            throw err
        }
    }
    try {
        //create PaymenIntent from body params.
        const params = {
            amount: amount,
            currency: 'USD',
            description: process.env.STRIPE_PAYMEN_DESCRIPTION,
            automatic_payment_methods: {
                enabled: true,
            },
        }
        const payment_intent = await stripe.paymentIntents.create(params)

        res.status(200).json(payment_intent)
    } catch(err) {
        const errorMessage = err instanceof Error ? err.message : 'Internal server error'
        res.status(500).json({ statusCode: 500, message: errorMessage })
    }
}