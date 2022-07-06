Here is a preliminary list of sources throughout the internet via which I was able to create the payment subscription onboarding process; Mostly through Stripe, Next sources itself.

main guide: https://stripe.com/docs/billing/subscriptions/build-subscriptions?ui=elements
general education about subsctiptions: https://stripe.com/docs/billing/subscriptions/overview
fixed price subscription guide although I used the main guide more: https://stripe.com/docs/billing/subscriptions/fixed-price
another guide, but this one seeems simplistic: https://ilango.hashnode.dev/how-to-add-stripe-subscriptions-to-your-nextjs-application 

add utils: api-helpers  https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/api-helpers.ts

example use of fetchPOSTJson from api-helpers: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/donate-with-elements.tsx

add utils: get-stripejs  singleton so that stripe is only instantiated once https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/get-stripejs.ts

create user client: https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/client/react/src/Register.js

create-customer, create-subscription, invoice-preview, cancel-subscription, update-subscription, webhook,  server/API of Next: https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/server/node/server.js

fetchPrices, CreateSubscription and view Prices of subscriptions: https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/client/react/src/Prices.js

handle payment with Elements and payment submission: https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/client/react/src/Subscribe.js

tentative summary of subscription and conclusion to workflow: https://github.com/stripe-samples/subscription-use-cases/blob/master/fixed-price-subscriptions/client/react/src/Account.js


Example of how Elements form is used to quickly setup car payment forms and such: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/components/ElementsForm.tsx 

Stripe webhooks with microcors bnecasue next needs it since its single origin: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/api/webhooks/index.ts
https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/api/webhooks/index.ts
https://dashboard.stripe.com/webhooks


Payment Intents may be necessary, but may not be needed for subscription model: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/api/payment_intents/index.ts



Stripe helpers: format numbers for stripe may be necessary https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/stripe-helpers.ts
