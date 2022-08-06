/** @format */

import React from 'react';
import './style.css';

const Accueil = () => {
	return (
		<div>
			<div className='Pacover'></div>
			<div className='accueilTop'>
				<h1>
					Nous acheminons vos biens professionnels, effets personnels,
					valises diplomatiques par AIR, MER et ROUTE .
				</h1>
				<div className='accueilButton'>
					<h4>EN SAVOIR PLUS</h4>
				</div>
			</div>

			<div className='accueilMid'>
				<h3>BIENVENU À L'AGENCE ....</h3>
				<div className='categories'>
					<div className='accueilItem'>
						<h4>ENTREPRISES</h4>
						<h3>LOGO</h3>
						<p>
							Agence Fret Cargo transporte vos marchandises en toute
							sécurité et transparence, par voie aérienne, terrestre
							et maritime, de la Suisse vers le monde entier et du
							monde entier vers la Suisse.
						</p>
					</div>
					<div className='accueilItem'>
						<h4>PARTICULIERS</h4>
						<h3>LOGO</h3>
						<p>
							L'Agence Fret Cargo vous accompagne vers le prochain
							chapitre de votre vie, en Suisse et dans le monde
							entier. L'Agence Fret Cargo est une entreprise familiale
							dotée d'un vaste réseau international et d'un
							savoir-faire suisse reconnu.
						</p>
					</div>
					<div className='accueilItem'>
						<h4>DIPLOMATES</h4>
						<h3>LOGO</h3>
						<p>
							L'Agence Fret Cargo, à l'image de la Genève
							internationale où elle est établie, cultive un sentiment
							de transparence et de discrétion pour le corps
							diplomatique international lorsqu'il doit déménager et
							pour le transport des valises diplomatiques.
						</p>
					</div>
				</div>
			</div>

			<div className='accueilBottom'>
				<h4>
					{' '}
					Nos spécialistes sont à la pointe de l’ingénierie logistique
					et sont aptes à acheminer vos marchandises et effets
					personnels en toute transparence, fiabilité et sécurité .
				</h4>
			</div>
		</div>
	);
};

export default Accueil;
