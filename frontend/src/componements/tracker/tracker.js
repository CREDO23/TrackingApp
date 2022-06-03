/** @format */

import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Tracker = () => {
	return (
		<div className='trackCover'>
			<div className='profilTop'>
				<span className='title'>
					<h3>TRACKER</h3>
				</span>
				<span className='deconnexion'>
					<h4>Déconnexion</h4>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</span>
			</div>
			<form className='profilContenair'>
				<div className='grid '>
					<div className='from it'>
						<input
							type='text'
							placeholder='KEY'
							name='key'
							id='key'
						/>
					</div>

					<div id='submit'>
						<input type='submit' name='' value='SOUMETTRE' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Tracker;
