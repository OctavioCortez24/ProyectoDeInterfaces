const controller={};

const modelo=require('../Model/user.model')
//Login
controller.login =(request, response) => {
    response.render('./View/login');
}

//Registro
controller.register =(request, response) => {
    response.render('./View/register');
}
controller.registerPost=(request, response) => {

    modelo.saveUser(request.body)
    response.redirect('/')
}

module.exports=controller;