const { objectId } = require("@feathers-plus/validate-joi-mongodb");
module.exports = function(app){
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const userschema = new Schema({
        firstName:{type:String, required:true},
   lastName :{type:String, required:true},
   email: { type: String, unique: true, minlength:3,maxlength:255, required: true },
   phone :{type:Number, maxlength:10},
    userName:{type:String, unique:true},
    password: { type: String, required:true,minlength:5,maxlength:1024,unique:true},
    role:{type:String},
    lastLoggedIn :{type:Date},
     isActive:{type:Boolean, default: false},
   updatedBy:{type:objectId},
    updatedAt:{type:Date}
  
  
     
    }, {
      timestamps: true
    });
    return userschema;
}