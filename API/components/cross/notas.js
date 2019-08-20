const { notas } = require('../../db/db.mariadb.config');
//const notasService = require('../services/notasService');
const _ = require('lodash');


/* GET ALL */
exports.all_notas = async function (req, res, next) {
    try{
        const notasList = await notas.findAll({ where:{ idAlumno: parseInt( req.body.idAlumno )} });
        if(notasList.length > 0)
            return res.send({
                ok:true,
                notasList
            });
        return res.send('notas not found');
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

/* ADD ONE */
exports.insert_nota = async function (req, res, next) {
    //const { error } = notasService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let nota = await notas.findAll({where:{ idAlumno: parseInt( req.body.idAlumno), idMateria: parseInt( req.body.idMateria), fecha: parseInt( req.body.fecha) }});
    if(nota.length > 0) return res.status(400).send({ ok:false, menssage:'Ya hay notas para la Materia, alumno y fecha especifica asignado' });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await notas.sequelize.query("select max(id) from notas");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await notas.create(req.body);
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
exports.update_nota = async function (req, res, next) {
    //const { error } = notaService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await notas.update(req.body,{ where:{ id: parseInt( req.body.id )}});
        return res.send({ ok: true, menssage: `${ result } records updated` });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            menssage: `can't update record: ${e.errors[0].message}`
        });
    }
};

/* DELETE ONE (desactivar)*/
exports.delete_nota = async function(req, res, next){
    try {
        let result = await notas.destroy({ where:{ id: parseInt( req.params.id )}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} notas deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar la nota: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_nota = async function (req, res, next) {
    try {
        let result = await notas.findOne({
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
        if(!result) return res.send({
            ok: false,
            menssage:'nota no encontrada'
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