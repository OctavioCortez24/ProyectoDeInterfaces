const uuidv4 = require("uuid");
class user {
    constructor( name, surname, email, password, dateOfBirth,pais, provincia, localidad, cuil) {
        this.id =uuidv4.v4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.pais=pais;
        this.provincia=provincia;
        this.localidad=localidad;
        this.cuil=cuil;
    }
    getId(){return this.id}
    setName(name) { this.name = name; }
    getName() { return this.name; }
    setSurname(surname) { this.surname = surname; }
    getSurname() { return this.surname; }
    setEmail(email) { this.email = email; }
    getEmail() { return this.email; }
    setPassword(password) { this.password = password; }
    getPassword() { return this.password; }
    setDateOfBirth(dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    getDateOfBirth() { return this.dateOfBirth; }
    setPais(pais) { this.pais = pais; }
    getPais() { return this.pais; }
    setProvincia(provincia) { this.provincia = provincia; }
    getProvincia() { return this.provincia; }
    setLocalidad(localidad) { this.localidad = localidad}
    getLocalidad() { return this.localidad; }
    setCuil(cuil) { this.cuil = cuil; }
    getCuil() { return this.cuil; }
}
// creo clases para el alquilr de vehiculos Lunes 17/4
class alquiler {
    constructor( idUsuario, tipoDeAutomovil, fechaAdquisitiva, fechaDevolucion, vehiculo) {
        this.idAlquiler =uuidv4.v4();
        this.idUsuario=idUsuario;
        this.tipoDeAutomovil = tipoDeAutomovil;
        this.fechaAdquisitiva = fechaAdquisitiva;
        this.fechaDevolucion = fechaDevolucion;
        this.vehiculo=vehiculo;

    }
    getId() { return this.idAlquiler}
    setTipoDeAutomovil(tipoDeAutomovil) { this.tipoDeAutomovil = tipoDeAutomovil }
    getTipoDeAutomovil() { return this.tipoDeAutomovil }
    setFechaAdquisitiva(fechaAdquisitiva) { this.fechaAdquisitiva = fechaAdquisitiva }
    getFechaAdquisitiva() { return this.fechaAdquisitiva }
    setFechaDevolucion(fechaDevolucion) { this.fecha = fechaDevolucion }
    getFechaDevolucion() { return this.fecha }
    setVehiculo(vehiculo) { this.vehiculo =vehiculo }
    getVehiculo() { return this.vehiculo }

}
class auto{
    constructor(marca, modelo, fechaFabricacion,precio, combustible, color, ruedas, calefaccion, seguro, personas, imagen, cantidad){
        this.id =uuidv4.v4();
        this.marca=marca;
        this.modelo=modelo;
        this.fechaFabricacion=fechaFabricacion;
        this.precio=precio;
        this.combustible=combustible;
        this.color=color;
        this.ruedas=ruedas;
        this.calefaccion=calefaccion;
        this.seguro=seguro;
        this.personas=personas;
        this.imagen=imagen;
        this.cantidad=cantidad;
    }
    getId(){ return this.id}
    setMarca(marca){this.marca=marca}
    getMarca(){return this.marca}
    setModelo(modelo){this.modelo=modelo}
    getModelo(){return this.modelo}
    setFechaFabriicacion(fechaFabriicacion){this.fechaFabriicacion=fechaFabriicacion}
    getFechaFabriicacion(){return this.fechaFabriicacion}
    setPrecio(precio){this.precio=precio}
    getPrecio(){return this.precio}
    setCombustible(combustible){this.combustible=combustible}
    getCombustible(){return this.combustible}
    setColor(color){this.color=color}
    getColor(){return this.color}
    setRuedas(ruedas){this.ruedas=ruedas}
    getRuedas(){return this.ruedas}
    setCalefaccion(calefaccion){this.calefaccion=calefaccion}
    getCalefaccion(){return this.calefaccion}
    setSeguro(seguro){this.seguro=seguro}
    getSeguro(){return this.seguro}
    setPersonas(personas){this.personas=personas}
    getPersonas(){return this.personas}
    setImagen(imagen){this.imagen=imagen}
    getImagen(){return imagen}
    setCantidad(cantidad){this.cantidad=cantidad}
    getCantidad(){return cantidad}
}
module.exports = { user, alquiler, auto }