/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	faHome,
	faClockRotateLeft,
	faMapLocationDot,
	faUser,
	faCirclePlus,
	faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useSelector } from 'react-redux';

const Sidemenu = () => {
	const user = useSelector((state) => state.userReducer);

	return (
		<div className='sidemenuA'>
			<div className='topA'>
				<div className='imgProfile'>
					<FontAwesomeIcon size='6x' icon={faUser} />
				</div>
				<h5>{user.userName}</h5>
				<h5>{user.eMail}</h5>
			</div>
			<div className='bottomA'>
				<NavLink exact to='/agent/dashboard'>
					<div className='menu'>
						<h4>Dashboard</h4>
						<FontAwesomeIcon icon={faHome} />
					</div>
				</NavLink>
				<NavLink exact to='/agent/newExp'>
					<div className='menu'>
						<h4>Nouvelle EXP</h4>
						<FontAwesomeIcon icon={faCirclePlus} />
					</div>
				</NavLink>
				<NavLink exact to='/agent/aviser'>
					<div className='menu'>
						<h4>Aviser</h4>
						<FontAwesomeIcon icon={faMessage} />
					</div>
				</NavLink>
				<NavLink exact to='/agent/historique'>
					<div className='menu'>
						<h4>Historique</h4>
						<FontAwesomeIcon icon={faClockRotateLeft} />
					</div>
				</NavLink>
				<NavLink exact to='/agent/tracker'>
					<div className='menu'>
						<h4>Tracker</h4>
						<FontAwesomeIcon icon={faMapLocationDot} />
					</div>
				</NavLink>
				<NavLink exact to='/agent/profil'>
					<div className='menu'>
						<h4>Profil</h4>
						<FontAwesomeIcon icon={faUser} />
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidemenu;
