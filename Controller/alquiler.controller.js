const controller={};


controller.alquiler=(request, response) => {
    response.render('./View/alquiler');
}

controller.alquilerPost=(request, response) => {
    
    response.redirect("/pagar")

}
module.exports=controller;