/** @format */

import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './style.css';

const Historique = () => {
	const shippings = useSelector((state) => state.shippingReducer);
	const user = useSelector((state) => state.userReducer);

	const expeditions = shippings.filter(
		(ship) => ship.sender === user.userName,
	);

	const livraisons = shippings.filter(
		(ship) => ship.recipient === user.userName,
	);

	const [exp, setExp] = useState(true);
	const [liv, setLiv] = useState(false);

	const choice = (e) => {
		if (e.target.id === 'exp') {
			setExp(true);
			setLiv(false);
		} else if (e.target.id === 'liv') {
			setExp(false);
			setLiv(true);
		}
	};

	return (
		<>
			{exp ? (
				<>
					<div className='HCcover'>
						<div className='HCTop'>
							<span className='title'>
								<h3>HISTORIQUE</h3>
							</span>
							<span className='deconnexion'>
								<h4>Déconnexion</h4>
								<FontAwesomeIcon icon={faRightFromBracket} />
							</span>
						</div>
						<div className='HCmiddle'>
							<div className='mois'>
								<span>Mai / 2022</span>
							</div>
							<ul>
								<li
									className={exp ? 's' : null}
									id='exp'
									onClick={choice}>
									Expeditions
								</li>
								<li
									className={liv ? 's' : null}
									id='liv'
									onClick={choice}>
									Livraisons
								</li>
							</ul>
						</div>
						<div className='Ctableau'>
							<table>
								<thead>
									<tr>
										<th>Expediteur</th>
										<th>Destinataire</th>
										<th>ville d'éxpedition</th>
										<th>Ville de destination</th>
										<th>Clé</th>
										<th>Statut</th>
									</tr>
								</thead>
								<tbody>
									{expeditions.map((ship) => {
										return (
											<>
												<tr>
													<td>{ship.sender}</td>
													<td>{ship.recipient}</td>
													<td>{ship.shippingCity}</td>
													<td>{ship.destinationCity}</td>
													<td>{ship._id}</td>
													<td>{ship.state}</td>
												</tr>
											</>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='HCcover'>
						<div className='HCTop'>
							<span className='title'>
								<h3>HISTORIQUE</h3>
							</span>
							<span className='deconnexion'>
								<h4>Déconnexion</h4>
								<FontAwesomeIcon icon={faRightFromBracket} />
							</span>
						</div>
						<div className='HCmiddle'>
							<div className='mois'>
								<span>Mai / 2022</span>
							</div>
							<ul>
								<li
									className={exp ? 's' : null}
									id='exp'
									onClick={choice}>
									Expeditions
								</li>
								<li
									className={liv ? 's' : null}
									id='liv'
									onClick={choice}>
									Livraisons
								</li>
							</ul>
						</div>
						<div className='Ctableau'>
							<table>
								<thead>
									<tr>
										<th>Expediteur</th>
										<th>Destinataire</th>
										<th>ville d'éxpedition</th>
										<th>Ville de destination</th>
										<th>Clé</th>
										<th>Statut</th>
									</tr>
								</thead>
								<tbody>
									{livraisons.map((ship) => {
										return (
											<>
												<tr>
													<td>{ship.sender}</td>
													<td>{ship.recipient}</td>
													<td>{ship.shippingCity}</td>
													<td>{ship.destinationCity}</td>
													<td>{ship._id}</td>
													<td>{ship.state}</td>
												</tr>
											</>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Historique;
