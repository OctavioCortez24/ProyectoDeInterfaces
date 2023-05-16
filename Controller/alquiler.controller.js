const controller={};
const modeloUsuarios=require("../Model/user.model")

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
  
    response.redirect("/pagar")

}
module.exports=controller;