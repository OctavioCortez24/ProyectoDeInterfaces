const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')

const controller=require('../Controller/alquiler.controller')

router.get('/alquiler', controller.alquiler)
router.post('/alquilarPost',controller.alquilerPost)


module.exports=router;