module.exports=function(){
    return async(context) =>{
        const householdId = context.data.householdId;
        const householdService = context.app.service('households');
        const household = await householdService.get(householdId);
      context.data.household = household;
        
        return context;
    }
}