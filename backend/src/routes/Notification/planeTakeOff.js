/** @format */

const shipping = require('../../models/shipping');
const customer = require('../../models/customers');
const OFFICER = require('../../models/officers');
const body_parser = require('body-parser');
const sendEmail = require('../../utils/sendEmailPlaneTakeOff');

module.exports = (app) => {
	app.get(
		'/api/notification/planeTakeOff/:user',
		body_parser.json(),
		async (req, res) => {
			const mobile = req.body.mobile;
			const officer = req.params.user;
			const arraySender = [];
			const arrayRecipient = [];
			const shippingCity = [];
			var i = -1,
				j = -1;
			var ville;

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
								shippingCity.push(element.shippingCity);
							});
						}
					});

			if (arraySender[0]) {
				arraySender.forEach(async (data) => {
					await customer.findOne({ userName: data }).then((user) => {
						i++;
						sendEmail(
							arraySender[i],
							shippingCity[i],
							ville,
							true,
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
							arrayRecipient[j],
							shippingCity[j],
							ville,
							false,
							user.eMail,
						);
					});
				});
			}

			if (arrayRecipient[0] || arraySender[0]) {
				res.json({
					arraySender,
					arrayRecipient,
					ville,
				});
			} else {
				res.status(200).json('Pas de colis correspondant!');
			}
		},
	);
};
