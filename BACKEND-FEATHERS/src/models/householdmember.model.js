// householdmember-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
 const getUserSchema = require("../models/userschema")
 const getHouseholdSchema = require("../models/householdschema")
    module.exports = function (app) { 
  const modelName = 'householdmember';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    user:{
      type :getUserSchema(app),
      required: true,
    },
    household:{
      type :getHouseholdSchema(app),
      required : true
    }

  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
