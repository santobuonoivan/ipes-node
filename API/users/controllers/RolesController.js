//const { roles } = require('../../database/db.config'); for mysql
const { roles } = require('../../components/db/db.mariadb.config');
const rolesService = require('../services/RolesService');

exports.all_roles = async function (req, res, next) {
    try {
        const rolesList =  await roles.findAll();
        return res.send(rolesList);
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

exports.insert_role = async function (req, res, next) {
    const { error } = rolesService.validateRole(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let role = await roles.findAll({where:{name:req.body.name}});
    if(role.length > 0) return res.status(400).send('Role already exist');
    try {
        let result = await roles.create(req.body);
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send(`can't create role: ${e.errors[0].message}`);
    }
};

exports.update_role = async function (req, res, next) {
    const { error } = rolesService.validateRole(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try {
        let result = await roles.update(req.body,{where: {id:req.params.id}});
        console.log(result);
        return res.send(`${ result } records updated`);
    }catch (e) {
        return res.status(400).send(`can't update record: ${e.errors[0].message}`);
    }
};

exports.delete_role = async function(req, res, next){
    try {
        let result = await roles.destroy({where:{id:req.params.id}});
        console.log(result);
        return res.send(`${result} roles deleted`);
    }catch (e) {
        return res.status(400).send(`can't delete record: ${e.errors[0].message}`);
    }
};

exports.show_role = async function (req, res, next) {
    try {
        let result = await roles.findOne({where:{id: req.params.id}});
        if(!result) return res.send('Role not found');
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
}