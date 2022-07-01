import React  from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboardprimary =()=>{
 
return (
     
    <div className="space-x-8 ">
 <Link to="/primarymember/dashboard1/household">
        <button className="  text-white bg-gradient-to-r ml-10 mt-auto from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Household</button>
        </Link>
       
     
        <Link to="/primarymember/dashboard1/householdmember">
        <button className="text-white bg-gradient-to-r ml-10 from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Member</button>
        </Link>

        <Link to="/primarymember/dashboard1/periodicpayment">
        <button className="text-white bg-gradient-to-r ml-10 from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Periodic Payment</button>
        </Link>

        <Link to="/primarymember/dashboard1/householdexp">
        <button className="text-white bg-gradient-to-r ml-10 from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Daily Expenses</button>
        </Link>
        
        


    <Outlet/>
    
</div>
  

    
)




}
export default Dashboardprimary