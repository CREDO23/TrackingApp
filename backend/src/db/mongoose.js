const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://Thierry:Thierry2@cluster2.gbqza.mongodb.net/UJUZIFin",{useNewUrlParser : true , useUnifiedTopology : true}).then(error =>
     console.log('vous bien connecter a la base de donnee!')    
).catch(err => console.log(err))





