/** @format */

import axios from 'axios';
export const ADD_MOBILE = 'ADD_MOBILE';
export const DELETE_MOBILE = 'DELETE_MOBILE';
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export function addMobile(mobile, info) {
	return async (dispatch) => {
		const res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/addMobile`,
			withCredentials: true,
			data: { mobile, info },
		});

		dispatch({ type: ADD_MOBILE, payload: res.mobile });
	};
}

export function deleteMobile(mobile) {
	return async (dispatch) => {
		const res = await axios({
			method: 'delete',
			url: `${process.env.REACT_APP_API_URL}api/deleteMobile`,
			withCredentials: true,
			data: { mobile },
		});

		dispatch({ type: DELETE_MOBILE, payload: res.data });
	};
}
export function addCity(city, info) {
	return async (dispatch) => {
		const res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/addCity`,
			withCredentials: true,
			data: { city, info },
		});

		dispatch({ type: ADD_CITY, payload: res.ville });
	};
}

export function deleteCity(city) {
	return async (dispatch) => {
		const res = await axios({
			method: 'delete',
			url: `${process.env.REACT_APP_API_URL}api/deleteCity`,
			withCredentials: true,
			data: { city },
		});

		dispatch({ type: DELETE_CITY, payload: res.data });
	};
}
