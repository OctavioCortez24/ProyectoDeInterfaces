const controller={};

const modelo=require('../Model/user.model')
//Login
controller.login =(request, response) => {
    response.render('./View/login');
}
controller.loginPost=(request, response) => {
    
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