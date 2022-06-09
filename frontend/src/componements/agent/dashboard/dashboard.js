/** @format */

import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const shippings = useSelector((state) => state.shippingReducer);
	const user = useSelector((state) => state.userReducer);

	const expeditions = shippings.filter(
		(ship) => ship.author === user.userName,
	);

	const sort = expeditions.sort(
		(a, b) => Date.parse(b.departDate) - Date.parse(a.departDate),
	);

	var rec = [];

	for (var i = 0; i <= 7; i++) {
		rec.push(sort[i]);
	}

	const expT = shippings
		.filter((ship) => ship.author === user.userName)
		.filter((ship) => ship.state === 'Terminée');

	const expE = shippings
		.filter((ship) => ship.author === user.userName)
		.filter((ship) => ship.state === 'En cours');

	const livT = shippings
		.filter((ship) => ship.destinationCity === user.city)
		.filter((ship) => ship.state === 'Terminée');

	const livE = shippings
		.filter((ship) => ship.destinationCity === user.city)
		.filter((ship) => ship.state === 'En cours');

	return (
		<div className='agentDashCover'>
			<div className='dashTop'>
				<span className='title'>
					<h3>DASHBOARD</h3>
				</span>
				<span className='deconnexion'>
					<h4>Déconnexion</h4>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</span>
			</div>
			<div className='dash'>
				<div className='expeditions'>
					<span>
						<h5>Expeditions :</h5>
					</span>
					<div>
						<span>Terminées :{expT.length}</span>
						<span>En cours :{expE.length}</span>
					</div>
				</div>
				<div className='livraisons'>
					<span>
						<h5>Livraisons :</h5>
					</span>
					<div>
						<span>Terminées :{livT.length}</span>
						<span>En cours :{livE.length}</span>
					</div>
				</div>
			</div>
			<div className='bot'>
				<div>
					<span>
						<h5>Expeditions récentes :</h5>
					</span>
				</div>
				<div className='dashtableau'>
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
							{sort &&
								sort.map((ship) => {
									return (
										<tr key={ship._id}>
											<td>{ship.sender}</td>
											<td>{ship.recipient}</td>
											<td>{ship.destinationCity}</td>
											<td>{ship._id}</td>
											<td>{ship.state}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
