/** @format */

import React from 'react';
import './style.css';
import Tracker from '../tracker/tracker';
import Navbar from '../navbar/Navbar';


const Accueil = () => {
	return (
		<div className='accueiltout'>
			<div>
			<Navbar></Navbar>
			</div>
			<div className='track'>
				<Tracker></Tracker>
			</div>
			
			
			<div className='accueilTop'>
				<h1>Let Us Move You With <br></br>Honesty And Greatness.</h1>
				<p className='one'>
					Nous acheminons vos biens professionnels,<br></br> effets personnels,
					valises diplomatiques par <br></br>AIR, MER et ROUTE .
				</p>
				<div className='accueilButton'>
					<h4>EN SAVOIR PLUS</h4>
				</div>
				
			</div>
			
            <div className='chemin1'>
				<div className='chemin'>
					<img src='images/voitur1.jpg' alt='photo' className='pic'/>
					<h3>fret routier</h3>
					<p>vous etes le bienvenue chex nous</p>
				</div>
				<div className='chemin'>
				<img src='images/avion2.jpg' alt='photo' className='pic'/>
					<h3>fret aerien</h3>
					<p>vous etes le bienvenue chex nous</p>
				</div>
				<div className='chemin'>
				<img src='images/train1.jpg' alt='photo' className='pic'/>
					<h3>fret feroviere</h3>
					<p>vous etes le bienvenue chex nous</p>
				</div>
				<div className='chemin'>
				<img src='images/navire2.jpg' alt='photo' className='pic'/>
					<h3>fret maritime</h3>
					<p>vous etes le bienvenue chex nous</p>
				</div>
			</div>
			
	   </div>
	);
};

export default Accueil;
