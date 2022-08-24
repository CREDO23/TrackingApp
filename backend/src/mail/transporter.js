/** @format */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	pool: true,
	auth: {
		user: 'bakerathierry@gmail.com',
		pass: `qztpqpwvmlqeepkv
		`,
	},
});

module.exports = { transporter };
