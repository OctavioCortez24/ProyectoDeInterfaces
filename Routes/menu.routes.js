const express = require('express');
const router= express.Router();


const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)

//Login de la aplicación
router.get('/login',controller.login)

//Registro de la aplicación
router.get('/register',controller.register)
router.post('/registerPost',controller.registerPost)



module.exports=router;