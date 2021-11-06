const Category = require('../models/category-model');
const Product = require('../models/product-model');
const Tag = require('../models/tag-model');

let productController = {
	getProducts: async (req, res) => {
		try {
			let _id = req.params._id;
			Category.findOne({ _id })
				.populate({ path: 'PRODUCTS', populate: { path: 'TAGS' } })
				.populate({ path: 'PRODUCTS', populate: { path: 'CATEGORIES' } })
				.populate('SUB_CATEGORIES')
				.exec((err, category) => {
					if (err)
						return res.send({
							status: 400,
							data: null,
							message: 'Argumento no válido o Id no válido.',
						});
					if (!category)
						return res.send({
							status: 202,
							data: null,
							message: 'No existe categoria.',
						});
					return res.send({
						status: 200,
						data: category,
						message: 'Lista de productos, obtenido correctamente.',
					});
				});
		} catch (error) {
			return res.send({
				status: 400,
				data: null,
				message: 'Argumento no válido.',
			});
		}
	},
};

module.exports = productController;
