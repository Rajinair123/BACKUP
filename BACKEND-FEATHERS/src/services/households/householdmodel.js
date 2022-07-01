const { objectId } = require('@feathers-plus/validate-joi-mongodb')
const Joi = require('Joi')


const schema = Joi.object({
    _id :objectId(),
    name :Joi.string().min(5).max(50).required(),
    addressline1:Joi.string().required(),
    addressline2:Joi.string().required(),
    area : Joi.string().required(),
    city : Joi.string().required(),
    state : Joi.string().required(),
    zipcode :Joi.string().required()
})
module.exports.schema = schema



