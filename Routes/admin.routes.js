const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')
const {enlace}=require('../Helpers/auth')

const controller=require('../Controller/admin.controller')
router.get('/administracion',tieneAcceso, controller.menu)
router.get('/facturarPedido', tieneAcceso,controller.facturar)
router.get('/facturar/',controller.creearFactura)
router.get('/anadirAuto', controller.anadirAuto)
router.post('/anadirAutoPost', controller.anadirAutoPost)
router.get('/menu', controller.menu)
router.get('/getCliente/',controller.getCliente)

module.exports=router;