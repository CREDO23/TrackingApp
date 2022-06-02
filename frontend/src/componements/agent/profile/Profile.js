/** @format */

import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useSelector } from 'react-redux';
const Profile = () => {
	const user = useSelector((state) => state.userReducer);
	return (
		<div className='agentCover'>
			<div className='profilTop'>
				<span className='title'>
					<h3>PROFIL</h3>
				</span>
				<span className='deconnexion'>
					<h4>Déconnexion</h4>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</span>
			</div>
			<div className='profilContenair'>
				<div className='img'></div>
				<div className='grid '>
					<div className='userName it'>
						<p>UserName :</p>
						<h3>{user.userName}</h3>
					</div>
					<div className='firstName it'>
						<p>FirstName :</p>
						<h3>{user.firstName}</h3>
					</div>
					<div className='lastName it '>
						<p>LastName :</p>
						<h3>{user.lastName}</h3>
					</div>
					<div className='email it'>
						<p>Email :</p>
						<h3>{user.eMail}</h3>
					</div>
					<div className='ville it'>
						<p>Ville :</p>
						<h3>{user.city}</h3>
					</div>
					<div className='pays it'>
						<p>Pays :</p>
						<h3>{user.country}</h3>
					</div>
					<div id='change'>
						<button>Changer le mot de pass</button>
					</div>
					<div id='edit'>
						<button>Editer le profil</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
