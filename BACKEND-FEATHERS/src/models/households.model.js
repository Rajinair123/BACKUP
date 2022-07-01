// households-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'households';
  const mongooseClient = app.get('mongooseClient');
  const householdschema = require('./householdschema')
  // const { Schema } = mongooseClient;
  // const schema = new Schema({
  //     name :{type:String ,
  //         unique:true,
  //         minlength:5,
  //         maxlength:50
  //   },
  //   addressline1 :{
  //     type:String,
  //     required :true
  //   },
  //   addressline2 :{
  //     type:String,

  //   },
  //   area :{
  //     type:String,
  //     required:true
  //   },
  //   city:{
  //     type:String,
      
  //   },
  //   state:{
  //     type:String
  //   },
  //   zipcode:{
  //     type:String
  //   }

   
  // }, {
  //   timestamps: true
  // });
  //return householdschema;


  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, householdschema(app));
  
};
