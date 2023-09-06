const modelo = {};
const Clases = require('../Class')
const GoogleSheet = require('./Google Sheet/GoogleSheet.js');
var alquileres = [];

const loadUsers = async () => {
    const registros = await GoogleSheet.requerirRegistros(2);

    for (let i = 0; i < registros.length; i++) {
        var alquilerJSON = JSON.parse(registros[i].alquiler)//Recupero el usuario desde la hoja de calculo
        alquileres.push(alquilerJSON)
    }
}
loadUsers()

console.log(alquileres)
modelo.saveAlquiler = (atributosAlquiler) => {
    var autoValores=JSON.parse(atributosAlquiler.eleccion);

    var eleccion = autoValores.modelo;
    var precioAuto=autoValores.precio;
    var idUser = atributosAlquiler.usuario;
    var fechaSalida = atributosAlquiler.fechaSalida;
    var fechaRegreso = atributosAlquiler.fechaRegreso;
    const alquiler = new Clases.alquiler(idUser,precioAuto, fechaSalida, fechaRegreso, eleccion)
  
    saveAlquilerGoogleSheet(alquiler)

}
async function saveAlquilerGoogleSheet(alquiler) {
    var objeto = { "alquiler": '' + JSON.stringify(alquiler) + '' }//Pongo el formato para poder guardar el usuario
    var numeroHoja = 2;//Es la hoja en la cual se van a guardar los datos
    await GoogleSheet.guardarDatos(numeroHoja, objeto);

}
modelo.enviarPedidos=()=>{
    
    return alquileres;
}

module.exports = modelo;