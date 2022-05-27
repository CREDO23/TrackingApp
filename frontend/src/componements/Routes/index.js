/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardClient from '../../pages/Pclient';
import DashboardAgent from '../../pages/Pagent';
import Paccueil from '../../pages/Paccueil';
// import Navbar from '../navbar/Navbar';
import React from 'react';
import Connexion from '../client/connexion/Connection';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Paccueil />} />
				<Route path='/client' element={<DashboardClient />} />
				<Route path='agent' element={<DashboardAgent />} />
				<Route path='connexion' element={<Connexion />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
