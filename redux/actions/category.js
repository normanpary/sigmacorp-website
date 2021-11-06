import {
	CATEGORIES_GET_ALL_START,
	CATEGORIES_GET_START,
	CATEGORIES_SUB_GET_START,
	CATEGORY_SAVE_START,
	CATEGORY_UPDATE_START,
} from '../constants/category';

export const startGetCategories = () => {
	return { type: CATEGORIES_GET_START };
};

export const startGetCategoriesAll = () => {
	return { type: CATEGORIES_GET_ALL_START };
};

export const startGetCategoriesSubcategories = () => {
	return { type: CATEGORIES_SUB_GET_START };
};

export const startSaveCategory = (body) => {
	return { type: CATEGORY_SAVE_START, body };
};

export const startUpdateCategory = (body) => {
	return { type: CATEGORY_UPDATE_START, body };
};
