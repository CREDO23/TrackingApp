/** @format */

const officer = require('../../models/officers');
const customer = require('../../models/customers');
const bcrypt = require('bcrypt');
const body_parser = require('body-parser');
const jwt = require('jsonwebtoken');
const KEY =
	'asdfghjklQWERTYUIOP2345678FT74T6U9oijh6t5RD3eUOIPOI8U7YGE345TFFGY78UJI90kju76gt5rfr43e';

module.exports = (app) => {
	app.post('/api/singin', body_parser.json(), (req, res) => {
		const user = req.body.userName;
		const password = req.body.password;

		customer.findOne({ userName: user }).then((data) => {
			if (data) {
				bcrypt.compare(password, data.password).then((hash) => {
					if (hash) {
						const token = jwt.sign(
							{
								user: data.userName,
							},
							KEY,
							{
								expiresIn: '1h',
							},
						);
						res.cookie('jwt', token, {
							httpOnly: false,
							maxAge: 3600000,
						});
						res
							.status(200)
							.json({ data, TOKEN: token, user: 'client' });
					} else {
						res.status(400).json('Password incorrect');
					}
				});
			} else {
				officer.findOne({ userName: user }).then((data) => {
					if (data) {
						bcrypt.compare(password, data.password).then((hash) => {
							if (hash) {
								const token = jwt.sign(
									{
										user: data.userName,
									},
									KEY,
									{
										expiresIn: '1h',
									},
								);
								res.cookie('jwt', token, {
									httpOnly: true,
									maxAge: 3600000,
								});

								res
									.status(200)
									.json({ data, TOKEN: token, user: 'agent' });
							} else {
								res.status(400).json('Password incorrect');
							}
						});
					}
					// res.status(400).json("cet utilisateur n'existe pas");
				});
			}
		});
	});
};
