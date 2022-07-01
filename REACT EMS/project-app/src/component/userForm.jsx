import React, {useEffect} from 'react'
import useStore from '../store/userStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
     phone :yup.number().required(),
     userName:yup.string().required(),
     role:yup.string(),
    email : yup.string().min(3).max(255).required(),
    password :yup.string().min(5).max(1024).required(),
     isActive : yup.boolean(),
})

const UserForm = () => {
  
    const users = useStore((state=>state.users))
    const addUser = useStore((state)=>state.addUser)
    const updateUser = useStore((state)=>state.updateUser)
  
    
   


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()

useEffect(()=>{
   const userId = params.userId;
   if(!userId) return;
   const user = users.find((user)=>user._id === params.userId );
   if(!user){
     return;
   }
   setValue("firstName",user.firstName)
   setValue("lastName",user.lastName)
   setValue("phone",user.phone)
   setValue("email",user.email)
   setValue("password",user.password)
   setValue("userName",user.userName)
   setValue("isActive",user.isActive)
   setValue("role",user.role)
   setValue("_id",user._id)


  },[])
  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
   if(!data._id){
    addUser(data)
    console.log(`on submit in add`, data)
    
    navigate('/admin/dashboard/user')
  }
   else{
    updateUser(data)
    navigate('/admin/dashboard/user')

   }
  }

  return (
    


<div class="mt-5 md:mt-0 md:col-span-2 ">
<form  onSubmit={handleSubmit(onSubmitHandler)}
            method="post" className=''>
  <div class="shadow overflow-hidden sm:rounded-md ">
    <div class="px-4 py-5 bg-blue-300 sm:p-6">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fname" type="text" placeholder=""
        {...register('firstName')} />
        <p className="text-red-900">{errors.firstName?.message}</p>
          </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="fname" type="text" placeholder=""
       {...register('lastName')} />
       <p className="text-red-900">{errors.lastName?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Phone</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="phone" type="text" placeholder=""
       {...register('phone')} />
       <p className="text-red-900">{errors.phone?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">user Name</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="fname" type="text" placeholder=""
       {...register('userName')} />
       <p className="text-red-900">{errors.userName?.message}</p>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="email" type="text" placeholder=""
       {...register('email')} />
       <p className="text-red-900">{errors.email?.message}</p>
        </div>

<div class="col-span-6 sm:col-span-3">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="password" type="text" placeholder=""
       {...register('password')} />
       <p className="text-red-900">{errors.password?.message}</p>
        </div> 


        <div class="col-span-6 sm:col-span-3">
          <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="role" type="text" placeholder=""
       {...register('role')} />
       <p className="text-red-900">{errors.role?.message}</p>
        </div>
  
        <div class="col-span-6 sm:col-span-3">
          <label for="role" class="block text-sm font-medium text-gray-700">isActive</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="role" type="text" placeholder=""
       {...register('isActive')} />
       <p className="text-red-900">{errors.isActive?.message}</p>
        </div>



    <div class=" py-3 bg-gray-50 text-right sm:px-3">
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        submit
      </button>
    </div>
    </div>
    </div>
  </div>
</form>
</div>
// </div>
// </div>


  );
};

export default UserForm;