module.exports = function(app){
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const householdschema = new Schema({
        
        name :{type:String ,
          
            minlength:5,
            maxlength:50
      },
      addressline1 :{
        type:String,
        required :true
      },
      addressline2 :{
        type:String,

      },
      area :{
        type:String,
        required:true
      },
      city:{
        type:String,
        
      },
      state:{
        type:String
      },
      zipcode:{
        type:String
      }
  
     
    }, {
      timestamps: true
    });
    return householdschema;
}