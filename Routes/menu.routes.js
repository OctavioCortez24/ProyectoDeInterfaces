const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')

const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)
router.get('/menu',tieneAcceso, controller.menuPrincipal)
router.get('/alquiler', controller.alquiler)
router.get('/compras',controller.compras)

router.post('/alquilarPost',controller.alquilerPost)
router.post('/compraPost',controller.compraPost)

router.get("/pagar", controller.Pagar)

module.exports=router;