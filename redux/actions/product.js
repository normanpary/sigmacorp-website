const { PRODUCTS_GET_START } = require('../constants/product');

export const startGetProducts = (_id) => {
	return { type: PRODUCTS_GET_START, _id };
};
