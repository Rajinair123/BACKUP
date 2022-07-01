import { Link, Outlet } from "react-router-dom";


function Navbar() {
    return (
      <div>
      <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-2  py-5">
      <div class="flex items-center flex-shrink-0 text-white mr-6    container  flex-wrap justify-between  mx-auto">
        
        <span class="font-semibold text-2xl tracking-tight font-mono ">My Expenses</span>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  space-x-10 mr-auto justify-center font-bold text-lg ml-17">
        
         <Link to="/login"></Link> {" "}
        <Link to="/household">Household</Link> {" "}
        <Link to="/householdexp">HouseholdExpense</Link> {" "} 
         {/* <Link to="/expensetype">ExpenseType</Link> {" "}  */}
        <Link to="/periodicpayment">Periodic Payment</Link> {" "} 
         {/* <Link to="/user">User</Link> {" "} */}
        <Link to="/householdmember">Household Member</Link> {" "}
        
      <div class="flex justify-center">
  <div class="mb-3 xl:w-65">
    <div class="input-group relative flex flex-wrap items-stretch w-full mt-5 ml-20 back bg-gradient-to-r from-cyan-500 to-blue-500">

    </div>
        
        </div>
       </div>
      </div>
      </div>
    
    </nav>
    <Outlet/>
    </div>


//   <div class="flex min-h-screen">
//   <nav class="w-64 flex-shrink-0">
//     <div class="flex-auto bg-gray-900 h-full overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
//     {/* <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"> */}
//       <ul class="space-y-2">
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
//                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
//                <span class="ml-3">Dashboard</span>
//             </a>
//          </li>
//          <li>
//             <button type="button" class="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
//                   <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
//                   <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
//                   <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//             </button>
//             <ul id="dropdown-example" class="hidden py-2 space-y-2">
//                   <li>
//                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
//                   </li>
//                   <li>
//                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
//                   </li>
//                   <li>
//                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
//                   </li>
//             </ul>
//          </li>
        
           
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
//                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
//             </a>
//          </li>
        
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
//                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
//                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
//             </a>
//          </li>
//       </ul>
//    </div>

          
        
      
    
//   </nav>

    

//   <div class="flex flex-col w-full">
//     <header class="text-white bg-blue-400 sticky left-auto top-0 right-0">
//       <div class="h-12 px-6 flex relative items-center justify-end">
//         <button class="flex mx-4 text-white hover:text-gray-200 focus:outline-none">
//          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             </path>
//          </svg>
//         </button>

//         <button class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
//           <img class="h-full w-full object-cover" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
//         </button>
//       </div>
//     </header>
    
   

//     <div class="text-white bg-blue-400 flex w-full">
//       <div class="flex overflow-hidden h-12 ml-2">
//       <Link to="/user">User</Link> {" "}

//         <button class="mx-3 hover:border-b-2 border-white">
//           <span>Sign-in method</span>
//         </button>

//         <button class="mx-3 hover:border-b-2 border-white">
//           <span>Templates</span>
//         </button>

//         <button class="mx-3 hover:border-b-2 border-white">
//           <span>Usage</span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

    );
  }
  export default Navbar