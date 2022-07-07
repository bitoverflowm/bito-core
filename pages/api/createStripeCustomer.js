import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
})

export default async function createStripeCustomer(req, res){
    try{
        if(req.method === 'POST') {
            const customer = await stripe.customers.create({
                email: req.body.email,
            });
            
            //replace this with db addition and magic authentication
            //currently using cookie to simulate session
            //res.cookie('customer', customer.id, {maxAge: 900000, httpOnly: true});
            res.status(200).send({ customer: customer })
        }
    }
    catch(err){
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw err
    }
}
