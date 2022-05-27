/** @format */

const jwt = require('jsonwebtoken');
const KEY = process.env.KEY;

const authentification = (req, res, next) => {
	const cookie = req.cookies.jwt;
	if (!cookie) {
		res.locals.user = null;
		next();
	}
	jwt.verify(cookie, KEY, (err, decoded) => {
		if (err) {
			console.log(err);
		} else {
			const user = decoded.user;
			console.log(user);
			res.locals.user = user;
			next();
		}
	});
};

module.exports = {
	authentification,
};
