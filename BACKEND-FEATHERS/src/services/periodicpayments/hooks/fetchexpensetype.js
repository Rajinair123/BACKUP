module.exports=function(){
    return async(context) =>{
        const expensetypeId = context.data.expensetypeId;
        const expensetypeService = context.app.service('expensetype');
        const expensetype = await expensetypeService.get(expensetypeId);
          
        context.data.expensetype = expensetype;
        
        return context;
    }
}