import React  from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard =()=>{

return (
<div className="space-x-8 ">
       <Link to="/admin/dashboard/expensetype">
        <button className="m-4   ml-60 text-white bg-gradient-to-r from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center ">Expense Type</button>
        </Link>
       
      
        
        <Link to="/admin/dashboard/user">
        <button className="text-white bg-gradient-to-r from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center ">User</button>
        </Link>
        
      
   <Outlet/>
   
    

   

</div>

)




}
export default Dashboard