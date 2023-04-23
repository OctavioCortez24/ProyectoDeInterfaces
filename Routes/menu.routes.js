const express = require('express');
const router= express.Router();
//const {tieneAcceso()}=require('../')

const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)
router.get('/menu', controller.menuPrincipal)
router.get('/alquiler', controller.alquiler)
router.get('/compras',controller.compras)
<<<<<<< HEAD
router.get('/automovilA',controller.automovilA)
router.get('/automovilB',controller.automovilB)
router.get('/automovilC',controller.automovilC)
router.get('/automovilD',controller.automovilD)
router.get('/automovilE',controller.automovilE)
router.get('/automovilF',controller.automovilF)
router.get('/automovilG',controller.automovilG)
router.get('/automovilH',controller.automovilH)
router.get('/automovilI',controller.automovilI)
router.get('/automovilJ',controller.automovilJ)
router.get('/automovilK',controller.automovilK)
router.post('/ConsultaPost',controller.ConsultaPost)
=======
router.post('/alquilerPost',controller.alquilerPost)
>>>>>>> f3c6742e3ed4f0b83039dd1dd32ce5d84e377c1c

module.exports=router;