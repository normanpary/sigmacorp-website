const ProductController = require('../controllers/product-controller');
const express = require('express');
const router = express.Router();

router.get('/products/:_id', ProductController.getProducts);

module.exports = router;
