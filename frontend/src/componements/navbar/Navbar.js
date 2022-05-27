/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
	return (
		<div className='cover'>
			<div className='logo'>LOGO</div>
			<ul className='middle'>
				<li>
					<a href='#ACCUEIL'>ACCUEIL</a>
				</li>
				<li>
					<a href='#À PROPOS'>À PROPOS</a>
				</li>
				<li>
					<a href='#COMMENT ÇA MARCHE'>COMMENT ÇA MARCHE ?</a>
				</li>
				<li>
					<NavLink exact to='/connexion'>
						CONNEXION
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
