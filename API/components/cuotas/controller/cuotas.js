const { cuotas } = require('../../db/db.mariadb.config');

//const cuotasService = require('../service/cuotas');
const _ = require('lodash');

/* CARRERA */
/* GET ALL */
exports.all_cuotas = async function (req, res, next) {
    try{
        const cuotasList = await cuotas.findAll();
        if(cuotasList.length > 0)
            return res.send({
                ok:true,
                cuotasList
            });
        return res.send('cuotas not found');
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};

/* ADD ONE */
/*
exports.insert_carrera = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let carreras = await cuotas.findAll({where:{nombre:req.body.nombre}});
    if(carreras.length > 0) return res.status(400).send({
        ok:false,
        menssage:'Ya hay una carrera con el mismo nombre asignado'
    });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await cuotas.sequelize.query("select max(id) as id from carreras");
            maxId =  maxId[0][0].id;
            maxId +=1 ;
            req.body.id = maxId;
            result = await cuotas.create(req.body);
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
        return res.send({
            ok:true,
            result
        });
    }
};
*/
/* UPDATE ONE */
/*
exports.update_carrera = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let id = parseInt(req.params.id);
        let result = await cuotas.update(req.body,{where: {id: id}});
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
*/
/* DELETE ONE (desactivar)*/
/*
exports.delete_carrera = async function(req, res, next){
    try {
        let id = parseInt(req.params.id);
        let result = await cuotas.destroy({where:{id:id}});
        //console.log(result);
        return res.send({ ok:true, menssage: `${result} caja deleted` });
    }catch (e) {
        return res.status(400).send({ ok:false, menssage:`no se puede desactivar/borrar el caja: ${e.errors[0].message}` });
    }
};
*/
/* GET ONE */
/*
exports.show_carrera = async function (req, res, next) {
    try {
        let result = await cuotas.findOne({ where: { id: parseInt(req.params.id) } });
        if(!result) return res.send({ ok: false, menssage:'carrera no encontrado' });
        //console.log(result);
        return res.send({ ok: true, result });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};

 */
