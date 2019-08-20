//const {users, roles, permissions, permission_role, permission_user, user_roles } = require('../../database/db.config');
const {users } = require('../../components/db/db.mariadb.config');
const userService = require('../services/UserService');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

/* todo en create usuario inexstente y "email or username alredy exists"

 */
/* todo poniendo "zipCode" queda null y poniendo "zip_code" dice is not allowed


 */

exports.all_users = async function (req, res, next) {
    try{
        const userslist = await users.findAll({
            attributes:{
                exclude:['password']
            }
        });
        if(userslist.length > 0)
            return res.send(userslist);
        return res.send('users not found');
    }catch (e) {
        return res.status(400).send(e.message);
    }
};

exports.insert_user = async function (req, res, next) {
    const { error } = userService.validateUser(req.body);
    if (error) return res.status(400).send({message: error.details[0].message});
    let user;

    try{
        user = await users.findAll({
            where:{
                [Op.or]:[{email:req.body.email}, {username: req.body.username}]
            }
        });
    }catch (e) {
        return res.status(400).send({message:'Database connection error: ' + e});
    }
    if(user.length > 0) return res.status(400).send({message:'email or username already exists'});

    try{
        user = new users(_.pick(req.body,
            [
                'first_name', 'middle_name', 'last_name', 'username',
                'email', 'password', 'address', 'zipCode', 'phone', 'mobile',
                'city', 'state', 'country', 'profile_image', 'deleted_at'
            ]));
    }catch (e) {
        return res.status(400).send({message:`can't pick user data`});
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    try{
        await user.save();
    }catch (e) {
        return res.status(400).send({message:`database connection error`});
    }
    res.status(201).send({message:'User created', user:user});
};

exports.update_user = async function (req, res, next) {
    const { error } = userService.validateUser(req.body);
    let result;
    if(error) return res.status(400).send({message: error.details[0].message});

    if( !(await userService.validateUserExist({uid: req.params.uid}))) return res.status(400).send({message: 'User dont found'});

    if( await userService.validateEmailExist(req.body)) return res.status(400).send({message: 'Email is already used'});


    if(req.body.password != '' || req.body.password != null){
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        result = await users.update(req.body,{where:{uid:req.params.uid}});
        console.log(result);
        return res.json({message:'ok update'});
    }catch (e) {
        return res.status(400).send({message: `can't update record: ${e.message}`});
    }
};

exports.delete_user = async function (req, res, next) {
    try {
        if( !(await userService.validateUserExist({uid: req.params.uid}))) return res.status(404).send({message: 'User dont found'});
        const result = await users.destroy({where: {uid:req.params.uid}});
        if(result > 0)
            return res.send({message:`${ result } user deleted`});
        else{
            let e = new Error("Can not delete record");
            throw new Error(e);
        }
    }catch (e) {
        return res.status(400).json({message:e.message});
    }
};

exports.show_user = async function (req, res, next) {
    try{
        const result = await users.findOne({where:{uid:req.params.uid}});
        if(!result) return res.send({message: 'user not found'});
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send({message: `can't show record ${e.errors[0].message}`});
    }
};