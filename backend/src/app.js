const express = require('express');
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
// Adicione as credenciais
mercadopago.configure({
  access_token: 'TEST-5478545679359546-071217-c2defb4b6ce26c85472e5c9928ee6557-204596992'
});

// Cria um objeto de preferência
app.get("/", function (req, res) {
	res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3001/feedback",
			"failure": "http://localhost:3001/feedback",
			"pending": "http://localhost:3001/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

module.exports = app;