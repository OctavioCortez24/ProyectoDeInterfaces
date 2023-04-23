const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser('secreto'));

app.use(session({
    secret: 'Secreto',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

const modeloUser = require('./Model/user.model') //Quitar esto Despues

passport.use(new PassportLocal(function (username, password, done) {

    var validation = modeloUser.validacion(username, password);
    
    if (validation) {
        var idUSer=modeloUser.getIdUser(username, password);
        
        return done(null, { id: idUSer, name: username })
    } else {
        done(null, false)
    }
}))

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    done(null, id)
})
app.set('view engine', 'ejs');//Motor de vista
app.set('views', __dirname, '/View');//Direccion de la carpetas con las vistas

app.use(require('./Routes/menu.routes.js'))//Rutas del menu

app.use(require('./Routes/user.routes.js'))//Rutas del usuario



//Mostrar Puerto-----------------------------------
app.listen(port, () => {
    console.log(`Express listen on port ${port}!`);
});