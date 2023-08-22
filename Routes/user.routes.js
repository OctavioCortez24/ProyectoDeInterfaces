const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')


const controller=require('../Controller/user.controller')
//Login de la aplicación
router.get('/login',controller.login)
router.post('/loginPost',controller.verificarCuil, controller.getUser,controller.loginPost, function(req, res){
   
    var enlace=controller.enlace
    var url=(enlace!=null)?enlace:'/'
    res.redirect(enlace)
 })

//Registro de la aplicación
router.get('/register',controller.register)
router.post('/registerPost',controller.registerPost)




module.exports=router;