/** @format */

import { GET_SHIPPINGS, NEW_EXP } from '../actions/action';

const initState = [];

export default function shippingReducer(state = initState, action) {
	switch (action.type) {
		case GET_SHIPPINGS:
			return action.payload;

		case NEW_EXP:
			return state.push(action.payload);

		default:
			return state;
	}
}
