const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQHOUCd4gucDqqnz4sgpPR2EjFsNyqe2Z5cUho5IsusaFlda8gBn0CoWsmvflZUsTRc0Ha7yKCUCFAYWHMA59fq00iUKfyKAW"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received Booom! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// Example End-Point
//http://localhost:5001/rebuild-f71a0/us-central1/api
