/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import {
	faHome,
	faClockRotateLeft,
	faMapLocationDot,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Sidemenu = () => {
	const user = useSelector((state) => state.userReducer);
	return (
		<>
			<div className='sidemenuC'>
				<div className='topA'>
					<div className='imgProfile'></div>
					<h5>{user.userName}</h5>
					<h5>{user.eMail}</h5>
				</div>
				<div className='bottomA'>
					<NavLink exact to='/client/dashboard'>
						<div className='item'>
							<h4>Dashboard</h4>
							<FontAwesomeIcon icon={faHome} />
						</div>
					</NavLink>
					<NavLink exact to='/client/historique'>
						<div className='item'>
							<h4>Historique</h4>
							<FontAwesomeIcon icon={faClockRotateLeft} />
						</div>
					</NavLink>
					<NavLink exact to='/client/tracker'>
						<div className='item'>
							<h4>Tracker</h4>
							<FontAwesomeIcon icon={faMapLocationDot} />
						</div>
					</NavLink>
					<NavLink exact to='/client/profil'>
						<div className='item'>
							<h4>Profil</h4>
							<FontAwesomeIcon icon={faUser} />
						</div>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Sidemenu;
