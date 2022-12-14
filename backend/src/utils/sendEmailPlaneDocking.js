/** @format */
const { transporter } = require('../mail/transporter');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (exp, dest, destCity, city, at, mail) => {
	const isArrived = city == destCity;

	var mailOptions = {
		from: 'bakerathierry@gmail.com',
		to: mail,
		subject: `----Nom de l'agence----`,
		text: at
			? isArrived
				? `le colis expedie par "${exp}" est bien arrive ! Passez le recuperer au poste`
				: `le colis expedie par "${exp}" vient de faire un escale a ${city}`
			: isArrived
			? `le colis envoye a "${dest}" est bien arrive !`
			: `le colis envoye a "${dest}" vient de faire un escale a ${city}`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email bien envoye');
		}
	});
};
