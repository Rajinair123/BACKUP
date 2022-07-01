import React, { useEffect, useState } from "react";
import UsehouseholdStore from "../store/householdStore";
import { Link } from "react-router-dom";


const Household =()=>{
   
    const households = UsehouseholdStore((state)=>state.households)
    const retriveHousehold=UsehouseholdStore((state)=>state.retriveHousehold)
    const deleteHousehold = UsehouseholdStore((state)=>state.deleteHousehold)

    const [query,setQuery] = useState("")

    useEffect(()=>{
        retriveHousehold()
       },[])
        
 

    return(
        
        <div className="flex-col  flex items-center   ">

<div class="flex border-2 border-gray-400 rounded m-8">
        <input
          type="text"
          class="px-4 py-2 w-60"  
          placeholder="Search here..."
          onChange={(e) => setQuery(e.target.value)}/>
        <button class="px-4 text-white bg-blue-600 border-m rounded ">Search</button>
      </div>


        <h2 className="text-black-500  font-bold  font-serif text-center text-3xl m-2 "></h2>

       <table className="shadow-lg justify-center table-fixed  ">
           <thead>
               <th className="bg-blue-300 border text-left px-2 py-2 text-black ">Name</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Address Line 1</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Address Line 2</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">State</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">City</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Area</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Zipcode</th>
               <th className="bg-blue-300 border text-left px-2 py-4 text-black">Delete</th>
              
            <th></th>
           </thead>
           <tbody>
            {households.filter((h)=>h.name.toLowerCase().includes(query.toLowerCase()))
               .map((household)=>(
                   <tr key={household._id}>

                       <td className="border px-2 py-2"> <Link to={`/primarymember/householdForm/${household._id}`}>{household.name}
                            </Link> 
                       </td>
                       <td className="border px-2 py-2 ">{household.addressline1}</td>
                       <td className="border px-2 py-4">{household.addressline2}</td>
                       <td className="border px-2 py-4">{household.state}</td>
                       <td className="border px-2 py-4">{household.city}</td>
                       <td className="border px-2 py-4">{household.area}</td>
                       <td className="border px-2 py-4">{household.zipcode}</td>
                       
                      
                       
                       <td className="border px-2 py-4">
                       <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                       onClick={()=>{deleteHousehold(household._id).then(()=>retriveHousehold())}}>delete</button>
                       </td>
                       {}
                          
                       
                   </tr>
               ))}
           </tbody>
       </table>
       <Link to ="/primarymember/householdForm"><button className="w-20 h-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-5 bg-blue-200 rounded-sm ml-20"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></Link>
       
        </div>



    )
}
export default Household