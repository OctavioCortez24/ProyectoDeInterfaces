
const controller={};


controller.menu=(request, response)=>{
    response.render('./View/Administracion/menu.ejs')
    
}

controller.facturar=(request, response)=>{

    response.render('./View/Administracion/facturar.ejs')
}

module.exports=controller;