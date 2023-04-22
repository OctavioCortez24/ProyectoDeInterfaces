const express = require('express');
const router= express.Router();


const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)
router.get('/menu', controller.menuPrincipal)
router.get('/Consulta', controller.Consulta)
router.get('/compras',controller.compras)
router.post('/ConsultaPost',controller.ConsultaPost)

module.exports=router;