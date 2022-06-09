/** @format */

const body_parser = require('body-parser');
const city = require('../../models/city');

const addCity = (app) => {
	app.post('/api/addCity', body_parser.json(), async (req, res) => {
		await city
			.create({
				name: req.body.name,
				infoGeoLoc: req.body.infoGeoLoc,
			})
			.then((city) => city.save())
			.then((city) => {
				const msg = `La ville ${req.body.name} a été ajoutée`;
				res.status(200).json({ msg, ville: city });
			})
			.catch((err) => {
				let erreurs = [];
				if (err.errors) {
					Object.values(err.errors).forEach((err) => {
						erreurs.push(err.properties.message);
					});
				}
				console.log(erreurs);
				res.status(400).json(erreurs);
			});
	});
};

const deleteCity = (app) => {
	app.delete(
		'/api/deleteCity',
		body_parser.json(),
		async (req, res) => {
			const CITY = req.body.name;
			await city
				.findOneAndDelete({ name: CITY })
				.then((data) => {
					const msg = `la ville ${data.name} a été supprimée`;
					res.status(200).json({ msg, data });
				})
				.catch((err) => res.status(400).json(err));
		},
	);
};

module.exports = {
	addCity,
	deleteCity,
};
