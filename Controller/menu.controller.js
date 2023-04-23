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
controller.automovilA=(request, response) => {
    response.render('./View/automovilA');
}
controller.automovilB=(request, response) => {
    response.render('./View/automovilB')
}
controller.automovilC=(request, response) => {
    response.render('./View/automovilC')
}
controller.automovilD=(request, response) => {
    response.render('./View/automovilD')
}
controller.automovilE=(request, response) => {
    response.render('./View/automovilE')
}
controller.automovilF=(request, response) => {
    response.render('./View/automovilF')
}
controller.automovilG=(request, response) => {
    response.render('./View/automovilG')
}
controller.automovilH=(request, response) => {
    response.render('./View/automovilH')
}
controller.automovilI=(request, response) => {
    response.render('./View/automovilI')
}
controller.automovilJ=(request, response) => {
    response.render('./View/automovilJ')
}
controller.automovilK=(request, response) => {
    response.render('./View/automovilK')
}
controller.alquilerPost=(request, response) => {
    console.log('Si llego')
    console.log(request.body);
    response.send(request.body)
}

controller.compraPost=(request, response) => { 


}


module.exports=controller;