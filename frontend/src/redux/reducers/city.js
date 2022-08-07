/** @format */

import { ADD_CITY, DELETE_CITY } from '../actions/admin.action';

const init = {};

export default function cityReducer(state = init, action) {
	switch (action.type) {
		case ADD_CITY:
			return {
				...state,
				...action.payload,
			};

		case DELETE_CITY:
			return state.filter((city) => city !== action.payload);

		default:
			return state;
	}
}
