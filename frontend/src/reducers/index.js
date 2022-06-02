/** @format */

import { combineReducers } from 'redux';
import userReducer from './user';
import shippingReducer from './shippings';

export default combineReducers({
	userReducer,
	shippingReducer,
});
