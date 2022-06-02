/** @format */

import { GET_USER } from '../actions/action';
const initState = {};

export default function userReducer(state = initState, action) {
	switch (action.type) {
		case GET_USER:
			return action.payload;

		default:
			return state;
	}
}
