const controller={};

const passport = require('passport');
const modelo=require('../Model/user.model')
//Login
  
controller.login =(request, response) => {
    response.render('./View/login');
}
controller.loginPost=passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/login"
})

controller.getUser=(request, response, next) => {
    
    controller.id =modelo.getIdUser(request.body.username, request.body.password)
    controller.datos=modelo.getDatosUser(request.body.username, request.body.password);
   
    next();
    
}
controller.verificarCuil=(request, response, next) => {
    var validacionCuil=modelo.validacionCuil(request.body.cuil);
  
    if(validacionCuil) {
        return next();
    }
    response.redirect("/login")
}
//Registro
controller.register =(request, response) => {
    response.render('./View/register');
}
controller.registerPost=(request, response) => {
    
    modelo.saveUser(request.body)
    response.redirect('/menu')
}

module.exports=controller;