const controller={};


//const modelo=




//Menu principal
controller.menu=(request, response) => {
    response.render('./View/menu');
}

controller.compras=(request, response) => {
    response.render('./View/compras');
}


controller.compraPost=(request, response) => { 
    var auto=JSON.parse(request.query.auto)
    console.log("Auto----: "+JSON.stringify(auto.nombreAuto1))
    //response.redirect("/pagar");

    response.send('---> '+JSON.stringify(request.query.auto))
}

controller.Pagar=(request, response) => {
    response.render('./View/pago')
}


module.exports=controller;