const Joi = require('joi');

const Validator = (schema) => (payload) => schema.validate(payload);

const Schema = Joi.object({
    name: Joi.string().required(),
    died: Joi.string().required(),
    reason: Joi.string().required(),
    date: Joi.date().required(),
    location: Joi.string().required()
});

exports.ValidData = Validator(Schema);
