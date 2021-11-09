import { put, call, takeLatest } from 'redux-saga/effects'
import Api from '../api'

import { PRODUCTS_GET_ERROR, PRODUCTS_GET_START, PRODUCTS_GET_SUCCESS } from '../constants/product'

function* getProducts(payload) {
  try {
    const result = yield call(Api.getProducts, payload._id)
    yield put({
      type: PRODUCTS_GET_SUCCESS,
      result: result,
    })
  } catch (error) {
    yield put({ type: PRODUCTS_GET_ERROR })
    console.log(error)
  }
}

export default function* product() {
  yield takeLatest(PRODUCTS_GET_START, getProducts)
}
