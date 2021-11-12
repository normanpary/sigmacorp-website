const ProductController = require('../controllers/product-controller')
const express = require('express')
const router = express.Router()

router.get('/products/:slug/:lang', ProductController.getProducts)
router.get('/get-product/:slug/:lang', ProductController.getProduct)
router.get('/save-product/:_id', ProductController.saveProduct)

module.exports = router
