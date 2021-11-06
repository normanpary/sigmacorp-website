import { all, fork } from 'redux-saga/effects';
import category from './category';
import product from './product';

export default function* rootSaga() {
	yield all([fork(category), fork(product)]);
}
