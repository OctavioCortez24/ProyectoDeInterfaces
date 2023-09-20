const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')
const {enlace}=require('../Helpers/auth')

const controller=require('../Controller/alquiler.controller')

router.get('/alquiler',tieneAcceso,controller.alquiler)
router.post('/alquilarPost',controller.alquilerPost)

router.get('/getFacturaAlquiler', controller.alquilerFactura)

router.get('/pedidosAquiler',controller.enviarPedidosAlquiler)


module.exports=router;