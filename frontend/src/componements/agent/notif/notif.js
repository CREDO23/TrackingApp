/** @format */

import React from 'react';
import {
	faRightFromBracket,
	faPlaneDeparture,
	faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './style.css';
import { useSelector } from 'react-redux';

const Notif = () => {
	const user = useSelector((state) => state.userReducer).userName;
	console.log(user);
	// const [mobile1, mobile2, mobile3, mobile4] = [
	// 	'CAA',
	// 	'CONGO AIRWAYS',
	// 	'CARGO',
	// 	'RWANDAIR',
	// ];

	const docking = async (user) => {
		await axios({
			method: 'get',
			withCredentials: true,
			url: `${process.env.REACT_APP_API_URL}api/notification/planeDocking/${user}`,
			data: { mobile: 'aaa' },
		}).then((res) => console.log(res));
	};

	const takeOff = (user, mobile) => {
		// await axios({
		// 	method: 'get',
		// 	withCredentials: true,
		// 	url: `${process.env.REACT_APP_API_URL}api/notification/planeTakeOff/${user}`,
		// 	data: { mobile },
		// });
		console.log('takeOff');
	};

	return (
		<div className='notifcover'>
			<div className='notifTop'>
				<span className='title'>
					<h3>AVISER</h3>
				</span>
				<span className='deconnexion'>
					<h4>Déconnexion</h4>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</span>
			</div>
			<div className='notifContenair'>
				<div id='MOBILE1'>
					<h3>mobile1</h3>
					<div>
						<div
							onClick={(e) => {
								takeOff(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneDeparture} size='4x' />
						</div>
						<div
							onClick={(e) => {
								docking(user);
							}}>
							<FontAwesomeIcon icon={faPlaneArrival} size='4x' />
						</div>
					</div>
				</div>
				<div className='MOBILE2'>
					<h3>MOBILE 2</h3>
					<div>
						<div
							onClick={(e) => {
								takeOff(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneDeparture} size='4x' />
						</div>
						<div
							onClick={(e) => {
								docking(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneArrival} size='4x' />
						</div>
					</div>
				</div>
				<div id='MOBILE3'>
					<h3>MOBILE 3</h3>
					<div>
						<div
							onClick={(e) => {
								takeOff(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneDeparture} size='4x' />
						</div>
						<div
							onClick={(e) => {
								docking(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneArrival} size='4x' />
						</div>
					</div>
				</div>
				<div id='MOBILE4'>
					<h3>MOBILE 4</h3>
					<div>
						<div
							onClick={(e) => {
								takeOff(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneDeparture} size='4x' />
						</div>
						<div
							onClick={(e) => {
								docking(user, 'CAA');
							}}>
							<FontAwesomeIcon icon={faPlaneArrival} size='4x' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notif;
