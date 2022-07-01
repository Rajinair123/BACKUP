// periodicpayments-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here
const getexpenseSchema = require("../models/expensetypeschema")
const getHouseholdSchema = require("../models/householdschema")
module.exports = function (app) {
  const modelName = 'periodicpayments';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
         household:{
           type:getHouseholdSchema(app),
           required:true,
         },
         frequency :{
           type:String
         },
         amount:{
           type : Number
         },
         dueDate :{
           type : Date
         },
         expensetype :{
           type:getexpenseSchema(app),
         },
         paymentDetails:[{
           amount:{
             type:Number
           },
           date:{
             type:Date
           },
           method:{
             type:String
           }
          }],
          description:{
            type: String

          },
          paidThrough:{
            type: String
          } ,
          paidBy :[{
           type :String
          }],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
