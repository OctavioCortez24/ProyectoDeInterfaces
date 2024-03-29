
const controller={};
const modelo=require('../Model/autos.model')
const modeloAlquiler=require('../Model/alquiler.model')
const PDF = require("pdfkit-construct")
const modeloUser=require('../Model/user.model')
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
controller.menu=(request,response)=>{
    response.render('./View/Administracion/menu.ejs')
}
controller.getCliente=(req, res)=>{

    const id=JSON.parse(req.query.datos)
    const user=modeloUser.getDatosUserConID(id.idUsuario);
    res.send(JSON.stringify(user))
}
controller.creearFactura=(request, response)=>{
 
   const pedido=JSON.parse(request.query.datos);
   const user=modeloUser.getDatosUserConID(pedido.idUsuario);
   modeloAlquiler.guardarNumeroDeComprobante()
   
   const doc = new PDF({ bufferPages: true });

   const filename = `Factura${Date.now()}.pdf`;

   const stream = response.writeHead(200, {
       "Content-Type": "aplication/pdf",
       'Content-Disposition': `dattachment; filename=${filename}`

   });
   doc.on('data', (data) => { stream.write(data) });
   doc.on('end', () => { stream.end() });
   doc.lineJoin('miter').rect(10, 19,592, 755).stroke();

   const fechaActual = new Date();
   doc.setDocumentHeader({
       height: '29.75%',

   }, () => {
       //Original cuadro y texto 
       doc.fontSize(16).text('ORIGINAL', 259, 32, {
           width: 420,
           border: { size: 5, color: 'black' }
       });


       doc.lineJoin('miter')
           .rect(15, 25, 582, 25)
           .stroke();
       //--------------------------

       doc.fontSize(19).fillColor('black').text('FACTURA', 330, 60, {
           stroke: false,
           border: { size: 5, color: 'black' }
       });


       doc.fontSize(12);


       //Cuadrado Derecho
       doc.rect(301.4, 55, 296, 0)//Linea superior Izquierda
       doc.rect(597, 55, 0, 90).lineWidth(1);//Linea recta Izquierda
       doc.rect(301.4, 145, 296, 0).lineWidth(1);//Linea inferior Izquierda
       //--------------------
       doc.fontSize(10).text('Punto de Venta:', 330, 80, {
           border: { size: 5, color: 'black' }
       })
       doc.fontSize(10).text('Comp.Nro: ', 470, 80, {
           border: { size: 5, color: 'black' }
       })

       doc.text('Fecha Emisión: ' + fechaActual.toLocaleDateString(), 330, 92, {
           border: { size: 5, color: 'black' }
       })
       doc.text('CUIT: 30-68537634-9', 330, 110, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Ingresos Brutos:', 330, 120, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Fecha de Inicio de Actividades:', 330, 130, {
           border: { size: 5, color: 'black' }
       })

       //Cuadrado Izquierdo
       doc.rect(15, 55, 286, 0)//Linea superior Izquierda
       doc.rect(15, 55, 0, 90).lineWidth(1);//Linea recta Izquierda
       doc.rect(15, 145, 286, 0).lineWidth(1);//Linea inferior Izquierda
       doc.rect(301.4, 145, 0, -40).lineWidth(1);//Linea recta Derecha
       //----------------
       doc.text('Razon Social: Autos.Inc', 25, 90, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Condición frente al IVA: Responsable Inscripto', 25, 130, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Domicilio Comercial: Colonia Segovia El banco 8230', 25, 110, {
           border: { size: 5, color: 'black' }
       })

       //Cuadrado Izquierdo SUperior
       doc.fontSize(10.5).text('Periodo de Facturado Desde: ' + fechaActual.toLocaleDateString(), 25, 157);
       doc.fontSize(10.5).text('Hasta: ' + fechaActual.toLocaleDateString(), 244, 157);
       doc.fontSize(10.5).text('Fecha de Vto. para el pago: ' + fechaActual.toLocaleDateString(), 350, 157)

       doc.lineJoin('miter')
           .rect(15, 150, 582, 25)
           .stroke();
       //---------------------------------------
       doc.text('CUIT: '+user.cuil, 25, 184, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Condición frente al IVA: '+user.IVA, 25, 204, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Condición de venta: ', 25, 224, {
           border: { size: 5, color: 'black' }
       })

       doc.text('Apellido y Nombre/ Razón Social: '+user.nombreApe, 244, 184, {
           border: { size: 5, color: 'black' }
       })
       doc.text('Domicilio: '+user.domicilio, 354, 204, {
           border: { size: 5, color: 'black' }
       })
       doc.lineJoin('miter')
           .rect(15, 180, 582, 60)
           .stroke();

       //Cuadradito del medio
       //Cuadradito del medio

       doc.fontSize(35).text('B', 291, 65, {
           fill: true,
       });
       //----------------
       doc.lineJoin('miter').rect(277, 55, 50, 50).stroke();
       //----------------


   });

   doc.setDocumentFooter({
       height: '50%',
   }, () =>{
       doc.addTable([
           { key: 'codigo', label: 'Codigo', align: 'center' },
           { key: 'p_servicio', label: 'Producto/Servicio', align: "center" },
           { key: 'cantidad', label: 'Cantidad', align: "center" },
           { key: 'precioUni', label: 'Precio Unitario', align: "center" },
           { key: 'boni', label: '% Bonif', align: "center" },
           { key: 'impuestoBoni', label: 'Impuesto Bonificación', align: "center" },
           { key: 'subtotal', label: 'Sub Total', align: "center" }
   
       ], [
   
           {
               codigo: '1',
               p_servicio: pedido.vehiculo,
               cantidad: '1',
               precioUni: pedido.precio,
               boni: 'no',
               impuestoBoni: 'no',
               subtotal: pedido.precio
           }
       ], {
   
           headBackground: '#DEDCDC',
           border: { size: 1, color: null },
           width: "fill_body",
           striped: true,
           stripedColors: ["white", "white"],
           cellsPadding: 10,
           marginLeft: 5,
           marginRight: 5,
           cellsAlign: 'center',
           headBorder: true
   
       })
       doc.fontSize(12);
       doc.text('Subtotal: $0', 365, 616, {
           border: { size: 5, color: 'black' }
       });
       doc.text('Importe Otros Tributos: $0', 291, 628, {
           border: { size: 5, color: 'black' }
       });
       doc.text('Importe Total: $'+pedido.precio, 340, 640, {
           border: { size: 5, color: 'black' }
       });
   
       //Cuadradito del final
       doc.lineJoin('miter')
           .rect(15, 595, 582, 60)
           .stroke();
       //---------------------------------------
       //----------------
       doc.fontSize(25).text('AFIP', 27, 690, {
           stroke: true,
           oblique: true,
           border: { size: 5, color: 'black' }
       });
       //Cuadradito del final-Mediano
       doc.lineJoin('miter')
           .rect(15, 660, 582, 25)
           .stroke();
       //---------------------------------------
   })



   doc.render();
   doc.end();

}

module.exports=controller;