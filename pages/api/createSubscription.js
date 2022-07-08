import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
})

export default async function createSubscription(req, res){
    try{
        if(req.method === 'POST') {
            const subscription = await stripe.subscriptions.create({
                customer: req.body.customerId,
                items: [{
                    price: req.body.priceId,                
                }],
                payment_behavior: 'default_incomplete',
                expand: ['latest_invoice.payment_intent'],        
            })
            
            res.status(200).send({ subscriptionId: subscription.id,
                clientSecret: subscription.latest_invoice.payment_intent.client_secret,
            })
        }
    }
    catch(err){
        if(err instanceof Error){
            throw new Error(err.message)
            res.status(400).send(error.message)
        }
        throw err        
    }
}
