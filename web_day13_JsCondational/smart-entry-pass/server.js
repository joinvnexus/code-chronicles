// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SSLCommerzPayment = require("sslcommerz-lts");

const app = express();
const store_id = "your_test_store_id";
const store_passwd = "your_test_store_password";
const is_live = false; // true for production

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/pay", async (req, res) => {
  const { amount, customer_name, customer_email } = req.body;

  const data = {
    total_amount: amount,
    currency: "BDT",
    tran_id: "tran_" + Date.now(),
    success_url: "http://localhost:3000/success.html",
    fail_url: "http://localhost:3000/fail.html",
    cancel_url: "http://localhost:3000/cancel.html",
    ipn_url: "http://localhost:3000/ipn",
    shipping_method: "NO",
    product_name: "Age Based Ticket",
    product_category: "General",
    product_profile: "general",
    cus_name: customer_name,
    cus_email: customer_email,
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
    cus_phone: "01700000000",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.json({ url: GatewayPageURL });
  });
});

app.listen(3000, () => console.log("SSLCommerz server running on port 3000"));
