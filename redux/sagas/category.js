import { put, call, takeLatest } from 'redux-saga/effects';
import Api from '../api';

import {
	CATEGORIES_GET_ALL_ERROR,
	CATEGORIES_GET_ALL_START,
	CATEGORIES_GET_ALL_SUCCESS,
	CATEGORIES_GET_ERROR,
	CATEGORIES_GET_START,
	CATEGORIES_GET_SUCCESS,
	CATEGORIES_SUB_GET_ERROR,
	CATEGORIES_SUB_GET_START,
	CATEGORIES_SUB_GET_SUCCESS,
	CATEGORY_SAVE_ERROR,
	CATEGORY_SAVE_START,
	CATEGORY_SAVE_SUCCESS,
	CATEGORY_UPDATE_ERROR,
	CATEGORY_UPDATE_START,
	CATEGORY_UPDATE_SUCCESS,
} from '../constants/category';

//obtiene categorias parent
function* getCategories() {
	try {
		const result = yield call(Api.getCategories);
		yield put({ type: CATEGORIES_GET_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORIES_GET_ERROR });
	}
}

//obtiene todas categorias
function* getCategoriesAll() {
	try {
		const result = yield call(Api.getCategoriesAll);
		yield put({ type: CATEGORIES_GET_ALL_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORIES_GET_ALL_ERROR });
	}
}

//obtiene todas categorias y subcategorias
function* getCategoriesSubcategories() {
	try {
		const result = yield call(Api.getCategoriesSubcategories);
		yield put({ type: CATEGORIES_SUB_GET_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORIES_SUB_GET_ERROR });
	}
}

//guarda una categoria
function* saveCategory(payload) {
	try {
		const result = yield call(Api.saveCategory, payload.body);
		yield call(getCategoriesSubcategories);
		yield put({ type: CATEGORY_SAVE_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORY_SAVE_ERROR });
	}
}

//guarda una categoria
function* updateCategory(payload) {
	try {
		const result = yield call(Api.updateCategory, payload.body);
		yield call(getCategoriesSubcategories);
		yield put({ type: CATEGORY_UPDATE_SUCCESS, result });
	} catch (error) {
		yield put({ type: CATEGORY_UPDATE_ERROR });
	}
}

export default function* category() {
	yield takeLatest(CATEGORIES_GET_START, getCategories);
	yield takeLatest(CATEGORIES_GET_ALL_START, getCategoriesAll);
	yield takeLatest(CATEGORIES_SUB_GET_START, getCategoriesSubcategories);
	yield takeLatest(CATEGORY_SAVE_START, saveCategory);
	yield takeLatest(CATEGORY_UPDATE_START, updateCategory);
}
