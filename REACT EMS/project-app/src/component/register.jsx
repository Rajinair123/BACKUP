import React from "react";
import { Link, Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../store/registerStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

const Register=()=>{

  const schema = yup.object().shape({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
     phone :yup.number().required(),
     userName:yup.string().required(),
    email :yup.string().min(3).max(255).required(),
    password :yup.string().min(5).max(1024).required(),
    role:yup.string()
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()
  const addRegister = useStore((state) => state.addRegister)
  

  const onSubmithandler = (data) => {
    addRegister(data)
    console.log(data)
    navigate("/")
  }
  return(


    <div class="w-full max-w-xs m-auto ml-30 ">
  <form  onSubmit={handleSubmit(onSubmithandler)} class="bg-gradient-to-r m-8 from-blue-400 via-bblue-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md rounded px-8 pt-6 ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Firstname
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="fname" type="text" placeholder=""
       {...register('firstName')} />
       <p className="text-red-900">{errors.firstName?.message}</p>
    </div>


    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Lastname
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="fname" type="text" placeholder=""
       {...register('lastName')} />
       <p className="text-red-900">{errors.lastName?.message}</p>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="lname" type="text" placeholder=""
       {...register('phone')} />
       <p className="text-red-900">{errors.phone?.message}</p>
    </div>
     
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="uname" type="text" placeholder=""
       {...register('userName')} />
       <p className="text-red-900">{errors.userName?.message}</p>
    </div>
     
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username"/>
        Email
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="email" type="text" placeholder=""
       {...register('email')} />
       <p className="text-red-900">{errors.email?.message}</p>
    </div>
      
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="password" type="text" placeholder=""
       {...register('password')} />
       <p className="text-red-900">{errors.password?.message}</p>
    </div>


    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
     Role
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="password" type="text" placeholder=""
       {...register('role')} />
       <p className="text-red-900">{errors.role?.message}</p>
    </div>
       
           
              <button
                      className="
                        text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                    >
                      Sign up
                    </button>
            



          </form>
       </div>
      
      
     
        
  );
};


export default Register;
 