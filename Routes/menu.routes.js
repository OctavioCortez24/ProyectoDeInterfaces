const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')

const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)
//router.get('/menu',tieneAcceso, controller.menuPrincipal) Copiar la funcion tieneAcceso en las demas rutas

router.get('/compras',tieneAcceso,controller.compras)
router.get('/compraPost',controller.compraPost) 

router.get("/pagar", controller.Pagar)
router.post("/pagarPost", controller.PagarPost)

module.exports=router;