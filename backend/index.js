const express = require('express')
require('./src/db/mongoose') 
const dotenv = require('dotenv');
dotenv.config();

const app =  express()
const PORT = 3000

 const { createCustomer , updateCustomer , deleteCustomer , customerInfo , allCustomer} = require('./src/routes/registrations/regCustomer')
 createCustomer(app)
 updateCustomer(app)
 deleteCustomer(app)
 customerInfo(app)
 allCustomer(app)

 const {createOfficer , updateOfficer , deleteOfficer , officerInfo , allOfficer} = require('./src/routes/registrations/regOfficer')
 createOfficer(app)
 updateOfficer(app)
 deleteOfficer(app)
 officerInfo(app)
 allOfficer(app)

 const {createShipping , updateShippingMobile , deleteShipping , shippingInfo , allShipping} = require('./src/routes/registrations/regShipping')
 createShipping(app)
 updateShippingMobile(app)
 deleteShipping(app)
 shippingInfo(app)
 allShipping(app)

 const {history , trackPackage} = require('./src/routes/customer/customerUtils')
 history(app)
 trackPackage(app)

 const {delivery , expeditions} = require('./src/routes/officer/officerUtils')
 delivery(app)
 expeditions(app)

require('./src/routes/auth/logout')(app)
require('./src/routes/auth/singin')(app)
require('./src/routes/Notification/planeDocking')(app)
require('./src/routes/Notification/planeTakeOff')(app)



app.listen(PORT , () => console.log(`votre serveur est bien ecoutee sur le port ${PORT}`))