import create from 'zustand';
import axios from "../axios.common"

const householdStore =create((set)=>({
    households: [],


retriveHousehold : async()=>{
    try{
        const response = await axios.get("households");
        const {data} = response.data;
     set((state)=>({households:(state=data)}))
        
    }catch(err){
    
    }
},

addHousehold : async(data)=>{
    const response = await axios.post("/households",data);
    console.log('data here',response)
    return response
},

updateHousehold : async(data)=>{
    const response = await axios.put(`/households/${data._id}`,data);
    return response
},
deleteHousehold : async(_id)=>{
    const response = await axios.delete(`/households/${_id}`);
    return response
},
   
      

 }))
export default householdStore