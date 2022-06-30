/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from '../../pages/Pclient';
import Agent from '../../pages/Pagent';
import HistoriqueAgent from '../../pages/PhistoriqueAgent';
import HistoriqueClient from '../../pages/PhistoriqueClient';
import ProfilClient from '../../pages/PprofilClient';
import ProfilAgent from '../../pages/PprofilAgent';
import TrackerAgent from '../../pages/PtrackerAgent';
import TrackerClient from '../../pages/PtrackerClient';
import Aviser from '../../pages/Paviser';
import NewExp from '../../pages/PnewExp';
import Paccueil from '../../pages/Paccueil';
import React from 'react';
import Connexion from '../client/connexion/Connexion';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Paccueil />} />
				<Route path='/connexion' element={<Connexion />} />
				<Route
					path='/client/historique'
					element={<HistoriqueClient />}
				/>
				<Route path='/client/profil' element={<ProfilClient />} />
				<Route path='/client/dashboard' element={<Client />} />
				<Route path='/client/tracker' element={<TrackerClient />} />
				<Route
					path='/agent/historique'
					element={<HistoriqueAgent />}
				/>
				<Route path='/agent/newExp' element={<NewExp />} />
				<Route path='/agent/profil' element={<ProfilAgent />} />
				<Route path='/agent/tracker' element={<TrackerAgent />} />
				<Route path='/agent/aviser' element={<Aviser />} />
				<Route path='/agent/dashboard' element={<Agent />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
