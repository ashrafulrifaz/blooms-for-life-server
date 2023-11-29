require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const paymentIntent = async (req, res) => {
    try{
        const {amount} = req.body
        const paymentAmount = parseInt(amount * 100)
        console.log(paymentAmount);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: paymentAmount,
            currency: 'usd',
            payment_method_types: ['card']
        })

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = paymentIntent