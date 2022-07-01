import create from 'zustand';
import axios from "../axios.common"

// import {devtools,persist} from 'zustand/middleware'
// //import Household from './component/household';


const expensetypeStore =create((set)=>({
    expensetype: [],


retriveexpensetype : async()=>{
    try{
        const response = await axios.get("expensetype");
        const {data} = response.data;
        
        set((state)=>({expensetype:(state=data)}))
    }catch(err){
    
    }
},


addExpense: async(data)=>{
    const response = await axios.post("/expensetype",data);
    console.log('data here',response)
    return response
},

updateExpense: async(data)=>{
    const response = await axios.put(`/expensetype/${data._id}`,data);
    return response
},
deleteExpense : async(_id)=>{
    const response = await axios.delete(`/expensetype/${_id}`);
    return response
},
   
})); 

 


                           
  




export default expensetypeStore