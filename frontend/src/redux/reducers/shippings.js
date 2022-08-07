/** @format */

import { GET_SHIPPINGS } from '../actions/action';
import { NEW_EXP } from '../actions/action';
import { initialState } from '../initialState';

export default function shippingReducer(
	state = initialState.shippings,
	action,
) {
	let newState = state;
	switch (action.type) {
		case GET_SHIPPINGS:
			newState = action.payload;
			return newState;
		case NEW_EXP:
			newState.push(action.payload);
			return newState;
		default:
			return newState;
	}
}
