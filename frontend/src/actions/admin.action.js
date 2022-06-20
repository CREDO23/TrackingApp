/** @format */

import axios from 'axios';
export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_OFFICERS = 'GET_OFFICERS';
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

export const getCustomers = () => {
	return async (dispatch) => {
		const res = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/customers`,
			withCredentials: true,
		});

		return dispatch({ type: GET_CUSTOMERS, payload: res.data });
	};
};

export const getOfficers = () => {
	return async (dispatch) => {
		const res = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/officers`,
			withCredentials: true,
		});

		return dispatch({ type: GET_OFFICERS, payload: res.data });
	};
};
