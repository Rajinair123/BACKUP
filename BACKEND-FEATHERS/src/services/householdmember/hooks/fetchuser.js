module.exports=function(){
    return async(context) =>{
        const userId = context.data.userId;
        const userService = context.app.service('users');
        const user = await userService.get(userId);

        context.data.user = user;
        
        return context;
    }
}