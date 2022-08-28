/** @format */

import { Route, Routes } from 'react-router-dom';
// import Client from '../../pages/Pclient';
// import Agent from '../../pages/Pagent';
// import HistoriqueAgent from '../../pages/PhistoriqueAgent';
// import HistoriqueClient from '../../pages/PhistoriqueClient';
// import ProfilClient from '../../pages/PprofilClient';
// import ProfilAgent from '../../pages/PprofilAgent';
// import TrackerAgent from '../../pages/PtrackerAgent';
// import TrackerClient from '../../pages/PtrackerClient';
// import Aviser from '../../pages/Paviser';
// import NewExp from '../../pages/PnewExp';
import Paccueil from '../../pages/Paccueil';
import React from 'react';
import Connexion from '../client/connexion/Connexion';
import Dashboard from '../agent/dashboard/dashboard';
import NouvelExp from '../agent/newExp/newExp';
import Aviser from '../agent/notif/Notif';
import Historique from '../agent/historique/Historique';
import Profile from '../agent/profile/Profile';
import Tracker from '../tracker/Tracker';
import Map from '../map/Map';

const index = () => {
	return (
		<Routes>
			<Route path='/' element={<Paccueil />} />
			<Route path='/connexion' element={<Connexion />} />
			{/* <Route
					path='/client/historique'
					element={<HistoriqueClient />}
				/>
				<Route path='/client/profil' element={<ProfilClient />} />
				<Route path='/client/dashboard' element={<Client />} />
				<Route path='/client/tracker' element={<TrackerClient />} /> */}
			<Route path='/agent/historique' element={<Historique />} />
			<Route path='/tracker' element={<Map />} />
			<Route path='/agent/newExp' element={<NouvelExp />} />
			<Route path='/agent/profil' element={<Profile />} />
			<Route path='/agent/tracker' element={<Tracker />} />
			<Route path='/agent/aviser' element={<Aviser />} />
			<Route path='/agent/dashboard' element={<Dashboard />} />
		</Routes>
	);
};

export default index;
