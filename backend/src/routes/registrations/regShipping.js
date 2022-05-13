const shipping = require('../../models/shipping')
const body_parser = require('body-parser') 
const customer = require('../../models/customers')
const nodemailer = require('nodemailer')
const officer = require('../../models/officers')


 const send = (ardess , shipping , key ) => {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bakerathierry@gmail.com',
        pass: '23022003cr'
      }
    });
  
    var mailOptions = {
      from: 'bakerathierry@gmail.com',
      to: ardess,
      subject: `-----Nom de l'agence-----`,
      text : `Votre colis est pret à etre expedié :
      Expediteur : "${shipping.sender}"
      Destinataire : "${shipping.recipient}"
      Utilisez cette clé pour tracker votre colis sur notre site : "${key}"  `
    };
    
    transporter.sendMail(mailOptions, function(error){
      if (error) {
        console.log(error);
      } else {
        console.log('Email bien envoyé');
      }
    });   
}

const createShipping = (app) => {
    app.post('/api/createShipping/:user', body_parser.json() , async (req , res) => {
       var city;
       var author;
       var a = false , b = false
    await  officer.findOne({userName : req.params.user}).then(officer => {
          city = officer.city
          author = officer.userName
      })
    await customer.findOne({userName : req.body.sender}).then(data => {
      if(data) a = data.userName
    })
    await customer.findOne({userName : req.body.recipient}).then(data => {
      if(data) b = data.userName
    })
    if(a && b && a!=b) {
      await shipping.create({
        sender : req.body.sender,
        recipient : req.body.recipient,
        mobile : req.body.mobile ,
        shippingCity : city,
        destinationCity : req.body.destinationCity,
        author : author,
        packageType : req.body.packageType
      })
       .then(shipping => shipping.save())
       .then(shipping => {
           const msg =`Expedition reussie avec succees`
          
           customer.findOne({userName : shipping.sender}).then(user =>  send(user.eMail , shipping , shipping._id)  ) ;
           customer.findOne({userName : shipping.recipient}).then(user =>  send(user.eMail , shipping , shipping._id) ); 
    
           res.status(200).json({msg , shipping : shipping})
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
    }else{
      if(!a) res.status(404).json("L'éxpediteur n'est pas trouvé dans la base des données")
      if(!b) res.status(404).json("Le déstinataire n'est pas trouvé dans la base des données")
      if(a == b) res.status(400).json("Le destinataire doit etre different de l'éxpediteur")
    }
    
    })
}

const updateShippingMobile = (app) => {
    app.put('/api/updateShipping', body_parser.json() , async (req , res) => {
       const mobileTo = req.body.mobileTo
       const mobileFrom = req.body.mobileFrom
       if (mobileFrom && mobileTo) {
        await  shipping.updateMany({mobile : mobileFrom} , {mobile : mobileTo}).then(data => {
          const msg = `le transfert de colis du mobile ${mobileFrom}  au mobile ${mobileTo} a reussi avec succés`
          if(data.modifiedCount == 0) {
            res.status(201).json("Aucune éxpedition correspondante")
          }
          res.status(200).json({msg , data})
      }).catch (err => res.status(400).json(err))
       }else{
         res.status(400).json("Echec de mise  à jour")
       }
    
    })
}

const deleteShipping = (app) => {
    app.delete('/api/deleteShipping/:id', body_parser.json() , async (req , res) => {
        const key = req.params.id
      await  shipping.findByIdAndDelete(key).then(data => {
            const msg = `l'expedition "${data._id}" a bien été supprimée`
            res.status(200).json({msg , data})
        }).catch (err => res.status(400).json(err))
    })
} 

const shippingInfo = (app) => {
  app.get('/api/shippingInfo/:id' , body_parser.json() , async (req , res) => {
    const key = req.params.id
    await shipping.findById(key).then(data => res.status(200).json(data)).catch(err => console.log(err))
  })
} 

const allShipping = (app) => {
  app.get('/api/shippings' , body_parser.json() , async (req , res) => {
    await shipping.find().then(data => res.status(200).json(data)).catch(err => console.log(err))
  })
}


module.exports = {
    createShipping,
    updateShippingMobile,
    deleteShipping,
    shippingInfo ,
    allShipping
}