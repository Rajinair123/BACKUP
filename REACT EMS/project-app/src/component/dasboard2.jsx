import React  from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboardmember =()=>{

return (
   
      <div className="mb-10   space-x-8 ">
       
        <Link to="/member/dashboard2/periodicpaymentmem">
        <button className="  text-white bg-gradient-to-r from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Periodic Payment</button>
        </Link>
       
     
        <Link to="/member/dashboard2/householdexpmem">
        <button className="text-white bg-gradient-to-r from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Daily Expenses</button>
        </Link>

       

    <Outlet/>
    
</div>
   
     


)




}
export default Dashboardmember