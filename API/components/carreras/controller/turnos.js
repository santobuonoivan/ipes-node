const { turnos } = require('../../db/db.mariadb.config');
//const turnosService = require('../services/turnosService');
const _ = require('lodash');


/* ADD ONE */
exports.insert_turno = async function (req, res, next) {
    //const { error } = turnosService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await turnos.sequelize.query("select max(id) from turnos");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await turnos.create(req.body);
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
exports.update_turno = async function (req, res, next) {
    //const { error } = turnoService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await turnos.update( req.body,{ where:{ id: parseInt( req.body.id )}});
        return res.send({ ok: true, menssage: `${ result } records updated` });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            menssage: `can't update record: ${e.errors[0].message}`
        });
    }
};

/* DELETE ONE (desactivar)*/
exports.delete_turno = async function(req, res, next){
    try {
        let result = await turnos.destroy({ where:{ id: parseInt( req.params.id )}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} turnos deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar el turno: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_turno = async function (req, res, next) {
    try {
        let turno = await turnos.findOne({
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
        if(!turno) return res.send({ ok: false, menssage:'turno no encontrada' });
        //console.log(result);
        return res.send({ ok: true, turno });
    }catch (e) {
        return res.status(400).send({ ok: false, message: e.errors[0].message });
    }
};