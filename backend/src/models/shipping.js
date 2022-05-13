const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const schemaShipping = new Schema ({
    author : {type : String ,trim : true , required : [true , "Renseigner l'agent"]},
    sender : {type : String , trim : true , required : [true ,"Renseigner le nom d l'expediteur"]},
    shippingCity : {type : String , trim : true , required : [true , " Renseigner la ville d'expedition"]},
    recipient : {type : String , trim : true , required :[true , "Renseigner le nom du destinataire"] },
    destinationCity : {type : String , trim : true , required : [true, "Renseigner la ville de destination"]},
    packageType : {type : String , trim : true },
    packageWeight : Number,
    mobile : {type : String , trim : true , required : [true ,"Renseigner le nom du mobile de transport"]},
    departDate : {
        type : String ,
        trim : true ,
        default : (new Date(Date.now())).toLocaleDateString("en-US", {weekday: "long", year: "numeric", month: "long", day: "numeric"}) ,
    },
    state : {
        trim : true ,
        type : String,
        default : "En cours"
    }
})

module.exports  = new mongoose.model('SHIPPING' , schemaShipping)