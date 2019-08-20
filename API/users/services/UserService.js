const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const {users } = require('../../components/db/db.mariadb.config');


/* TODO hacer validate para update que no sean todos los campos requeridos */
function generateAuthToken(user) {
    const { id, email } = user;

    const token = jwt.sign({id:id, email:email}, config.get('jwtPrivateKey'));
    return token;
};

function validateUser(user) {
    const schema = {
        first_name: Joi.string().min(2).max(200).required(),
        middle_name: Joi.string().min(1).max(200).allow(null),
        last_name: Joi.string().min(2).max(200).required(),
        username: Joi.string().min(2).max(100).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        address: Joi.string().min(2).max(255),
        zipCode: Joi.string().regex(/^[0-9]*$/, 'numbers'),
        phone: Joi.string().min(0).max(20).regex(/^[0-9]+$/, 'numbers'),
        mobile: Joi.string().min(0).max(20).regex(/^[0-9]+$/, 'numbers').required(),
        city: Joi.string().min(1).max(150).required(),
        state:Joi.string().min(1).max(150).required(),
        country:Joi.string().min(1).max(150).required(),
        is_active: Joi.boolean().allow(null).default(1),
        profile_image: Joi.string().allow(null).regex(/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf)$/i),
        deleted_at: Joi.date().default(null).allow(null)
    };

    return Joi.validate(user, schema);
}

exports.validateEmailExist = async function (user){
    try{
        const resultFind = await users.findOne({where:{email:user.email}});
        if(!resultFind) return false;
        return true;
    }catch (e) {
        return res.status(400).send({message: `can't show record ${e.errors[0].message}`});
    }
}

exports.validateUserExist = async function (user) {
    try {
        const resultFind = await users.findOne({where: {uid: user.uid}});
        if(!resultFind) return false;
        return true;
    } catch (e) {
        return res.status(400).send({message: `can't show record ${e.errors[0].message}`});
    }
}
exports.generateAuthToken = generateAuthToken;
exports.validateUser = validateUser;
