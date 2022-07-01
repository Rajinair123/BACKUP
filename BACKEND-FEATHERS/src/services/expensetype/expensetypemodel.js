const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require('Joi')

const schema = Joi.object({
    _id : objectId(),
    name:Joi.string().required()
})

module.exports.schema=schema