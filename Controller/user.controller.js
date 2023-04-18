const controller={};

const passport = require('passport');
const modelo=require('../Model/user.model')
//Login
controller.login =(request, response) => {
    response.render('./View/login');
}
controller.loginPost=passport.authenticate('local',{
    successRedirect:"/menu",
    failureRedirect:"/login"
})

//Registro
controller.register =(request, response) => {
    response.render('./View/register');
}
controller.registerPost=(request, response) => {

    modelo.saveUser(request.body)
    response.redirect('/menu')
}

module.exports=controller;