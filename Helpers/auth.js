const modelo = require("../Model/user.model");

const helpers={};

helpers.tieneAcceso=(request, response, next) =>{
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}

module.exports=helpers;