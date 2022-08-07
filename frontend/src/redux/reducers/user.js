/** @format */

import { GET_USER } from '../actions/action';
import { initialState } from '../initialState';

export default function userReducer(
	state = initialState.users,
	action,
) {
	let newState = { ...state };
	switch (action.type) {
		case GET_USER:
			newState.curentUser = action.payload;
			return newState;

		default:
			return newState;
	}
}
