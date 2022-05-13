const shipping = require('../../models/shipping')
const body_parser = require('body-parser')
const officer = require('../../models/officers')

const delivery = (app) => {
    app.get('/api/officer/delivery/:user', body_parser.json() , async (req , res) => {
        const user = req.params.user
        var city ;
     await   officer.findOne({userName : user}).then(user => {
        city = user.city
     })  
     shipping.find({destinationCity : city}).then(data => {
         if(data[0]){
             res.status(200).json(data)
         }else{
             res.status(200).json("Aucune livraison ")
         }
    })
    })
}

const expeditions = (app) => {
    app.get('/api/officer/exp/:user', body_parser.json() , async (req , res) => {
        const author = req.params.user
      await  shipping.find({author : author}).then(data => {
          if(data[0]){
            res.status(200).json(data)
          }else{
              res.status(200).json("Aucune expedition ")
          } 
        })
    })
}

module.exports = {
    delivery ,
    expeditions
}