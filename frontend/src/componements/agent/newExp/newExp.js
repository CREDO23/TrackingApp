/** @format */

import React, { useState } from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { newExp } from '../../../actions/action';

const NewExp = () => {
	const [type, setType] = useState('');
	const [expediteur, setExpediteur] = useState('');
	const [destinataire, setDestinataire] = useState('');
	const [villeDest, setVilleDest] = useState('');
	const [mobile, setMobile] = useState('');

	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer).userName;

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(
			newExp(user, expediteur, destinataire, mobile, villeDest, type),
		);
		// window.location.reload();
	};
	return (
		<div className='expcover'>
			<div className='profilTop'>
				<span className='title'>
					<h3>Nouvelle EXP</h3>
				</span>
				<span className='deconnexion'>
					<h4>Déconnexion</h4>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</span>
			</div>
			<div className='profilContenair'>
				<form action='' onSubmit={handleSubmit} className='grid'>
					<div className='exp it'>
						<label htmlFor='exp'>UserName de l'éxpediteur :</label>
						<input
							type='text'
							name=''
							id='exp'
							value={expediteur}
							onChange={(e) => setExpediteur(e.target.value)}
						/>
					</div>
					<div className='dest it'>
						<label htmlFor='dest'>UserName du destinataire :</label>
						<input
							type='text'
							id='dest'
							value={destinataire}
							onChange={(e) => setDestinataire(e.target.value)}
						/>
					</div>
					<div className='villeDest it '>
						<label htmlFor='villeDest'>Ville de livraison :</label>
						<input
							type='text'
							id='villeDest'
							value={villeDest}
							onChange={(e) => setVilleDest(e.target.value)}
						/>
					</div>
					<div className='mobile it'>
						<label htmlFor='mobile'>Mobile :</label>
						<input
							type='text'
							id='mobile'
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
						/>
					</div>
					<div className='type it'>
						<label htmlFor='type'>Type du colis :</label>
						<input
							type='text'
							id='type'
							value={type}
							onChange={(e) => setType(e.target.value)}
						/>
					</div>
					<div id='submitEXP'>
						<input
							type='submit'
							name=''
							value='SOUMETTRE'
							id='submit'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewExp;
