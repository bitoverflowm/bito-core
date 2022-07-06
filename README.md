

Author: Rikesh Thapa
Project name: Bito

# Setup instructions
npm -i

> Authentication:
Bito uses Magic with passwordless SMS login for auth
In order to get setup on local machine create an .env.local file
Log onto the Magic dashboard and fill out .env.local with the following values:

```
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=
MAGIC_SECRET_KEY=
TOKEN_SECRET="this-is-a-secret-value-with-at-least-32-characters"
```

> Payments:
We are utilizing Stripe for payment processing. Bito primarily uses subscription model payments so that is what the implementation currently covers. For Stripe implementation these are the crucial components, steps and elements involved
- Stripe Elements ? 
- frontend: pages/signup.js
- backend: pages/api/payments/
    - crateuser (on Stripe)
    - createsubscruption
    - cancelsubscription
- webhook handling for post-payment events
- helpers:
    - utils/api-helpers.js
    - utils/stripe-helpers.js

- config in .env.local needs to be transferred to Vercel/ deployment vehicle:
```
# Stripe keys
# https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_12345
STRIPE_SECRET_KEY=sk_12345
STRIPE_PAYMENT_DESCRIPTION='Software development services'
# https://stripe.com/docs/webhooks/signatures
STRIPE_WEBHOOK_SECRET=whsec_1234
```
- Micro: since Next is same origin, we need Micro to handle the requests we sent to Stripe

# Stack planned: 
> CMS
> authentication: firebase because it looks easy af
> db: mongo db > I do not fully know the structure of my db yet, so mongo allows for the flexibility of my light weight MVP
> prisma: to connect DB to react/ next
> Next.js
> hosting: probabaly vercel
> art: blender/ spline depending on who has better tutorial
> API: within Next?
> Stripe for payment and subsctription

# Tasks:
> research stripe checkout process to determine how integration will work
    > questions to answer:  
        > do we authenticate after stripe payment or before? In the UI sense we do it all at once, but in a code sense what is the sequence of events? Process flow will be mapped out in figma
        > Can we capture authentication data from Stripe payment form fill out? We need to otherwise the interface will be wack. Either way, user should only be required to enter their info in once. 
> maybe do a quick backend mockup integration of Stripe
> plan out database requirements don't forget to incluide: 
    > payment
    > passwordless authentication
    > user info
    > tasks
    > chat
> Mongo + prisma integration
> Might have to redo the creation of this project with Prisma integration
> Autnentication setup: passwordless!
> Auythenuication + Stripe + Database 
> take figma template and code it up
> User dashboard: mockup? should it be a chat app? What do we have time for?> 
> God mode: to manage subscriptions; although we can do a lot of the management through the stripe dsahboard


