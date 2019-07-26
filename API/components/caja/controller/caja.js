const { caja } = require('../../db/db.mariadb.config');
const { entrada } = require('../../db/db.mariadb.config');
const { salida } = require('../../db/db.mariadb.config');

//const cajaService = require('../service/caja');
//const entradaService = require('../service/entrada');
//const salidaService = require('../service/salida');
const _ = require('lodash');

/* CAJA */
    /* GET ALL */
    exports.all_cajas = async function (req, res, next) {
        try{
            const cajasList = await caja.findAll();
            if(cajasList.length > 0)
                return res.send({
                    ok:true,
                    cajasList
                });
            return res.send('alumns not found');
        }catch (e) {
            return res.status(400).send({
                ok: false,
                message: e.errors[0].message
            });
        }
    };

    /* ADD ONE */
    exports.insert_caja = async function (req, res, next) {
        //const { error } = alumnService.validateAlumn(req.body);
        //if(error) return res.status(400).send(error.details[0].message);
        let caja = await alumno.findAll({where:{dni:req.body.dni}});
        if(alumn.length > 0) return res.status(400).send({
            ok:false,
            menssage:'Ya hay un alumno con el dni asignado'
        });
        let result = null, cont = 0;
        while(result == null && cont <=3){
            try{
                let maxId = await alumno.sequelize.query("select max(id) from alumnos");
                maxId = maxId[0][0].max;
                maxId +=1 ;
                req.body.id = maxId;
                result = await alumno.create(req.body);
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
    exports.update_caja = async function (req, res, next) {
        //const { error } = alumnService.validateAlumn(req.body);
        //if(error) return res.status(400).send(error.details[0].message);
        try {
            let result = await alumno.update(req.body,{where: {id:req.params.id}});
            return res.send({
                ok: true,
                menssage: `${ result } records updated`
            });
        }catch (e) {
            return res.status(400).send({
                ok: false,
                menssage: `can't update record: ${e.errors[0].message}`
            });
        }
    };

    /* DELETE ONE (desactivar)*/
    exports.delete_caja = async function(req, res, next){
        try {
            let result = await alumno.update({activo:false},{where:{id:req.params.id}});
            //console.log(result);
            return res.send({
                ok:true,
                menssage: `${result} alumns deleted`
            });
        }catch (e) {
            return res.status(400).send({
                ok:false,
                menssage:`no se puede desactivar/borrar el alumno: ${e.errors[0].message}`
            });
        }
    };

    /* GET ONE */
    exports.show_caja = async function (req, res, next) {
        try {
            let result = await alumno.findOne({
                where: {
                    id: req.params.id
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
            if(!result) return res.send({
                ok: false,
                menssage:'Usuario no encontrado'
            });
            //console.log(result);
            return res.send({
                ok: true,
                result
            });
        }catch (e) {
            return res.status(400).send({
                ok: false,
                message: e.errors[0].message
            });
        }
    };


/* ENTRADAS */

    /* GET ALL ENTRADAS OF ONE CAJA */
    exports.all_entradas_cajas = async function (req, res, next) {
        try {
            /* TODO falta verificacion del usuario a ese id_caja */

            /* obtengo la caja deseada */
            const caja = await alumno.findOne({ where:{id_caja:req.params.id_caja}/*,include:['locations']*/ });
            if(!caja) return res.status(404).send({ ok:false, message: "caja no encontrada" });

            /* si existe caja y pertenece al usuario traigo todas las entradas */
            const entradas = await entrada.find({ where:{ id_caja: caja.id_caja }/*,include:['locations']*/ });
            if(!caja) return res.status(404).send({ ok:false, message: "cajas no encontrada" });

            return res.send({ ok:true, caja, entradas });
        }catch (e) {
            return res.status(400).send({ ok: false, message: e.errors[0].message });
        }
    };

    /* ADD ONE (ENTRADA) IN CAJA */
    exports.alumn_add_locations = async function (req, res, next) {

        /* TODO falta verificacion del usuario a ese id_caja  y datos a mandar para la creacion */

        const la_caja = await caja.findOne({ where:{id_caja:req.params.id_caja}});
            /* TODO  verificar que no se pueda duplicar entradas*/
            try{
                let maxId = await entrada.sequelize.query("select max(id_entrada) from entradas");
                maxId = maxId[0][0].max;
                maxId +=1;
                req.body.id_entrada = maxId;
                req.body.id_caja = la_caja.id_caja;
                let result = await entrada.create(req.body);
            }catch (e) {
                cont += 1;
            }

        if(cont > 3){
            return res.status(400).send({ok: false, message: "server does not respond please try again"});
        }
        if(result){
            return res.send({ok:true,result});
        }else{
            return res.status(400).send({ok: false, message: "no se pudo crear"});
        }
    };
/* TODO FALTA HACER EL REMOVE Y CONTINUAR CON LAS SALIDAS */
/*
    exports.alumn_remove_locations = async function (req, res, next) {
        try{
            let alumn = await alumno.findOne({
                where:{id_alumn:req.params.id},
                include:['locations']
            });
            if(!alumn) return res.status(404).send("alumn not found");
            if(req.body.locations.length){
                for(let i=0; i<req.body.locations.length; i++)
                {
                    let dl = await locations.destroy({
                        where:{
                            id_alumn: alumn.id_alumn,
                            id_location: req.body.locations[i]
                        }
                    });
                    console.log(dl);
                }
            }
            alumn = await alumno.findOne({
                where:{id_alumn:req.params.id},
                include:['locations']
            });
            return res.json({message:"locations removed",alumn:alumn});
        }catch (e) {
            return res.status(400).send(e.errors[0].message);
        }
    };

*/