/** @format */

import React, { useState } from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useSelector } from 'react-redux';

const Historique = () => {
	const shippings = useSelector((state) => state.shippingReducer);
	const user = useSelector((state) => state.userReducer.curentUser);

	const expeditions = shippings.filter(
		(ship) => ship.author === user.userName,
	);

	const livraisons = shippings.filter(
		(ship) => ship.destinationCity === user.city,
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
					<div className='agentHcover'>
						<div className='HTop'>
							<span className='title'>
								<h3>HISTORIQUE</h3>
							</span>
							<span className='deconnexion'>
								<h4>Déconnexion</h4>
								<FontAwesomeIcon icon={faRightFromBracket} />
							</span>
						</div>
						<div className='Hmiddle'>
							<div className='mois'>
								<span>Mai / 2022</span>
							</div>
							<ul>
								<li
									onClick={choice}
									className={exp ? 's' : null}
									id='exp'>
									Expeditions
								</li>
								<li
									onClick={choice}
									className={liv ? 's' : null}
									id='liv'>
									Livraisons
								</li>
							</ul>
						</div>
						<div className='tableau'>
							<table>
								<thead>
									<tr>
										<th>Expediteur</th>
										<th>Destinataire</th>
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
					<div className='agentHcover'>
						<div className='HTop'>
							<span className='title'>
								<h3>HISTORIQUE</h3>
							</span>
							<span className='deconnexion'>
								<h4>Déconnexion</h4>
								<FontAwesomeIcon icon={faRightFromBracket} />
							</span>
						</div>
						<div className='Hmiddle'>
							<div className='mois'>
								<span>Mai / 2022</span>
							</div>
							<ul>
								<li
									onClick={choice}
									className={exp ? 's' : null}
									id='exp'>
									Expeditions
								</li>
								<li
									onClick={choice}
									className={liv ? 's' : null}
									id='liv'>
									Livraisons
								</li>
							</ul>
						</div>
						<div className='tableau'>
							<table>
								<thead>
									<tr>
										<th>Expediteur</th>
										<th>Destinataire</th>
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
