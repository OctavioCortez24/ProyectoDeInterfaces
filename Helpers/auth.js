const modelo = require("../Model/user.model");

const helpers={};
const controllerUsuario=require('../Controller/user.controller')
helpers.tieneAcceso=(request, response, next) =>{
    

    controllerUsuario.enlaceAnterior(request.url)
    if(request.isAuthenticated()){
        
        
        return next();
    }
    
    response.redirect("/login");
}


module.exports=helpers;