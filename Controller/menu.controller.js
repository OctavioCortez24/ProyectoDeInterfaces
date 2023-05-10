const controller={};


//const modelo=




//Menu principal
controller.menu=(request, response) => {
    response.render('./View/menu');
}
controller.menuPrincipal=(request, response) => {
    response.render('./View/menuPrincipal');
}

controller.compras=(request, response) => {
    response.render('./View/compras');
}


controller.compraPost=(request, response) => { 

    response.redirect("/pagar");
}

controller.Pagar=(request, response) => {
    response.render('./View/pago')
}


module.exports=controller;