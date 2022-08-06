/** @format */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	faHome,
	faClockRotateLeft,
	faMapLocationDot,
	faUser,
	faCirclePlus,
	faMessage,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Sidemenu = () => {
	const menusData = [
		{
			link: '/agent/dashboard',
			iconName: faHome,
			label: 'Dashboard',
		},
		{
			link: '/agent/newExp',
			iconName: faCirclePlus,
			label: 'Nouvelle EXP',
		},
		{
			link: '/agent/aviser',
			iconName: faMessage,
			label: 'Aviser',
		},
		{
			link: '/agent/historique',
			iconName: faClockRotateLeft,
			label: 'Historique',
		},
		{
			link: '/agent/tracker',
			iconName: faMapLocationDot,
			label: 'Tracker',
		},
		{
			link: '/agent/profil',
			iconName: faUser,
			label: 'Profil',
		},
	];
	const [selected, setSelected] = useState(0);
	return (
		<div className='sidemenu-agent'>
			<div className='top'></div>
			<ul>
				{menusData.map((menu, index) => {
					return (
						<li
							key={index}
							onClick={() => setSelected(index)}
							className={selected === index ? 'selected' : ''}>
							<NavLink exact to={menu.link}>
								<FontAwesomeIcon
									className='icon'
									icon={menu.iconName}
								/>
								<p>{menu.label}</p>
							</NavLink>
						</li>
					);
				})}
				<span>
					<NavLink exact to='/agent/profil'>
						<FontAwesomeIcon
							className='icon'
							icon={faArrowRightFromBracket}
						/>
						<p>Deconnexion</p>
					</NavLink>
				</span>
			</ul>
		</div>
	);
};

export default Sidemenu;
