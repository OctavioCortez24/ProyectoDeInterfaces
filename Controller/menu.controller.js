const controller={};


//const modelo=




//Menu principal
controller.menu=(request, response) => {
    response.render('./View/menu');
}
controller.menuPrincipal=(request, response) => {
    response.render('./View/menuPrincipal');
}
controller.alquiler=(request, response) => {
    response.render('./View/Consulta');
}
controller.compras=(request, response) => {
    response.render('./View/compras');
}
controller.alquilerPost=(request, response) => {
    console.log('Si llego')
    console.log(request.body);
    response.send(request.body)
}


module.exports=controller;