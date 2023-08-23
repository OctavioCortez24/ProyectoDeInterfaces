
const controller={};
const modelo=require('../Model/autos.model')

controller.menu=(request, response)=>{
    response.render('./View/Administracion/menu.ejs')
    
}

controller.facturar=(request, response)=>{

    response.render('./View/Administracion/facturar.ejs')
}

controller.anadirAuto=(request, response)=>{
    response.render('./View/Administracion/anadirAuto.ejs')
}
controller.anadirAutoPost=(request, response)=>{
  
   modelo.saveCar(request.body)
   response.redirect('/anadirAuto')
}


module.exports=controller;