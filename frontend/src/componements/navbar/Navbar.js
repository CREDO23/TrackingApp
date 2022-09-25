/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
	return (
		<div className='cover'>
			<div className='logo'>UJUZI  <span id='trac'> TRACKING</span> </div>
			<ul className='middle'>
				<li>
					<a href='/'> Accueil</a>
				</li>
				<li>
					<a href='/PROPOS'> About</a>
				</li>
				<li>
					<a href='/SERVICE'> Services</a>
				</li>
				
				<li>
					<a href='/CONTACT'> Contact</a>
				</li>
				<li>
					<NavLink exact to='/connexion'>
						 Connexion
					</NavLink>
				</li>
			</ul>
			

			
			
		</div>
	);
};

export default Navbar;
