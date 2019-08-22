//const { permissions } = require('../../database/db.config');
const { permissions } = require('../../components/db/db.mariadb.config');
const permissionService = require('../services/PermissionsService');


/* todo update --  Deja repetir "title" y "action", esto debería ser así?


 */

exports.all_permissions = async function (req, res, next) {
    try {
        let result = await permissions.findAll();
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send({error: e.errors[0].message});
    }

};

exports.insert_permission = async function (req, res, next) {
    const { error } = permissionService.validatePermission(req.body);
    if ( error ) return res.status(400).send({message: error.details[0].message});
    try {
        let result = await permissions.create(req.body);
        //console.log(result);
        return res.status(201).send(result);
    }catch (e) {
        return res.status(400).send({error: e.errors[0].message});
    }
};

exports.update_permission = async function (req, res, next) {
    const { error } = permissionService.validatePermission(req.body);
    if ( error ) return res.status(400).send({message: error.details[0].message});

    try {
        let result = await permissions.update(req.body,{where:{permission_id:req.params.id}});
        //console.log(result);
        return res.send({message: `${result} records successfully updated`});
    }catch (e) {
        return res.status(400).send({error:e.errors[0].message});
    }
};

exports.show_permission = async function(req, res, next){
    try {
        let result = await permissions.findByPk(req.params.id);
        if(!result) return res.send({message: 'permission not found'});
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send({error:e.errors[0].message});
    }
};

exports.delete_permission = async function(req, res, next){
    try {
        let result = await permissions.destroy({where:{permission_id:req.params.id}})
        if(result > 0) {
            console.log(result);
            return res.send({message: `${result} records deleted`});
        }
        return res.send({message: `record not deleted`});
    }catch (e) {
        return res.status(400).send({error: e.errors[0].message});
    }
};