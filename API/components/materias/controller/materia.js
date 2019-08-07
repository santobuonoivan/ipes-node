const { materia } = require('../../db/mariadb.config');
//const alumnService = require('../services/alumnService');
const _ = require('lodash');


/* GET ALL */
exports.all_materias = async function (req, res, next) {
    try{
        const materiasList = await materia.findAll();
        if(materiasList.length > 0)
            return res.send({
                ok:true,
                materiasList
            });
        return res.send('materias not found');
    }catch (e) {
        return res.status(400).send({error: e.errors[0].message});
    }
};

/* ADD ONE */
exports.insert_materia = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let materias = await materia.findAll({where:{id_carrera:req.body.id_carrera, nombre: req.body.nombre}});
    if(materias.length > 0) return res.status(400).send({ ok:false, menssage:'Ya hay una materia para la carrera y nombre asignado' });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await materia.sequelize.query("select max(id) from materias");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await materia.create(req.body);
        }catch (e) { cont += 1; }
    }
    if(cont > 3){ return res.status(400).send({ ok:false, menssage:"el servidor no puede responder, vuelva a intentarlo" }); }
    if(result){ return res.send({ ok:true, result })}
};

/* UPDATE ONE */
exports.update_materia = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await materia.update(req.body,{where: {id:req.params.id}});
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
exports.delete_materia = async function(req, res, next){
    try {
        let result = await materia.destroy({where:{id:req.params.id}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} materia deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar el matria: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_materia = async function (req, res, next) {
    try {
        let result = await materia.findOne({
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
            menssage:'materia no encontrado'
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