/** @format */

import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidemenu from './componements/agent/sidemenu/sideMenu';
import Routes from './componements/Routes';
import { userContext } from './componements/context/context';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser, getShippings } from './redux/actions/action';

const App = () => {
	const [user, setUser] = useState('');
	const dispacth = useDispatch();

	useEffect(() => {
		const fetchUser = async () => {
			await axios({
				method: 'get',
				withCredentials: true,
				url: `${process.env.REACT_APP_API_URL}jwtUser`,
			}).then((res) => {
				if (res.data === 'No token') {
					console.log('no token');
				} else {
					setUser(res.data);
				}
			});
		};

		fetchUser();
		if (user) dispacth(getUser(user));
		dispacth(getShippings());
	}, [user, dispacth]);

	return (
		<userContext.Provider value={user}>
			<BrowserRouter>
				<>
					<Routes></Routes>
				</>
			</BrowserRouter>
		</userContext.Provider>
	);
};

export default App;
