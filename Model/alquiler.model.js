const modelo = {};
const Clases = require('../Class');
const { alquiler } = require('../Controller/alquiler.controller');
const GoogleSheet = require('./Google Sheet/GoogleSheet.js');
var alquileres = [];

const loadAlquiler = async () => {
    const registros = await GoogleSheet.requerirRegistros(2);

    for (let i = 0; i < registros.length; i++) {
        var alquilerJSON = JSON.parse(registros[i].alquiler)//Recupero el usuario desde la hoja de calculo
        const existe=alquileres.reduce((acum,item)=>acum+(JSON.stringify(item)==JSON.stringify(alquilerJSON)), false)
        if(!existe){
            alquileres.push(alquilerJSON)
        }
      
        //console.log(existe)
    }
}
loadAlquiler()
modelo.guardarNumeroDeComprobante=()=>{
    var nComprobante=0
    saveNumeroDeComprobanteGoogleSheet(nComprobante)
}
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
async function saveNumeroDeComprobanteGoogleSheet(nComprobante){
    var objeto = Number.parseInt(nComprobante)//Pongo el formato para poder guardar el usuario
   
    var numeroHoja = 3;//Es la hoja en la cual se van a guardar los datos
    await GoogleSheet.modificarDatos(numeroHoja, 1, objeto);
}

modelo.enviarPedidos=()=>{
   loadAlquiler()
    return alquileres;
}

module.exports = modelo;