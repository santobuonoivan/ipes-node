const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

function validateRole(role) {
    const schema = {
        name: Joi.string().min(2).max(200).required(),
        parent: Joi.number().integer().allow(null).positive().default(null),
        is_active: Joi.boolean().allow(null).default(1),
    };

    return Joi.validate(role, schema);
}

exports.validateRole = validateRole;


