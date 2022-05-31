/** @format */

import React from 'react';
import { useContext, useEffect } from 'react';
import { userContext } from '../componements/context/context';
import Dashboard from '../componements/client/dashboard/Dashboard';
import Sidemenu from '../componements/client/sidemenu/Sidemenu';

const Pclient = () => {
	const user = useContext(userContext);
	useEffect(() => {
		if (user) {
			console.log(`page client context ${user}`);
		}
	}, [user]);
	return (
		<>
			<Dashboard></Dashboard>
			<Sidemenu></Sidemenu>
		</>
	);
};

export default Pclient;
