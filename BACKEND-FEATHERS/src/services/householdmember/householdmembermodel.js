const Joi = require('joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb')



const schema = Joi.object({
    _id: objectId(),
    userId : objectId().required(),
    householdId :objectId().required(),
  
})

module.exports.schema = schema;