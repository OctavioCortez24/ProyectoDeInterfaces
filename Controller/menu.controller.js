const controller={};

const Clases=require('../class')
//const modelo=


//Login
controller.login =(request, response) => {
    response.render('./View/login');
}

//Registro
controller.register =(request, response) => {
    response.render('./View/register');
}
controller.registerPost=(request, response) => {
    var user= new Clases.user(request.body.name, request.body.surname, request.body.email, request.body.password, request.body.dateOfBirth);
    response.send(user)
    console.log(user)
}


//Menu principal
controller.menu=(request, response) => {
    response.render('./View/menu');
}


module.exports=controller;