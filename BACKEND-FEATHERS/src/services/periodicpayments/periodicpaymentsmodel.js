const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require ('Joi')

const schema = Joi.object({
    _id:objectId(),
    frequency: Joi.string().required(),
    amount:Joi.number().required(),
    dueDate:Joi.date().required(),
    paymentDetails:Joi.object().keys({
        amount:Joi.number().required(),
        date:Joi.date().required(),
        method:Joi.string().required()
    }),
    description : Joi.string().required(),
    paidThrough:Joi.string().required(),
    paidBy: Joi.string().required(),
    householdId:objectId().required(),
    expensetypeId:objectId().required()
})
module.exports.schema=schema;