/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*/ import Client from '../../pages/Pclient';
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
import Aviser from '../agent/notif/notif';
import Historique from '../agent/historique/Historique';
import Profile from '../agent/profile/Profile';
import Tracker from '../tracker/Tracker';*/

//importation des pages Admin

import AjoutAgent from '../../Admin/Pages/AjoutAgent/AjoutAgent';
import AjoutMobile from '../../Admin/Pages/AjoutMobile/AjoutMobile';
import AjoutPoste from '../../Admin/Pages/AjoutPoste/AjoutPoste';
import DashAdmin from '../../Admin/Pages/DashAdm/DashAdmin';
import HistoriqueAdmin from '../../Admin/Pages/Historique/HistoriqueAdmin';
import TrackingAdmin from '../../Admin/Pages/Tracking/Tracking';

const index = () => {
	return (
		<Routes>
			{/* <Route path='/' element={<Paccueil />} />
			<Route path='/connexion' element={<Connexion />} />
			<Route
					path='/client/historique'
					element={<HistoriqueClient />}
				/>
				<Route path='/client/profil' element={<ProfilClient />} />
				<Route path='/client/dashboard' element={<Client />} />
				<Route path='/client/tracker' element={<TrackerClient />} /> 
			<Route path='/agent/historique' element={<Historique />} />
			<Route path='/agent/newExp' element={<NouvelExp />} />
			<Route path='/agent/profil' element={<Profile />} />
			<Route path='/agent/tracker' element={<Tracker />} />
			<Route path='/agent/aviser' element={<Aviser />} />
			<Route path='/agent/dashboard' element={<Dashboard />} />*/}


			<Route path="/" element={<DashAdmin />} />
			<Route path="/Admin/AjoutMobil" element={<AjoutMobile />} />
			<Route path="/Admin/AjoutAgent" element={<AjoutAgent />} />
			<Route path="/Admin/AjoutPoste" element={<AjoutPoste />} />
			<Route path="/Admin/Historique" element={<HistoriqueAdmin />} />
			<Route path="/Admin/Tracking" element={<TrackingAdmin />} />
		</Routes>
	);
};

export default index;
