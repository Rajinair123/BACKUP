import { set } from 'react-hook-form'
import create from 'zustand'
import axios from "../axios.common"


const periodicpaymentStore = create((set)=>({
    periodicpayment:[],
  


retrivePeriodicpayment : async()=>{
    try {
    const response = await axios.get("periodicpayments") 
    const {data} = response.data;   
   set((state)=>({periodicpayment:(state=data)}))
  }  catch (error) {
        
    }
},

setFilteredPeriodicpayment :(data)=>{
    
   set((state)=>({periodicpayment:(state=data)}))
},


setFiltereddata :(data)=>{
    
    set((state)=>({periodicpayment:(state=data)}))
 },

 setPeriodicName:(data)=>{
    set((state)=>({periodicpayment:(state=data)}))

   },


deletePeriodicpayment : async(_id)=>{
    const response = await axios.delete(`/periodicpayments/${_id}`);
    return response
},

addPeriodicpayment : async(data)=>{
    const response = await axios.post("/periodicpayments",data);
  return response
},

updatePeriodicpayment : async(data)=>{
    const response = await axios.put(`/periodicpayments/${data._id}`,data);
    return response
},




}))


export default periodicpaymentStore