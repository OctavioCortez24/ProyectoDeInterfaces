const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')
const {enlace}=require('../Helpers/auth')

const controller=require('../Controller/admin.controller')
router.get('/administracion', controller.menu)
router.get('/facturarPedido', controller.facturar)
router.post('/facturarPedido',controller.creearFactura)
router.get('/anadirAuto', controller.anadirAuto)
router.post('/anadirAutoPost', controller.anadirAutoPost)

module.exports=router;