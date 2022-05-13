const customer = require('../../models/customers')
const body_parser = require('body-parser') 
const bcrypt = require('bcrypt')

const createCustomer = (app) => {
    app.post('/api/Customer/singup' , body_parser.json() , async (req , res ) => {

        if (req.body.password) {
            await  bcrypt.hash(req.body.password , 10).then(hash => {
                customer.create({
                    userName : req.body.userName,
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    password : hash ,
                    eMail : req.body.eMail
                }) 
                .then(custom => custom.save())
                .then(customer => {
                    const msg = `Le client ${req.body.userName} a été bien enregistré(e)`
                    res.status(200).json({msg , customer : customer})
                }).catch(err => {
                   let erreurs = []
                  if(err.errors){
                    Object.values(err.errors).forEach(err =>{  
                      erreurs.push(err.properties.message) 
                     }
                      )
                  }
                 
                  res.status(400).json(erreurs)
                   } ) 
            }) 
        }else{
            res.status(400).json({password : "Renseigner votre mot de pass"})
        }
           
})}

const updateCustomer =  (app) => {
    app.put('/api/updateCustomer/:userName' , body_parser.json() , async (req , res) => {
       const user = req.params.userName
     await  customer.findOneAndUpdate({userName : user} , req.body , {new : true} 
       ).then(data => {
           const msg = `le profile de ${user} a bien été changé`
           res.status(200).json({msg , data})
       }).catch (err => res.status(400).json(err))
    })
}

const deleteCustomer = (app) => {
    app.delete('/api/deleteCustomer/:userName' , body_parser.json() , async (req , res) => {
        const user = req.params.userName
      await  customer.findOneAndDelete({userName : user}).then(data => {
            const msg = `le compte de l'utilisateur ${user} a été supprimée`
            res.status(200).json({msg , data})
        }).catch (err => res.status(400).json(err))
    })
}

const customerInfo = (app) => {
    app.get('/api/customerInfo/:userName' , body_parser.json() , async (req , res) => {
        const userName = req.params.userName
       await customer.findOne({userName}).then(data => res.status(200).json(data)).catch(err => console.log(err))
    })
}

const allCustomer = (app) => {
    app.get('/api/customers' , body_parser.json() , async (req , res) => {
      await  customer.find().then(data => res.status(200).json(data)).catch(err => console.log(err))
    })
}

module.exports = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    customerInfo,
    allCustomer
}