import { PRODUCTS_GET_ERROR, PRODUCTS_GET_SUCCESS } from '../constants/product';

const error_server = {
	status: 500,
	data: null,
	message: 'Error al intentar acceder al servidor.',
};

const product = (state = error_server, action) => {
	switch (action.type) {
		case PRODUCTS_GET_SUCCESS:
			return action.result;
		case PRODUCTS_GET_ERROR:
			return error_server;
		default:
			return state;
	}
};

export default product;
