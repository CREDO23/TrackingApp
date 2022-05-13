

module.exports =  (app) => {
    app.get('/api/logout' , (req , res) => {
        res.cookie("jwt" , "" , {maxAge : 1})
        res.redirect('/')
    })
}
