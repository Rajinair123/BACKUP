// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

//const { schema } = require('../services/users/usermodel');
//const { objectId } = require("@feathers-plus/validate-joi-mongodb");
//const userschema = require("./userschema");
module.exports = function (app) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const userschema = require('./userschema');
  // const { Schema } = mongooseClient;
  //   const schema = new Schema({
  //       firstName:{type:String, required:true},
  //   lastName :{type:String, required:true},
  //  email: { type: String, unique: true, minlength:5,maxlength:255, required: true },
  //  phone :{type:Number, maxlength:10},
  //   userName:{type:String, unique:true},
  //   password: { type: String, required:true,minlength:5,maxlength:1024,unique:true},
  //   role:{type:String},
  //   lastLoggedIn :{type:Date},
  //    isActive:{type:Boolean, default: false},
  //   updatedBy:{type:objectId},
  //   updatedAt:{type:Date}
  //   }, {
  //     timestamps: true
   
   // return schema;
//})


  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName,userschema(app));

}
