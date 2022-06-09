/** @format */

import { combineReducers } from 'redux';
import userReducer from './user';
import shippingReducer from './shippings';
import cityReducer from './city';
import mobileReducer from './mobile';

export default combineReducers({
	userReducer,
	shippingReducer,
	cityReducer,
	mobileReducer,
});
