class user {
    constructor(name, surname, email, password, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
    }
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
}
// creo clases para el alquilr de vehiculos Lunes 17/4
class alquiler {
    constructor(nombre, email, telefono, tipoDeAutomovil, fechaAdquisitiva, fechaDevolucion) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.tipoDeAutomovil = tipoDeAutomovil;
        this.fechaAdquisitiva = fechaAdquisitiva;
        this.fechaDevolucion = fechaDevolucion;

    }
    setNombre(nombre) { this.nombre = nombre; }
    getNombre() { return this.nombre; }
    setEmail(email) { this.email = email; }
    getEmail() { return this.email; }
    setTelefono(telefono) { this.telefono = telefono }
    getTelefono() { return this.telefono; }
    setTipoDeAutomovil(tipoDeAutomovil) { this.tipoDeAutomovil = tipoDeAutomovil }
    getTipoDeAutomovil() { return this.tipoDeAutomovil }
    setFechaAdquisitiva(fechaAdquisitiva) { this.fechaAdquisitiva = fechaAdquisitiva }
    getFechaAdquisitiva() { return this.fechaAdquisitiva }
    setFechaDevolucion(fechaDevolucion) { this.fecha = fechaDevolucion }
    getFechaDevolucion() { return this.fecha }

}
module.exports = { user, alquiler }