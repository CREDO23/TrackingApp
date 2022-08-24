/** @format */

const shipping = require('../../models/shipping');
const OFFICER = require('../../models/officers');
const customer = require('../../models/customers');
const body_parser = require('body-parser');
const sendEmail = require('../../utils/sendEmailPlaneDocking');

module.exports = (app) => {
	app.post(
		'/api/notification/planeDocking/:user',
		body_parser.json(),
		async (req, res) => {
			const mobile = req.body.mobile;
			const officer = req.params.user;
			const arraySender = [];
			const arrayRecipient = [];
			const destinationCity = [];
			const updates = [];
			var ville;
			var i = -1,
				j = -1;

			await OFFICER.findOne({ userName: officer }).then((officer) => {
				if (officer) {
					ville = officer.city;
				} else {
					res.status(400).json('Une erreur est survenue');
				}
			}),
				await shipping
					.find({ mobile: mobile, state: 'En cours' })
					.then(async (element) => {
						if (element) {
							element.forEach((element) => {
								arraySender.push(element.sender);
								arrayRecipient.push(element.recipient);
								destinationCity.push(element.destinationCity);
							});

							element
								.filter((element) => element.destinationCity == ville)
								.forEach(async (data) => {
									await shipping.updateOne(data, {
										state: 'Terminée',
									});
									updates.push(data._id);
								});
						}
					});

			if (arraySender[0]) {
				arraySender.forEach(async (data) => {
					await customer.findOne({ userName: data }).then((user) => {
						i++;

						sendEmail(
							arraySender[i],
							arrayRecipient[i],
							destinationCity[i],
							ville,
							false,
							user.eMail,
						);
					});
				});
			}

			if (arrayRecipient[0]) {
				arrayRecipient.forEach(async (data) => {
					await customer.findOne({ userName: data }).then((user) => {
						j++;

						sendEmail(
							arraySender[j],
							arrayRecipient[j],
							destinationCity[j],
							ville,
							false,
							user.eMail,
						);
					});
				});
			}

			if (arrayRecipient[0] || arraySender[0]) {
				res.json({
					updates,
				});
			} else {
				res.status(200).json('Pas de colis correspondant!');
			}
		},
	);
};
