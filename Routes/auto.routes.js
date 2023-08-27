const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')

const controller=require('../Controller/auto.controller')

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
router.get('/getAutos',controller.getCars)

module.exports=router;