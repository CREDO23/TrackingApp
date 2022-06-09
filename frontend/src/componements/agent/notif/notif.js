/** @format */

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
	const mobiles = ['Mobile1', 'MOBILE 2', 'MOBILE 3', 'MOBILE 4'];

	const docking = async (user, mobile) => {
		console.log(mobile);
		await axios({
			method: 'post',
			withCredentials: true,
			url: `${process.env.REACT_APP_API_URL}api/notification/planeDocking/${user}`,
			data: { mobile },
		}).then((res) => console.log(res));
	};

	const takeOff = async (user, mobile) => {
		await axios({
			method: 'post',
			withCredentials: true,
			url: `${process.env.REACT_APP_API_URL}api/notification/planeTakeOff/${user}`,
			data: { mobile },
		});
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
				{mobiles &&
					mobiles.map((mobile) => {
						return (
							<div key={mobile}>
								<h3>{mobile}</h3>
								<div>
									<div
										onClick={(e) => {
											takeOff(user, `${mobile}`);
										}}>
										<FontAwesomeIcon
											icon={faPlaneDeparture}
											size='4x'
										/>
									</div>
									<div
										onClick={(e) => {
											docking(user, `${mobile}`);
										}}>
										<FontAwesomeIcon
											icon={faPlaneArrival}
											size='4x'
										/>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Notif;
