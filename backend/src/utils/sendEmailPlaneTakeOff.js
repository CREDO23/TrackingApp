/** @format */
const { transporter } = require('../mail/transporter');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (user, shipCity, city, at, mail) => {
	const f = city == shipCity;

	var mailOptions = {
		from: 'bakerathierry@gmail.com',
		to: mail,
		subject: `----Nom de l'agence----`,
		text: at
			? f
				? `Le colis envoyé  à ${user} commence son parcours`
				: `Le colis envoyé à ${user} poursuis son parcours`
			: f
			? `Le colis éxpedié par ${user} comence son parcours`
			: `Le colis éxpedié par ${user} poursuis son parcours`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email bien envoye');
		}
	});
};
