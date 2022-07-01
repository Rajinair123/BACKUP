import React, { useEffect, useState } from "react";
import UsexpenseStore from "../store/expenseStore";
 import { Link } from "react-router-dom";


const Expensetype =()=>{
    const expensetype = UsexpenseStore((state)=>state.expensetype)
    const retriveexpensetype=UsexpenseStore((state)=>state.retriveexpensetype)
    const deleteExpense = UsexpenseStore((state)=>state.deleteExpense)

    useEffect(()=>{
        retriveexpensetype()
   },[])
    
  



    return(
      <div>
        <div className="container mt-9">

        <h2 className=""></h2>
    
       <table className="justify-center table-fixed  w-full">
           <thead>
               <th className="bg-blue-500 border text-black ">Name</th>
               
               <th className="bg-blue-500 border text-center   px-2 py-4  text-black">Delete</th>
          
              
            <th></th>
          
           
           </thead>
           <tbody>
               {expensetype.map((e)=>(
                   <tr key={e._id}>
                       {/* <td className="border px-2 py-4">
                       
                           </td>  */}
                       <td className="border text-center">
                            <Link to={`/admin/expensetypeForm/${e._id}`}>
                           {e.name}
                            </Link> 
                       </td>
                      
                       
                      
                       
                       <td className="border py-2">
                       <button className="ml-40 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm text-center  px-2 py-4 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                       onClick={()=>{deleteExpense(e._id).then(()=>retriveexpensetype())}}>delete</button>
                       </td>
                       {}
                           {/* <Link to={`/householdForm/${household._id}`}><button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">
                           update</button> </Link> */}
                       
       
                   </tr>
               ))}
           </tbody>
       </table>
      
      
       
    
        </div>
        <Link to ="/admin/expensetypeForm"><button className="w-20 h-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-6 bg-blue-200 rounded-sm ml-20"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></Link>
        </div>

    )
}
export default Expensetype