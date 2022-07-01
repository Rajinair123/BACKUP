// hoseholdexpense-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'hoseholdexpense';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const getexpenseSchema = require("../models/expensetypeschema")
  const getHouseholdSchema = require("../models/householdschema")
  const schema = new Schema({
    household:{
     type: getHouseholdSchema(app),
      required :true
    },
    expensetype:{
      type: getexpenseSchema(app),
       required :true
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
     paidBy :{
      type :String
     },

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
