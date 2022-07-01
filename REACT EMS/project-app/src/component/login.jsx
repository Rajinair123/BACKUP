import React,{useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../store/loginStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'



const LoginPage=()=>{

  const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().min(5).max(1024).required(),
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()

  const login = useStore((state) => state.login)
  const user= useStore((state) => state.users)

  const onSubmithandler = (data) => {
    console.log("data",data);
    login(data);
  
       
  }

  useEffect(()=>{
    if(user.isAdmin) {
      navigate("/admin")
   }
   else if(user.role==="member") {
    navigate("/member")
   } else if(user.role==="isPrimaryMember"){
      navigate("/primarymember")
   }
   
  },
  )
        

      


  return(
    <section class="h-screen">
   <div className="px-6 h-full text-gray-800">
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
  <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
  <img
          src="https://img.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg"
          class="w-full"
          alt="Sample image"
        />
  </div>
  <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
       
          

          <div
            class="flex items-center  mr-10 my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0 ">Or</p>
          </div>

        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form  onSubmit={handleSubmit(onSubmithandler)}
            method="post">

            <div className="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="username"
              placeholder="Username"
              {...register('userName')}
            />
            <p className="text-red-900">{errors.userName?.message}</p>
             </div>
       
            <div className="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
         placeholder="password"
                  {...register("password")}
                ></input>
              <p className="text-red-900">{errors.password?.message}</p>
              </div>
           
              <button
                      className="
                        text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                    >
                      Sign In
                    </button>


            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link to ="/register" href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</Link>
            </p>




          </form>
       </div>
      
      
     
        </div>

        
    </div>
   </div>
  
   </section>

  );
};


export default LoginPage;
 