const express = require('express');
const router= express.Router();
const {tieneAcceso}=require('../Helpers/auth')


const controller=require('../Controller/user.controller')
//Login de la aplicación
router.get('/login',controller.login)
router.post('/loginPost',controller.verificarCuil, controller.getUser,controller.loginPost, function(req, res){
   console.log(JSON.stringify(req.body))
    var enlace=controller.enlace
    var url=(enlace!=null)?enlace:'/'
    if(req.body.username=="administracionConsecionario@gmail.com"){
        res.redirect('/administracion')
    }else if(req.body.username=="facturacionConsecionario@gmail.com"){
        res.redirect('/facturarPedido')
    }else{
        res.redirect(url)
    }
   
    
 })

//Registro de la aplicación
router.get('/register',controller.register)
router.post('/registerPost',controller.registerPost)




module.exports=router;