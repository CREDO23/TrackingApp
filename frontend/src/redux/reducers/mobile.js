/** @format */

import { ADD_MOBILE, DELETE_MOBILE } from '../actions/admin.action';

const init = {};

export default function mobileReducer(state = init, action) {
	switch (action.type) {
		case ADD_MOBILE:
			return {
				...state,
				...action.payload,
			};

		case DELETE_MOBILE:
			return state.filter((city) => city !== action.payload);

		default:
			return state;
	}
}
