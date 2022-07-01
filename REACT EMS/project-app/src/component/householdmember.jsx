import React, { useEffect, useState } from "react";
import HousememberStore from "../store/housememberStore";
 import { Link } from "react-router-dom";
import userStore from "../store/userStore";

const Householdmember =()=>{
    const householdmember = HousememberStore((state)=>state.householdmember)
    const retrivemember = HousememberStore((state)=>state.retrivemember)
    const retriveUser = userStore((state)=>state.retriveUser)
   const deletemember = HousememberStore((state)=>state.deletemember)


    useEffect(()=>{
        retrivemember()
        retriveUser()
   },[])
    
    return(
        
        <div className="flex-col  flex items-center">
        <h2 className="text-black-500  font-bold  font-serif text-center text-3xl m-2 "></h2>
       <table className="shadow-lg justify-center table-fixed m-20 ">
           <thead>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black ">Hosehold</th>
               
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">User</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Delete</th>
           </thead>
           <tbody>
               {householdmember.map((hm)=>(
                   <tr key={hm._id}>
                       {/* <td className="border px-2 py-4">
                       
                           </td>  */}
                       <td className="border px-2 py-4">
                            <Link to={`/primarymember/householdmemberForm/${hm._id}`}>
                           {hm.household.name}
                            </Link> 
                       </td>
                       <td className="border px-2 py-4">
                          {hm.user.firstName}
                       </td>
                      
                     <td className="border px-2 py-4">
                       <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                       onClick={()=>{deletemember(hm._id).then(retrivemember())}}>delete</button>
                       </td> 
                       
                           
                       
                   </tr>
               ))}
           </tbody>
       </table>
       <Link to ="/primarymember/householdmemberForm"><button className="text-white bg-gradient-to-r m-10 from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
       +</button></Link>
       
    
       
    
        </div>



    )
}
export default Householdmember