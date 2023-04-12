const controller={};


//const modelo=




//Menu principal
controller.menu=(request, response) => {
    response.render('./View/menu');
}
controller.menuPrincipal=(request, response) => {
    response.render('./View/menuPrincipal');
}
controller.Consulta=(request, response) => {
    response.render('./View/Consulta');
}
controller.ConsultaPost=(request, response) => {
    console.log('Si llego')
    console.log(request.body);
    response.send(request.body)
}


module.exports=controller;