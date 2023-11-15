const controller={};
const modelo=require('../Model/autos.model')
controller.automovilA=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilA',{"auto":'{"nombreAuto":"Toyota Corolla","precio":"25000"} '});
}
controller.automovilB=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilB',{"auto":'{"nombreAuto":"Toyota Hilux- SRX 2019 | Diesel","precio":"30000"}'})
}
controller.automovilC=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilC',{"auto":'{"nombreAuto":"Chevrolet S-10 4X2 | 2013","precio":"23000"}'})
}
controller.automovilD=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilD',{"auto":'{"nombreAuto":"Ferrari 2015 | Nafta","precio":"300000"}'})
}
controller.automovilE=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilE',{"auto":'{"nombreAuto":"Audi R8 2015 | Nafta","precio":"10000"}'})
}
controller.automovilF=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilF',{"auto":'{"nombreAuto":"BMW Serie 5","precio":"27000"}'})
}
controller.automovilG=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilG',{"auto":'{"nombreAuto":"Ford Ranger C/D 4x2 XLS 2018 | Diesel","precio":"15000"}'})
}
controller.automovilH=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilH',{"auto":'{"nombreAuto":"Fiat Toro Ranch 2.0TDI 4x4 AT","precio":"28000"}'})
}
controller.automovilI=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilI',{"auto":'{"nombreAuto":"Lamborghini Veneno","precio":"105000"}'})
}
controller.automovilJ=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilJ',{"auto":'{"nombreAuto":"Toyota Hilux (L21) 2.8 D/C 4X4 TDI Conquest AT6","precio":"40000"}'})
}
controller.automovilK=(request, response) => {
    response.render('./View/AutosParaMostrar/automovilK',{"auto":'{"nombreAuto":"Mercedes Benz Clase C 200 Avantgarde AT","precio":"35000"}'})
}

controller.getCars=(req, res)=>{
   const autos= modelo.enviarAutos();


   res.json(autos)
}

module.exports=controller;