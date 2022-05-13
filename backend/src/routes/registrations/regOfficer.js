const officer = require('../../models/officers')
const body_parser = require('body-parser') 
const bcrypt = require('bcrypt')

const createOfficer = (app) => {
    app.post('/api/Officer/register', body_parser.json() , (req , res) => {

        if(req.body.password) {
            bcrypt.hash(req.body.password , 10).then(hash => {
                officer.create({
                    userName : req.body.userName ,   
                    firstName : req.body.firstName,
                    lastName : req.body.lastName ,
                    password : hash ,
                    eMail : req.body.eMail,
                    country : req.body.country ,
                    city : req.body.city ,
                })
                .then(newOfficer => newOfficer.save())
                .then(officer => {
                    const msg = `L'agent ${req.body.userName} a été bien enregistré(e)`
                    res.status(200).json({msg , officer : officer})
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
                
        })}else{
            res.status(400).json("Renseigner le mot de pass")
        }
        })}

const updateOfficer = (app) => {
    app.put('/api/updateOfficer/:userName', body_parser.json() , async (req , res) => {
       const user = req.params.userName
     await  officer.findOneAndUpdate({userName : user} , req.body , {new : true} ).then(data => {
           const msg = `le profile de ${user} a bien été changé`
           res.status(200).json({msg , data})
           
       }).catch (err => res.status(400).json(err))
    })
}

const deleteOfficer = (app) => {
    app.delete('/api/deleteOfficer/:userName' , (req , res) => {
        const user = req.params.userName
        officer.findOneAndDelete({userName : user}).then(data => {
            const msg = `le compe de l'agent ${data.userName} a bien été supprimé`
            res.status(200).json({msg , data})
        }).catch (err => res.status(400).json(err))
    })
}

const officerInfo = (app) => {
    app.get('/api/officerInfo/:userName' , body_parser.json() , async (req , res) => {
        const userName = req.params.userName
        officer.findOne({userName}).then(data => res.status(200).json(data)).catch(err => console.log(err))
    })
}

const allOfficer = (app) => {
    app.get('/api/officers' , body_parser.json() , async (req , res) => {
        officer.find().then(data => res.status(200).json(data)).catch(err => console.log(err))
    })
}
 
module.exports = {
    createOfficer,
    updateOfficer,
    deleteOfficer,
    officerInfo,
    allOfficer
}