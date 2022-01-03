import { combineReducers } from 'redux';

import category from './category';
import product from './product';
const todoApp = combineReducers({
	category,
	product,
});

export default todoApp;
