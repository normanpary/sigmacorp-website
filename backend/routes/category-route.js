const CategoryController = require('../controllers/category-controller')
const express = require('express')
const router = express.Router()

router.get('/categories/:lang', CategoryController.getCategories)
router.get('/categories-all', CategoryController.getCategoriesAll)
router.get('/categories-subcategories', CategoryController.getCategoriesSubcategories)
router.post('/save-category', CategoryController.saveCategory)
router.put('/update-category/:_id', CategoryController.updateCategory)

module.exports = router
