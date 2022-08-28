/** @format */

import React from 'react';
import SidemenuAg from '../componements/agent/sidemenu/Sidemenu';
import SidemenuCl from '../componements/client/sidemenu/Sidemenu';
import Map from '../componements/map/Map';

const Pmap = () => {
	return (
		<>
			<Map />
			<SidemenuAg />
		</>
	);
};

export default Pmap;
