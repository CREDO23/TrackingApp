/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';
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
			

			<ul className='mid'>
				<li>
					<a href='#'><FaWhatsapp/></a>
				</li>
				<li>
					<a href='#A PROPOS'><FaFacebook/></a>
				</li>
				<li>
					<a href='#SERVICE'><FaMailBulk/></a>
				</li>
				<li>
					<a href='#PROJET'><FaLinkedin/></a>
				</li>
				
			</ul>
			
		</div>
	);
};

export default Navbar;
