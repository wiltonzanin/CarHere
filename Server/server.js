const express = require("express");
const app = express();
var cors = require('cors')
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51KZFMuI61EuHiQMEU7S8MPiJztOM0KANNiE1Cd7958RTPaTT1VQkHafGDqcetMOrXOj9lNr463oohXfOPXMpVnre00QkUSFqiZ');

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
  res.sendFile('public/checkout.html', {root: __dirname })
});

app.post("/create-payment-intent", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  const { items } = req.body;
  
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 550,
    currency: "BRL",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));