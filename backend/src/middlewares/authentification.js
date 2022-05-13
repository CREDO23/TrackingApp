const jwt = require('jsonwebtoken')
const KEY = "asdfghjklQWERTYUIOP2345678FT74T6U9oijh6t5RD3eUOIPOI8U7YGE345TFFGY78UJI90kju76gt5rfr43e"

const authentification = (req , res , next) => {
    const cookie = req.cookies.jwt
    if (!cookie) {
        res.json("Authentifiez - vous !")
    }
   jwt.verify(cookie, KEY ,(err , decoded) => {
        if(err) console.log(err)
        const user = decoded.user
        if(req.body.userName && req.body.userName != user) {
            res.json("identifiant invalide")
        } else {
            next()
        } 
    }) 
}

const userContext = (req ,res ) => {
    const token = req.cookies.jwt
    if(token) {
        jwt.verify(token , KEY , (err , decoded) => {
            if(err) console.log(err)
            else{
                res.send(decoded.user)
                console.log(decoded.user)
            }
        })
    }
}

module.exports = {
    authentification,
    userContext
}