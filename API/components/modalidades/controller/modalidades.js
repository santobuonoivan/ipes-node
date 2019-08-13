const { modalidades } = require('../../db/mariadb.config');
//const alumnService = require('../services/alumnService');
const _ = require('lodash');


/* GET ALL */
exports.all_modalidades= async function (req, res, next) {
    try{
        const modalidadesList = await modalidades.findAll();
        if(modalidadesList.length > 0)
            return res.send({
                ok:true,
                modalidadesList
            });
        return res.send('modalidades not found');
    }catch (e) {
        return res.status(400).send({error: e.errors[0].message});
    }
};

/* ADD ONE */
exports.insert_modalidad = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await modalidades.sequelize.query("select max(id) from modalidades");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await modalidades.create(req.body);
        }catch (e) { cont += 1; }
    }
    if(cont > 3){ return res.status(400).send({ ok:false, menssage:"el servidor no puede responder, vuelva a intentarlo" }); }
    if(result){ return res.send({ ok:true, result })}
};

/* UPDATE ONE */
exports.update_modalidad = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await modalidades.update(req.body,{where: {id:req.params.id}});
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
exports.delete_modalidad = async function(req, res, next){
    try {
        let result = await modalidades.destroy({where:{id:req.params.id}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} modalidad deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar el modalidad: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_modalidad = async function (req, res, next) {
    try {
        let result = await modalidades.findOne({
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
            menssage:'modalidad no encontrada'
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