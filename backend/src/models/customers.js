const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const {isEmail} = require('validator')

const schemaCustomer = new Schema ({
    userName : {
        type : String,
        trim : true ,
        required : [true , "Renseigner le nom de l'utilisateur"],
        unique : [true , "Ce nom d'utilisateur est déjà pris"]
    },
    firstName : {type : String },
    lastName :{type : String} ,
    password : {
        type : String,
        trim : true ,
        required : [true , "Renseigner le mot de pass"],
        unique : [true , "Ce mot de pass éxiste dans la base des données"]
     },
    eMail :  {type : String, trim : true , validate : [isEmail] , required :[true , "Renseigner votre adresse email"]}
 })
 module.exports = new mongoose.model('CUSTOMER' , schemaCustomer)