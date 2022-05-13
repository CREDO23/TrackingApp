const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const {isEmail} = require('validator')

const schemaOfficer = new Schema ({
    userName : {
        type : String,
        trim : true ,
        required : [true , "Renseigner le nom d'utilisateur"],
        unique : [true , "Ce nom d'utilisateur est déjà pris"]
    },   
    firstName: {type : String },
    lastName : {type : String },
    password : {
        type : String,
        trim : true ,
        required : [true , "Renseigner le mot de pass"],
        unique : [true , "ce mot de pass éxiste dans la base des données"]
    },
    eMail :  {type : String, validate : [isEmail] ,  trim : true , required :[true , "Renseigner votre adresse email"]},
    country : {type : String ,trim : true , required : [true , "Renseigner le pays"]},
    city : {type : String , trim : true , required : [true , "Renseigner la ville dans laquelle se trouve poste "]}
})

module.exports = new mongoose.model('OFFICER' , schemaOfficer) 