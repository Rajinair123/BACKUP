module.exports = function(app){
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const expenseschema = new Schema({
          name :{
              type:String ,
      },
    });
    return expenseschema;
    
}