/** @format */

const body_parser = require('body-parser');
const mobile = require('../../models/mobiles');

const addMobile = (app) => {
	app.post('/api/addMobile', body_parser.json(), async (req, res) => {
		await mobile
			.create({
				name: req.body.name,
				infoGeoLoc: req.body.infoGeoLoc,
			})
			.then((mobile) => mobile.save())
			.then((mobile) => {
				const msg = `La mobile ${req.body.name} a été ajouté`;
				res.status(200).json({ msg, mobile: mobile });
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

const deleteMobile = (app) => {
	app.delete(
		'/api/deleteMobile',
		body_parser.json(),
		async (req, res) => {
			const MOBILE = req.body.name;
			await mobile
				.findOneAndDelete({ name: MOBILE })
				.then((data) => {
					const msg = `le mobile ${data.name} a été supprimé`;
					res.status(200).json({ msg, data });
				})
				.catch((err) => res.status(400).json(err));
		},
	);
};

module.exports = {
	addMobile,
	deleteMobile,
};
