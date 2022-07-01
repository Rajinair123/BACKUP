const Joi = require('Joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb')


const schema = Joi.object({
    _id : objectId(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
     phone :Joi.number().required(),
     userName:Joi.string().required(),
     role:Joi.string(),
     lastLoggedIn :Joi.date(),
    email : Joi.string().min(3).max(255).required(),
    password :Joi.string().min(5).max(1024).required(),
    isActive : Joi.boolean(),
    isAdmin : Joi.boolean(),
     updatedBy:objectId(),
    updatedAt:Joi.date()
})

module.exports.schema=schema