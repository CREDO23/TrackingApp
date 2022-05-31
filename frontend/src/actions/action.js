/** @format */

import axios from 'axios';
export const GET_USER = 'GET_USER';
export const NEW_EXP = 'NEW_EXP';
export const NOTIF_DOCKING = 'NOTIF_DOCKING';
export const NOTIF_TAKEOFF = 'NOTIF_TAKEOFF';
export const TRACKER = 'TRACKER';
export const GET_SHIPPINGS = 'GET_SHIPPINGS';

export const getUser = (user) => {
	return async (dispatch) => {
		await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/officerInfo/${user}`,
			withCredentials: true,
		})
			.then((res) => {
				if (res != null) {
					dispatch({ type: GET_USER, payload: res.data });
				} else {
					axios({
						method: 'get',
						url: `${process.env.REACT_APP_API_URL}/api/customerInfo/${user}`,
						withCredentials: true,
					})
						.then((res) =>
							dispatch({ type: GET_USER, payload: res.data }),
						)
						.catch((err) => console.log(err));
				}
			})
			.catch((err) => console.log(err));
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
	shippingCity,
	destinationCity,
	author,
	packageType,
) => {
	return async (dispatch) => {
		const res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/officerInfo/${user}`,
			withCredentials: true,
			data: {
				sender,
				recipient,
				mobile,
				shippingCity,
				destinationCity,
				author,
				packageType,
			},
		});

		return dispatch({ type: NEW_EXP, payload: res.data.shipping });
	};
};

export const docking = (user, mobile) => {
	return async (dispatch) => {
		const res = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/notification/planeDocking/${user}`,
			withCredentials: true,
			data: { mobile },
		});

		return dispatch({ type: NOTIF_DOCKING, payload: res.data });
	};
};

export const takeoff = (user, mobile) => {
	return async (dispatch) => {
		await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/notification/planeTakeOff/${user}`,
			withCredentials: true,
			data: { mobile },
		});

		return dispatch({ type: NOTIF_TAKEOFF });
	};
};

export const tracker = (key) => {
	return async (dispatch) => {
		const res = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_API_URL}api/customer/track/${key}`,
			withCredentials: true,
		});

		return dispatch({ type: TRACKER, payload: res.data });
	};
};
