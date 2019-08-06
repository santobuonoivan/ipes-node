const { documentacion } = require('../../db/db.mariadb.config');

//const cuotasService = require('../service/cuotas');
const _ = require('lodash');

/* ADD ONE */

exports.insert_documentation = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await documentacion.sequelize.query("select max(id) as id from documentacion");
            maxId =  maxId[0][0].id;
            maxId +=1 ;
            req.body.id = maxId;
            result = await documentacion.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send({ ok:false, menssage:"el servidor no puede responder, vuelva a intentarlo" });
    }
    if(result){ return res.status(201).send({ ok:true, result });
    }
};

/* UPDATE ONE */
exports.update_documentation = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let id = parseInt(req.params.id);
        let result = await documentacion.update(req.body,{where: {id: id}});
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
exports.delete_documentation = async function(req, res, next){
    try {
        let id = parseInt(req.params.id);
        let result = await documentacion.destroy({where:{id:id}});
        //console.log(result);
        return res.send({ ok:true, menssage: `${result} documentacion borrada` });
    }catch (e) {
        return res.status(400).send({ ok:false, menssage:`no se puede desactivar/borrar la documentacion: ${e.errors[0].message}` });
    }
};

/* GET ONE */

exports.show_documentation = async function (req, res, next) {
    try {
        let result = await documentacion.findOne({ where: { id: parseInt(req.params.id) } });
        if(!result) return res.send({ ok: false, menssage:'documentacion no encontrado' });
        return res.send({ ok: true, result });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};
