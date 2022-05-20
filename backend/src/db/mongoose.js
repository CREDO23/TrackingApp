const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

module.exports = mongoose.connect(`mongodb+srv://${process.env.DB}.gbqza.mongodb.net/UJUZIFin`,{useNewUrlParser : true , useUnifiedTopology : true}).then(error =>
     console.log('vous bien connecter a la base de donnee!')    
).catch(err => console.log(err))





