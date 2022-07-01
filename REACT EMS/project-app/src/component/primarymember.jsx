import { Link, Outlet ,useNavigate} from "react-router-dom";


 function PrimaryMember() {
  const navigate = useNavigate()
  function logout(){
    sessionStorage.clear()
   navigate("/")
  }
     return (
      <div>
        <div className="">
      
           <div>
  <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r bg-blue-500">
  
          <div class="flex flex-col justify-between mt-6 ">
            <aside>
              <ul>
                <li>
                  <a class="flex items-center px-4 py-2 text-gray bg-gray-100 rounded-md " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  <Link to ="/primarymember/dashboard1"> <span class="mx-4 font-medium">Dashboard</span></Link>
                  </a>
                </li>

                <li>
                  <a class="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
        <span class="mx-4 font-medium">Settings</span>
                  </a>
                </li>

                
         <li>
         <a href="#" class="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200">
               <svg class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
               <Link to ="/register">   <span class="flex-1 ml-3 whitespace-nowrap mx-4 font-medium">Sign Up</span> </Link>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200">
               <svg class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <Link to ="/"><button onClick={logout} class="flex-1 ml-3 whitespace-nowrap mx-4 font-medium">Sign out</button></Link>
            </a>
         </li>
 
 
              </ul>
              
          
            </aside>
            
          
            
      </div>
      </div>
      <div className="absolute inset x-96 top-20 ml-96 ">
 <Outlet/> 
 </div> 
       </div>
       
       
     

      
      
        </div>
        
       
        
        
 </div>

 
     );
   }
   export default PrimaryMember
 