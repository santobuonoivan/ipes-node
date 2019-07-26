const { salida } = require('../../db/db.mariadb.config');

//const salidaService = require('../service/salida');
const _ = require('lodash');


/* GET ALL */
exports.all_salidas = async function (req, res, next) {
    try{
        const salidasList = await salida.findAll();
        if(salidasList.length > 0)
            return res.send({
                ok:true,
                salidasList
            });
        return res.send({
            ok:false,
            message: 'no hay salidas registradas'
        });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};

/* ADD ONE */
exports.insert_salida = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let salida = await salida.findAll({where:{usuario_id:req.body.usuario_id,id_caja:req.body.id_caja, fechayhora:req.body.fechayhora}});
    if(salida.length > 0) return res.status(400).send({
        ok:false,
        menssage:'Ya hay una salida con cargada para ese usuario y a esa hora para esa caja'
    });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await salida.sequelize.query("select max(id) from salidas");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await salida.create(req.body);
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
exports.update_salida = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await salida.update(req.body,{where: {id_salida:req.params.id_salida}});
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
exports.delete_salida = async function(req, res, next){
    try {
        let result = await salida.destroy({where:{id_salida:req.params.id_salida}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} salida deleted`
        });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede borrar la salida: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_salida = async function (req, res, next) {
    try {
        let result = await salida.findOne({
            where: {
                id_salida: req.params.id_salida
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
