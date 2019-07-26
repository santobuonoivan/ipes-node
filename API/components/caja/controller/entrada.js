const { entrada } = require('../../db/db.mariadb.config');

//const entradaService = require('../service/entrada');
const _ = require('lodash');


/* GET ALL */
exports.all_entradas = async function (req, res, next) {
    try{
        const entradasList = await entrada.findAll();
        if(entradasList.length > 0)
            return res.send({
                ok:true,
                entradasList
            });
        return res.send({
            ok:false,
            message: 'no hay entradas registradas'
        });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};

/* ADD ONE */
exports.insert_entrada = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let entrada = await entrada.findAll({where:{usuario_id:req.body.usuario_id,id_caja:req.body.id_caja, fechayhora:req.body.fechayhora}});
    if(entrada.length > 0) return res.status(400).send({
        ok:false,
        menssage:'Ya hay una entrada con cargada para ese usuario y a esa hora para esa caja'
    });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await entrada.sequelize.query("select max(id) from entradas");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await entrada.create(req.body);
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
exports.update_entrada = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await entrada.update(req.body,{where: {id_entrada:req.params.id_entrada}});
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
exports.delete_entrada = async function(req, res, next){
    try {
        let result = await entrada.destroy({where:{id_entrada:req.params.id_entrada}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} entrada deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede borrar la entrada: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_entrada = async function (req, res, next) {
    try {
        let result = await entrada.findOne({
            where: {
                id_entrada: req.params.id_entrada
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
            menssage:'Salida no encontrado'
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