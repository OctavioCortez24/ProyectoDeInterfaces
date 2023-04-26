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
    
    response.redirect("/pagar")

}

controller.compraPost=(request, response) => { 


}

controller.Pagar=(request, response) => {
    response.render('./View/pago')
}


module.exports=controller;