/** @format */

const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

require('./src/db/mongoose');
dotenv.config();

const corsOptions = {
	origin: 'http://localhost:3001',
	secure: true,
	credentials: true,
	allowedHeaders: ['sessionId', 'Content-Type'],
	exposedHeaders: ['sessionId'],
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
};

app.use(cookieParser());
app.use(cors(corsOptions));

const {
	createCustomer,
	updateCustomer,
	deleteCustomer,
	customerInfo,
	allCustomer,
} = require('./src/routes/registrations/regCustomer');
createCustomer(app);
updateCustomer(app);
deleteCustomer(app);
customerInfo(app);
allCustomer(app);

const {
	createOfficer,
	updateOfficer,
	deleteOfficer,
	officerInfo,
	allOfficer,
} = require('./src/routes/registrations/regOfficer');
createOfficer(app);
updateOfficer(app);
deleteOfficer(app);
officerInfo(app);
allOfficer(app);

const {
	createShipping,
	updateShippingMobile,
	deleteShipping,
	shippingInfo,
	allShipping,
} = require('./src/routes/registrations/regShipping');
createShipping(app);
updateShippingMobile(app);
deleteShipping(app);
shippingInfo(app);
allShipping(app);

const {
	history,
	trackPackage,
} = require('./src/routes/customer/customerUtils');
history(app);
trackPackage(app);

const {
	delivery,
	expeditions,
} = require('./src/routes/officer/officerUtils');
delivery(app);
expeditions(app);

require('./src/routes/auth/logout')(app);
require('./src/routes/auth/singin')(app);
require('./src/routes/auth/singin')(app);
require('./src/routes/Notification/planeDocking')(app);
require('./src/routes/Notification/planeTakeOff')(app);

const {
	authentification,
} = require('./src/middlewares/authentification.js');

// app.get('*', authentification);
// app.put('*', authentification);

// jwtUser
app.get('/jwtUser', (req, res) => {
	if (res.locals.user) {
		res.send(res.locals.user);
	} else {
		res.send('No token');
	}
});

app.listen(process.env.PORT, () =>
	console.log(
		`votre serveur est bien ecoutee sur le port ${process.env.PORT}`,
	),
);
