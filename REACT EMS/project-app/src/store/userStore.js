import create from 'zustand';
import axios from "../axios.common"




const userStore =create((set)=>({
    users: [],


retriveUser : async()=>{
    try{
        const response = await axios.get('users');

        const {data} = response.data;
   
        
        set((state)=>({users:(state=data)}))
    }catch(err){
    
    }

},
   
addUser: async(data)=>{
    const response = await axios.post("/users",data);

    return response
},

updateUser: async(data)=>{
    const response = await axios.put(`/users/${data._id}`,data);
    return response
},
deleteUser : async(_id)=>{
    const response = await axios.delete(`/users/${_id}`);
    console.log("response",response.data);
    return response
},



})); 

 

export default userStore