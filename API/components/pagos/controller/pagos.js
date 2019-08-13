const { pagos } = require('../../db/db.mariadb.config');
//const pagosService = require('../services/pagosService');
const _ = require('lodash');


/* GET ALL */
exports.all_pagos = async function (req, res, next) {
    try{
        const pagosList = await pagos.findAll({ where:{ idAlumno: parseInt( req.body.idAlumno )} });
        if(pagosList.length > 0)
            return res.send({
                ok:true,
                pagosList
            });
        return res.send('pagos not found');
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

/* ADD ONE */
exports.insert_pago = async function (req, res, next) {
    //const { error } = pagosService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let pago = await pagos.findAll({ where:{ idAlumno: parseInt( req.body.idAlumno), concepto: req.body.concepto, fecha: req.body.fecha, importe: req.body.importe }});
    if(pago.length > 0) return res.status(400).send({ ok:false, menssage:'Ya hay pagos para el concepto, alumno, importe y fecha asignado' });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await pagos.sequelize.query("select max(id) from pagos");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await pagos.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send({
            ok:false,
            menssage:"el servidor no puede responder, vuelva a intentarlo"
        });
    }
    if(result){
        console.log(result);
        return res.send({
            ok:true,
            result
        })
    }
};

/* UPDATE ONE */
exports.update_pago = async function (req, res, next) {
    //const { error } = pagoService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await pagos.update( req.body,{ where:{ id: parseInt( req.body.id )}});
        return res.send({ ok: true, menssage: `${ result } records updated` });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            menssage: `can't update record: ${e.errors[0].message}`
        });
    }
};

/* DELETE ONE (desactivar)*/
exports.delete_pago = async function(req, res, next){
    try {
        let result = await pagos.destroy({ where:{ id: parseInt( req.params.id )}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} pagos deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar la pago: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_pago = async function (req, res, next) {
    try {
        let result = await pagos.findOne({
            where: {
                id: parseInt( req.params.id )
                /*
                $or: [
                    {
                        id: {
                            $like: req.param.id
                        }
                    },
                    {
                        dni: {
                            $like: req.param.dni
                        }
                    },
                    {
                        nombre: {
                            $like: '%'+ req.param.nombre+'%'
                        }
                    },
                    {
                        apellido: {
                            $like: '%'+ req.param.apellido +'%'
                        }
                    }
                ]

                 */
            }
        });
        if(!result) return res.send({ ok: false, menssage:'pago no encontrada' });
        //console.log(result);
        return res.send({ ok: true, result });
    }catch (e) {
        return res.status(400).send({ ok: false, message: e.errors[0].message });
    }
};