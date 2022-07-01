import React ,{useEffect,useState} from "react"
import { Outlet } from "react-router-dom"
import userStore from "../store/userStore"
import { Link } from "react-router-dom"
import SearchTitle from "./searchtitle"
const User =()=>{

    const users = userStore((state)=>state.users)
    const retriveUser= userStore((state)=>state.retriveUser)
    const deleteUser = userStore((state)=>state.deleteUser)  
    console.log("deleteUser",deleteUser);

     


     useEffect(()=>{
         retriveUser();
     },[])
     
   


return(
    
    <div className="mt-5    ">
       
    <h2 className="overflow-x-auto"></h2>
    
   <table className="content-center"> 
       <thead>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black ">FirstName</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">LastName</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Email</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Phone</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Username</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Password</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Role</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">isActive</th>
           <th className="bg-blue-500 border text-left px-1 py-2 text-black">Remove</th>
           
        <th></th>
       </thead>
       <tbody>
           {users.map((u)=>(
               <tr key={u._id}>
                
                <td className="border px-1 py-2">
                            <Link to={`/admin/userForm/${u._id}`}>
                            {u.firstName}
                            </Link> 
                       </td>

                  
                   <td className="border px-1 py-2">{u.lastName}</td>
                   <td className="border px-1 py-2">{u.email}</td>
                   <td className="border px-1 py-2">{u.phone}</td>
                   <td className="border px-1 py-2">{u.userName}</td>
                   <td className="border px-1 py-2">{u.lastLoggedIn}</td>
                   <td className="border px-1 py-2">{u.role}</td>
                   <td className="border px-1 py-2">{u.password}</td>
                  
                  
                   
                   <td className="border px-1 py-2">
                   <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                   onClick={()=>{deleteUser(u._id).then(()=>retriveUser())}}>
                       delete</button>
                   </td>
                 
                   
               </tr>
           ))}
       </tbody>
       
       
   </table>
   <Link to ="/admin/userForm"><button className="w-20 h-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 m-4 bg-blue-200 rounded-sm ml-20"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button></Link>

   

    </div>







)
}
export default User