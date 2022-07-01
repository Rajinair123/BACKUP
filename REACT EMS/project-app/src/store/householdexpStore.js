import create from 'zustand';
import axios from "../axios.common"

// import {devtools,persist} from 'zustand/middleware'
// //import Household from './component/household';


const householdexpStore =create((set)=>({
    householdexpense: [],


retriveHouseholdexp : async()=>{
    try{
        const response = await axios.get("hoseholdexpense");
        const {data} = response.data;
    
        set((state)=>({householdexpense:(state=data)}))
    }catch(err){
    
    }
},

setFilterdHouseholdexp :(data)=>{
    set((state)=>({householdexpense:(state=data)}))
},

setFiltereddata :(data)=>{
    
    set((state)=>({householdexpense:(state=data)}))
 },



setHouseholdExpname:async(data)=>{
    
    set((state)=>({householdexpense:(state=data)}))

   },


addHouseholdexp : async(data)=>{
    const response = await axios.post("/hoseholdexpense",data);
  return response
},

updateHouseholdexp : async(data)=>{
    const response = await axios.put(`/hoseholdexpense/${data._id}`,data);
    return response
},
deleteHouseholdexp : async(_id)=>{
    const response = await axios.delete(`/hoseholdexpense/${_id}`);
    return response
},
   
}))




// const UsehouseholdStore = create(
//     devtools(
//         persist(householdStore,{
//             name :'households'
//         })
//     )
// )


                                               
  




export default householdexpStore