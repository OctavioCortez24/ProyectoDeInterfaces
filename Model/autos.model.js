const modelo={};
const Clases = require('../Class')
const GoogleSheet = require('./Google Sheet/GoogleSheet.js')

var autos=[];
const loadCars= async () =>{
    const registros = await GoogleSheet.requerirRegistros(1); 

    for (let i = 0; i < registros.length; i++) {
        var auto = JSON.parse(registros[i].auto)//Recupero el usuario desde la hoja de calculo

        autos.push(auto);

    }
}
loadCars();
modelo.saveCar= (atributosAuto) => {
   var marca=atributosAuto.marca;
   var modelo=atributosAuto.modelo;
   var fechaFabricacion = atributosAuto.fechaFabricacion;
   var precio = atributosAuto.precio;
   var combustible = atributosAuto.combustible;
   var color = atributosAuto.color;
   var ruedas = atributosAuto.ruedas;
   var calefaccion= atributosAuto.calefaccion;
   var seguro = atributosAuto.seguro;
   var personas = atributosAuto.personas;
   var auto = new Clases.auto(marca, modelo, fechaFabricacion, precio, combustible, color, ruedas, calefaccion, seguro, personas)

    var validacion = autos.reduce((acumulador, Item) => {
        return acumulador = acumulador || (Item.email == auto.getId());
    }, false)

    //Terimina de comprobar

    if (!validacion) {
        autos.push(auto)

        saveCarGoogleSheet(auto)//Funcion asincrona para guardar el usuario en el Exel de google

    } else {

        console.log('No se guardo porque hay uno igual');
    }

}

module.exports=modelo;

async function saveCarGoogleSheet(auto) {
    var objeto = { "auto": '' + JSON.stringify(auto) + '' }//Pongo el formato para poder guardar el usuario
    var numeroHoja = 1;//Es la hoja en la cual se van a guardar los datos
    await GoogleSheet.guardarDatos(numeroHoja, objeto);
}
