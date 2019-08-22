const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const {users } = require('../../components/db/db.mariadb.config');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;


/* TODO hacer validate para update que no sean todos los campos requeridos */
function generateAuthToken(user) {
    const { usuario_id, email } = user;
    const token = jwt.sign({id:usuario_id, email:email}, config.get('jwtPrivateKey'));
    return token;
}

function validateUser(user) {
    const schema = {
        nombre: Joi.string().min(2).max(50).required(),
        apellido: Joi.string().min(2).max(50).required(),
        usuario: Joi.string().min(2).max(200).required(),
        dni: Joi.string().regex(/^\d{7,8}(?:[-\s]\d{4})?$/,'numbers').required(),
        email: Joi.string().min(5).max(70).required().email(),
        clave: Joi.string().min(5).max(250).required(),
        perfil: Joi.string().max(15).default(null).allow(null),
        turno: Joi.string().max(15).default(null).allow(null),
        direccion1: Joi.string().min(2).max(70),
        direccion2: Joi.string().min(2).max(70),
        codigopostal: Joi.string().regex(/^[0-9]*$/, 'numbers'),
        tel: Joi.string().min(0).max(20).regex(/^[0-9]+$/, 'numbers'),
        celular: Joi.string().min(0).max(20).regex(/^[0-9]+$/, 'numbers').required(),
        provincia: Joi.string().min(1).max(150).required(),
        ciudad:Joi.string().min(1).max(150).required(),
        country:Joi.string().min(1).max(150).required(),
        is_active: Joi.boolean().allow(null).default(1),
        profile_image: Joi.string().allow(null).regex(/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf)$/i),
        fechadecumpleanios: Joi.date().default(null).allow(null),
    };

    return Joi.validate(user, schema);
}

exports.validateEmailExist = async function (user){
    try{
        const resultFind = await users.findOne({
            where:{
                email:user.email,
                usuario_id:{
                    [Op.not]: user.id
                }
            }
        });
        if(!resultFind) return false;
        return true;
    }catch (e) {
        return e;
    }
};

exports.validateUserExist = async function (user) {
    try {
        const resultFind = await users.findOne({where: {usuario_id: user.id}});
        if(!resultFind) return false;
        return true;
    } catch (e) {
        return e;
    }
};
exports.generateAuthToken = generateAuthToken;
exports.validateUser = validateUser;
