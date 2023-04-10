class user{
    constructor(name, surname, email, password, dateOfBirth){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.password=password;
        this.dateOfBirth=dateOfBirth;
    }
    setName(name){this.name=name;}
    getName(){return this.name;}
    setSurname(surname){this.surname=surname;}
    getSurname(){return this.surname;}
    setEmail(email){this.email=email;}
    getEmail(){return this.email;}
    setPassword(password){this.password=password;}
    getPassword(){return this.password;}
    setDateOfBirth(dateOfBirth){this.dateOfBirth=dateOfBirth;}
    getDateOfBirth(){return this.dateOfBirth;}
}

module.exports={user}