/** @format */

import axios from 'axios';
export const GET_USER = 'GET_USER';
export const GET_SHIPPINGS = 'GET_SHIPPINGS';
export const NEW_EXP = 'NEW_EXP';
export const TRACKER = 'TRACKER';

export const getUser = (user) => {
	return async (dispatch) => {
		var custom;
		var officer;
		await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/customerInfo/${user}`,
			withCredentials: true,
		})
			.then((res) => {
				custom = res.data;
			})
			.catch((err) => console.log(err));
		await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/officerInfo/${user}`,
			withCredentials: true,
		})
			.then((res) => {
				officer = res.data;
			})
			.catch((err) => console.log(err));

		if (custom) dispatch({ type: GET_USER, payload: custom });
		if (officer) dispatch({ type: GET_USER, payload: officer });
	};
};

export const getShippings = () => {
	return async (dispatch) => {
		const res = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/shippings`,
			withCredentials: true,
		});

		return dispatch({ type: GET_SHIPPINGS, payload: res.data });
	};
};

export const newExp = (
	user,
	sender,
	recipient,
	mobile,
	destinationCity,
	packageType,
) => {
	return async (dispatch) => {
		const res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/createShipping/${user}`,
			withCredentials: true,
			data: {
				sender,
				recipient,
				mobile,
				destinationCity,
				packageType,
			},
		});
		return dispatch({ type: NEW_EXP, payload: res.data.shipping });
	};
};
