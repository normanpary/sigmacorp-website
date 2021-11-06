const CategoryRoutes = require('./routes/category-route');
const ProductRoutes = require('./routes/product-route');

const router = (app) => {
	app.use('/sigmacorp', CategoryRoutes);
	app.use('/sigmacorp', ProductRoutes);
};

module.exports = router;
