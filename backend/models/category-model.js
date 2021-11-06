const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	NAME: {
		type: String,
		trim: true,
		required: true,
	},
	URL_IMG: {
		type: String,
		trim: true,
		required: true,
	},
	URL_ICON: {
		type: String,
		trim: true,
		required: true,
	},
	IS_PARENT: {
		type: Boolean,
		required: true,
	},
	PRODUCTS: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	SUB_CATEGORIES: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Category',
		},
	],
});
module.exports = mongoose.model('Category', CategorySchema);
