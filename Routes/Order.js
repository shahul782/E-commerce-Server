const express = require ('express');
const { CreateOrder } = require('../Controllers/OrderController');
const router = express.Router();

router.route('/order').post(CreateOrder)

module.exports= router;