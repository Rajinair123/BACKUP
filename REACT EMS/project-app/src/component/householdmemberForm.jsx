import React, {useEffect} from 'react'
import useStore from '../store/housememberStore'
import userStore from '../store/userStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import householdStore from '../store/householdStore'
const HouseholdForm = () => {
  const householdmember = useStore((state)=>state.householdmember)
 const addHouseholdmem= useStore((state)=>state.addHouseholdmem)
 const  updatehouseholdmem= useStore((state)=>state.updatehouseholdmem)
 const users = userStore((state)=>state.users) 
 const households =householdStore((state)=>state.households)
  const retriveUser= userStore((state)=>state.retriveUser)
  const retriveHousehold= householdStore((state)=>state.retriveHousehold)
   const schema = yup.object().shape({
    userId :yup.string().required(),
    householdId :yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(()=>{
  retriveHousehold()
  retriveUser()
  },[])

  const params = useParams()

useEffect(()=>{
   const householdmemId = params.householdmemId;
   if(!householdmemId) return;
   const householdmem = householdmember.find((householdmember)=>householdmember._id === params.householdmemId );
   if(!householdmemId){
     return;
   }
   setValue("_id",householdmem._id)
   setValue("userId",householdmem.user_id)
   setValue("householdId",householdmem.household_id)
   
  addHouseholdmem()

  },[])
  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
   if(!data._id){
    addHouseholdmem(data)
    console.log(`on submit in add`, data)
    
    navigate('/primarymember/dashboard1/householdmember')
  }
   else{
    updatehouseholdmem(data)
    navigate('/primarymember/dashboard1/householdmember')

   }
 }

  return (
    <div class="mt-5 md:mt-0 md:col-span-2 ">
    <form  onSubmit={handleSubmit(onSubmitHandler)}
                method="post" className=''>
      <div class="shadow overflow-hidden sm:rounded-md m-2 ">
        <div class="px-4 py-5 bg-blue-300 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="first_name" class="block text-sm font-medium text-gray-700">Household Name</label>
              <select className="w-full px-4 py-2 mt-2 border rounded-md
                   focus:outline-none focus:ring-1 focus:ring-blue-600"
                   {...register("householdId")}
                   >
                  <p className='text-red-400'>{errors.householdId?.message}</p>
    
                        <option value="" disabled selected> select household</option>
                     {households.map((household)=>(
                 <option  key={household._id} value={household._id}>{household.name}</option>
                
             ))}
            </select>
              </div>
    
            
    
             <div class="col-span-6 sm:col-span-3">
              <label for="city" class="block text-sm font-medium text-gray-700">User</label>
              <select className="w-full px-4 py-2 mt-2 border rounded-md
                 focus:outline-none focus:ring-1 focus:ring-blue-600"
                   {...register("userId")}
                    
                 >
                      <p className="text-red-900">{errors.userId?.message}</p>
                    <option value="" disabled selected> select user</option>
                     {users.map((u)=>(
                 <option  key={u._id} value={u._id}> {u.firstName}</option>
                
             ))}
            </select>
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
    
    
    
    
    
    
    
    
      

  );
};

export default HouseholdForm;