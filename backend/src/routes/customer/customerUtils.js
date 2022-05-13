const shipping = require('../../models/shipping')
const body_parser = require('body-parser')
const ID = require("mongoose").Types.ObjectId

const trackPackage = (app) => {
    app.get('/api/customer/track/:key' , body_parser.json() , async (req , res) => {
        if(!ID.isValid(req.params.key)) return res.status(400).json("La clé doit avoir 24 caractères")
        const key = req.params.key 
       await shipping.findById(key).then(package => {
           if(package) {
            const date = (new Date(Date.now())).toLocaleDateString("en-US", {weekday: "long", year: "numeric", month: "long", day: "numeric" ,hour : "2-digit", hourCycle : "h24" , minute : "2-digit" , second : "2-digit"}) 
            const data = {
             mobile : package.mobile,
             time :date,
             sender : package.sender ,
             recipient : package.recipient,
             state : package.state
            } 
            res.status(200).json(data)
           }else{
             res.status(400).json("Clé invalide")
           }
           
         })
    })
}

const history = (app) => {
    app.get('/api/customer/history/:user', body_parser.json() , async (req , res) => {
        const user =req.params.user
        const history = []
      await  shipping.find({sender : user} ).then(data => {
          if(data[0]) history.push(data)
            
        })
      await  shipping.find({recipient: user} ).then(data => {
          if(data[0]) history.push(data)
        })  
        if (history[0]) {
            res.status(200).json(history)
        }else{
            res.status(400).json("Vous n'avez encore effectuez aucune transaction")
        }

    })
}

module.exports = {
    history , 
    trackPackage
}