import {
	CATEGORIES_GET_ALL_ERROR,
	CATEGORIES_GET_ALL_SUCCESS,
	CATEGORIES_GET_ERROR,
	CATEGORIES_GET_SUCCESS,
	CATEGORIES_SUB_GET_ERROR,
	CATEGORIES_SUB_GET_SUCCESS,
	CATEGORY_SAVE_ERROR,
	CATEGORY_SAVE_SUCCESS,
	CATEGORY_UPDATE_ERROR,
	CATEGORY_UPDATE_SUCCESS,
} from '../constants/category';

const error_server = {
	status: 500,
	data: null,
	message: 'Error al intentar acceder al servidor.',
};
const ini = {
	categories_parent: error_server,
	categories_all: error_server,
	categories_subcategories: [],
};

const business = (state = ini, action) => {
	switch (action.type) {
		//load categories parent
		case CATEGORIES_GET_SUCCESS:
			return {
				...state,
				categories_parent: action.result,
			};
		case CATEGORIES_GET_ERROR:
			return { ...state, categories_parent: error_server };
		//load categories all
		case CATEGORIES_GET_ALL_SUCCESS:
			return {
				...state,
				categories_all: action.result,
			};
		case CATEGORIES_GET_ALL_ERROR:
			return { ...state, categories_all: error_server };
		//load categories and subcategories
		case CATEGORIES_SUB_GET_SUCCESS:
			let list = [];
			console.log(action.result.data);
			const generateSelect = (categories_, nivel) => {
				categories_.forEach((category) => {
					category.NIVEL = nivel;
					list.push(category);
					if (category.SUB_CATEGORIES.length > 0) {
						generateSelect(category.SUB_CATEGORIES, nivel + '-');
					}
				});
			};
			generateSelect(action.result.data, '');

			return {
				...state,
				categories_subcategories: list,
			};

		case CATEGORIES_SUB_GET_ERROR:
			return { ...state, categories_subcategories: [] };

		//guarda una categoria
		case CATEGORY_SAVE_SUCCESS:
			console.log('save success');
			return state;
		case CATEGORY_SAVE_ERROR:
			console.log('save error');
			return state;
		//actualizar categoria
		case CATEGORY_UPDATE_SUCCESS:
			console.log('update success');
			return state;
		case CATEGORY_UPDATE_ERROR:
			console.log('update error');
			return state;
		default:
			return state;
	}
};

export default business;
