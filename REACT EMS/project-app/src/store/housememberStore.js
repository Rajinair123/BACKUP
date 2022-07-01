import create from 'zustand';
import axios from "../axios.common"



const HousememberStore =create((set)=>({
    householdmember: [],


retrivemember : async()=>{
    try{
        const response = await axios.get("householdmember");
        const {data} = response.data;
        
        set((state)=>({householdmember:(state=data)}))
    }catch(err){
    
    }
},


addHouseholdmem: async(data)=>{
    const response = await axios.post("/householdmember",data);
    console.log('data here',response)
    return response
},

updatehouseholdmem: async(data)=>{
    const response = await axios.put(`/householdmember/${data._id}`,data);
    return response
},
deletemember : async(_id)=>{
    const response = await axios.delete(`/householdmember/${_id}`);
    return response
},
   
})); 

export default HousememberStore