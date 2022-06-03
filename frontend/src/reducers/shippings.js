/** @format */

import { GET_SHIPPINGS } from '../actions/action';

const initState = [];

export default function shippingReducer(state = initState, action) {
	switch (action.type) {
		case GET_SHIPPINGS:
			return action.payload;

		default:
			return state;
	}
}
