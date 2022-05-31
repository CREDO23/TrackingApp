/** @format */

import React, { useEffect } from 'react';
import Dashboard from '../componements/agent/dashboard/Dashboard';
import Sidemenu from '../componements/agent/sidemenu/Sidemenu';
import { userContext } from '../componements/context/context';
import { useContext } from 'react';

const Pagent = () => {
	const user = useContext(userContext);
	useEffect(() => {
		if (user) {
			console.log(`page agent context ${user}`);
		}
	}, [user]);

	return (
		<>
			<Dashboard></Dashboard>
			<Sidemenu></Sidemenu>
		</>
	);
};

export default Pagent;
