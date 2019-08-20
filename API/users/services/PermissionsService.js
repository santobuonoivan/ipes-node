const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

function validatePermission(permission) {
    const schema = {
        title: Joi.string().min(2).max(200).required(),
        module: Joi.string().min(2).max(200).required(),
        action: Joi.string().min(2).max(200).required(),
    };

    return Joi.validate(permission, schema);
}

exports.validatePermission = validatePermission;