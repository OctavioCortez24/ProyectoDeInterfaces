const controller = {};
const modeloUsuarios = require("../Model/user.model")
const controladorDeUsuarios = require("../Controller/user.controller")
const PDF = require("pdfkit-construct")
controller.alquiler = (request, response) => {
    var usuarios = modeloUsuarios.enviarUsuariosClientes();
    var stringUsuarios = "";
    for (var i = 0; i < usuarios.length; i++) {
        stringUsuarios += "<option value='" + JSON.stringify(usuarios[i].id) + "'>" + usuarios[i].cuil + "</option>";
    }

    response.render('./View/alquiler', { usuarios: stringUsuarios });
}

controller.alquilerPost = (request, response) => {
    //request.body.iDK="Lorezo"
    request.body.usuario = controladorDeUsuarios.id
    response.send(request.body);
    //response.redirect("/pagar")

}


controller.alquilerFactura = async (request, response) => {
    const doc = new PDF({ bufferPages: true });

    const filename = `Factura${Date.now()}.pdf`;

    const stream = response.writeHead(200, {
        "Content-Type": "aplication/pdf",
        'Content-Disposition': `dattachment; filename=${filename}`

    });
    doc.on('data', (data) => { stream.write(data) });
    doc.on('end', () => { stream.end() });

    /* const platos = [
         {
             nro: 1,
             descripcion: "Charque",
             precio: 13.5,
             cantidad: 3,
             subtotal: 37.5
         },
         {
             nro: 2,
             descripcion: "Sarque",
             precio: 14.5,
             cantidad: 5,
             subtotal: 40.5
         }
     ];*/


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
        doc.lineJoin('miter')
            .rect(301.4, 55, 296, 90)
            .stroke();
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
        doc.text('CUIT:', 330, 110, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Ingresos Brutos:', 330, 120, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Fecha de Inicio de Actividades:', 330, 130, {
            border: { size: 5, color: 'black' }
        })

        //Cuadrado Izquierdo
        doc.lineJoin('miter')
            .rect(15, 55, 286, 90)
            .stroke();
        //----------------
        doc.text('Razon Social:', 25, 90, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Condición frente al IVA:', 25, 130, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Domicilio Comercial:', 25, 110, {
            border: { size: 5, color: 'black' }
        })


        doc.fontSize(10.5).text('Periodo de Facturado Desde: ' + fechaActual.toLocaleDateString(), 25, 157);
        doc.fontSize(10.5).text('Hasta: ' + fechaActual.toLocaleDateString(), 244, 157);
        doc.fontSize(10.5).text('Fecha de Vto. para el pago: ' + fechaActual.toLocaleDateString(), 350, 157)

        doc.lineJoin('miter')
            .rect(15, 150, 582, 25)
            .stroke();
        //---------------------------------------
        doc.text('CUIT:', 25, 184, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Condición frente al IVA:', 25, 204, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Condición de venta:', 25, 224, {
            border: { size: 5, color: 'black' }
        })

        doc.text('Apellido y Nombre/ Razón Social:', 244, 184, {
            border: { size: 5, color: 'black' }
        })
        doc.text('Domicilio:', 354, 204, {
            border: { size: 5, color: 'black' }
        })
        doc.lineJoin('miter')
            .rect(15, 180, 582, 60)
            .stroke();

        //Cuadradito del medio
        doc.lineJoin('miter').rect(277, 55, 50, 50).fillOpacity(1).fillAndStroke("white", "black").stroke();
        //----------------


    });


    doc.addTable([
        { key: 'codigo', label: 'Codigo', align:'center' },
        { key: 'p_servicio', label: 'Producto/Servicio', align: "center" },
        { key: 'cantidad', label: 'Cantidad', align: "center" },
        { key: 'precioUni', label: 'Precio Unitario', align: "center" },
        { key: 'boni', label: '% Bonif', align: "center" },
        { key: 'impuestoBoni', label: 'Impuesto Bonificación', align: "center" },
        { key: 'subtotal', label: 'Sub Total', align: "center" }

    ], [

        {
            codigo: '1',
            p_servicio: 'Ejemplo',
            cantidad: '1',
            precioUni: '50',
            boni: 'no',
            impuestoBoni: 'no',
            subtotal: '599'
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
        cellsAlign : 'center',
        headBorder: true

    })



    doc.fontSize(19).text('AFIP', 27, 390, {
        stroke: true,
        oblique: true,
        border: { size: 5, color: 'black' }
    });



    doc.render();
    doc.end();


}
module.exports = controller;