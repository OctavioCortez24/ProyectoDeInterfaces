const controller={};
const modeloUsuarios=require("../Model/user.model")
const controladorDeUsuarios=require("../Controller/user.controller")
controller.alquiler=(request, response) => {
    var usuarios= modeloUsuarios.enviarUsuariosClientes();
    var stringUsuarios=""; 
    for (var i=0; i<usuarios.length; i++) {
        stringUsuarios+="<option value='" + JSON.stringify(usuarios[i].id) + "'>" + usuarios[i].cuil + "</option>";
    }
    
    response.render('./View/alquiler',{usuarios:stringUsuarios});
}

controller.alquilerPost=(request, response) => {
    //request.body.iDK="Lorezo"
    request.body.usuario=controladorDeUsuarios.id
    response.send(request.body);
    //response.redirect("/pagar")

}
module.exports=controller;