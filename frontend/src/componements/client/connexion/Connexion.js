/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Connexion = () => {
	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [eMail, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [Singin, setSingin] = useState(true);
	const [Singup, setSingup] = useState(false);
	const [isLoadInfo, setIsLoadInfo] = useState(false);

	const handleConnexion = async (e) => {
		e.preventDefault();
		setIsLoadInfo(true);
		await axios({
			method: 'post',
			withCredentials: true,
			url: `${process.env.REACT_APP_API_URL}api/singin`,
			data: {
				userName,
				password,
			},
		})
			.then((res) => {
				if (res.data.user === 'client') {
					window.location = '/client/dashboard';
				} else if (res.data.user === 'agent') {
					window.location = '/agent/dashboard';
				}
				setIsLoadInfo(false);
			})
			.catch((err) => console.log(err));
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		setIsLoadInfo(true);
		await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/Customer/singup`,
			data: {
				userName,
				firstName,
				lastName,
				eMail,
				password,
			},
		})
			.then((res) => {
				console.log(res);
				setSingup(false);
				setSingin(true);
				setIsLoadInfo(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const choice = (e) => {
		if (e.target.id === 'singup') {
			console.log(e.target.id);
			setSingup(true);
			setSingin(false);
		} else if (e.target.id === 'singin') {
			console.log(e.target.id);
			setSingup(false);
			setSingin(true);
		}
	};
	return (
		<>
			{Singup ? (
				<>
					<form
						className='clientConnexion'
						onSubmit={handleRegister}
						action=''>
						<div className='icon'>
							<FontAwesomeIcon
								icon={faCircleUser}
								color='#E5E5E5'
								size='6x'
							/>
						</div>
						<div className='choix'>
							<span
								id='singup'
								onClick={choice}
								className={Singup ? 'soulign' : null}>
								S'inscrire
							</span>
							<span
								id='singin'
								onClick={choice}
								className={Singin ? 'soulign' : null}>
								Se connecter
							</span>
						</div>
						<div className='form'>
							<div>
								<input
									type='text'
									placeholder='userName'
									name='userName'
									id='userName'
									onChange={(e) => setUserName(e.target.value)}
									value={userName}
								/>
							</div>
							<div>
								<input
									type='text'
									placeholder='FirstName'
									name='firstName'
									id='firstName'
									onChange={(e) => setFirstName(e.target.value)}
									value={firstName}
								/>
							</div>
							<div>
								<input
									type='text'
									placeholder='LastName'
									name='lastName'
									id='lastName'
									onChange={(e) => setLastName(e.target.value)}
									value={lastName}
								/>
							</div>
							<div>
								<input
									type='mail'
									placeholder='Email'
									name='mail'
									id='mail'
									onChange={(e) => setEmail(e.target.value)}
									value={eMail}
								/>
							</div>
							<div>
								<input
									type='password'
									placeholder='Password'
									name='passowrd'
									id='password'
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</div>
							<div className='btn'>
								<input
									type='submit'
									name='submit'
									id='submit'
									value={isLoadInfo ? 'Loading...' : 'SOUMETTRE'}
								/>
							</div>
						</div>
					</form>
				</>
			) : (
				<>
					<form
						className='clientConnexion'
						onSubmit={handleConnexion}
						action=''>
						<div className='icon'>
							<FontAwesomeIcon
								icon={faCircleUser}
								color='#E5E5E5'
								size='6x'
							/>
						</div>
						<div className='choix'>
							<span
								id='singup'
								onClick={choice}
								className={Singup ? 'soulign' : null}>
								S'inscrire
							</span>
							<span
								id='singin'
								onClick={choice}
								className={Singin ? 'soulign' : null}>
								Se connecter
							</span>
						</div>
						<div className='form'>
							<div>
								<input
									type='text'
									placeholder='userName'
									name='userName'
									id='userName'
									onChange={(e) => setUserName(e.target.value)}
									value={userName}
								/>
							</div>
							<div>
								<input
									type='password'
									placeholder='Password'
									name='passowrd'
									id='password'
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</div>
							<div className='btn'>
								<input
									type='submit'
									name=''
									id='submit'
									value={isLoadInfo ? 'Loading...' : 'SOUMETTRE'}
								/>
							</div>
						</div>
					</form>
				</>
			)}
		</>
	);
};

export default Connexion;
