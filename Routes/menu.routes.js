const express = require('express');
const router= express.Router();


const controller=require('../Controller/menu.controller')
//Menu principal
router.get('/', controller.menu)



module.exports=router;