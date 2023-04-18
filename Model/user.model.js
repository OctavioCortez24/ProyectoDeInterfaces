const modelo = {};
const modeloA={};
const Clases = require('../Class')
const GoogleSheet = require('./Google Sheet/GoogleSheet.js')
var users = []
var alquiler=[]

const loadUsers = async () => {
    const registros = await GoogleSheet.requerirRegistros(0);

    for (let i = 0; i < registros.length; i++) {
        var userJSON = JSON.parse(registros[i].user)//Recupero el usuario desde la hoja de calculo

        users.push(userJSON);

    }
}
loadUsers();//Activo la funcion asincrona

modelo.saveUser = (atributosUsuario) => {
    var nameUser = atributosUsuario.name;
    var surnameUser = atributosUsuario.surname;
    var emailUser = atributosUsuario.email;
    var passwordUser = atributosUsuario.password;
    var dateOfBirthUser = atributosUsuario.dateOfBirth;
    var user = new Clases.user(nameUser, surnameUser, emailUser, passwordUser, dateOfBirthUser)


    var validacion = users.reduce((acumulador, userItem) => {
        return acumulador = acumulador || ( userItem.email == user.getEmail());
    }, false)

    //Terimina de comprobar

    if (!validacion) {

        users.push(user);
        saveUserGoogleSheet(user)//Funcion asincrona para guardar el usuario en el Exel de google

    } else {

        console.log('No se guardo porque hay uno igual');
    }

}
// creo funcion para crar el objeto de solicitud de alquiler
modeloA.guardarPeticion =(atributosAlquiler)=>{
var nombre =atributosAlquiler.nombre;
var Email=atributosAlquiler.email;
var telefono=atributosAlquiler.telefono;
var cars=atributosAlquiler.tipoDeAutomovil;
var fechaA=atributosAlquiler.fechaDeAdquisicion;
var fechaD=atributosAlquiler-dechaDeDevolucion;
var alquilerCars = new Clases.alquiler(nombre,Email,telefono,cars,fechaA,fechaD)
}


async function saveUserGoogleSheet(user) {
    var objeto = { "user": '' + JSON.stringify(user) + '' }//Pongo el formato para poder guardar el libro
    var numeroHoja = 0;//Es la hoja en la cual se van a guardar los datos
    await GoogleSheet.guardarDatos(numeroHoja, objeto);
}

modelo.validacion=function comprobarDatos(email, password){
    var validacion=false;
    for(var i=0;i<users.length;i++){
       if(users[i].email==email && users[i].password==password){
        validacion=true;
        break;
       }
    }

    return validacion;
}
module.exports = modelo;