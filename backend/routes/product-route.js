const ProductController = require('../controllers/product-controller')
const express = require('express')
const router = express.Router()

router.get('/products/:_id', ProductController.getProducts)
router.get('/get-product/:_id', ProductController.getProduct)
router.get('/save-product/:_id', ProductController.saveProduct)

module.exports = router
