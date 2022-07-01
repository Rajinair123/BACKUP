import React, {useEffect} from 'react'
import useStore from '../store/householdStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const HouseholdForm = () => {
  const addHousehold = useStore((state) => state.addHousehold)
   const households = useStore((state)=>state.households)
   const updateHousehold= useStore((state)=>state.updateHousehold)
 
   const schema = yup.object().shape({
    name: yup.string().min(5).max(50).required(),
    addressline1:yup.string().required(),
    addressline2:yup.string().required(),
    area : yup.string().required(),
    city : yup.string().required(),
    state : yup.string().required(),
    zipcode :yup.string().required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()

useEffect(()=>{
   const householdId = params.householdId;
   if(!householdId) return;
   const household = households.find((household)=>household._id === params.householdId );
   if(!household){
     return;
   }
   setValue("name",household.name)
   setValue("addressline1",household.addressline1)
   setValue("addressline2",household.addressline2)
   setValue("area",household.area)
   setValue("city",household.city)
   setValue("state",household.state)
   setValue("zipcode",household.zipcode)
   setValue("_id",household._id)


  },[])
  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
   if(!data._id){
    addHousehold(data)
    console.log(`on submit in add`, data)
    
    navigate('/primarymember/dashboard1/household')
  }
   else{
    updateHousehold(data)
    navigate('/primarymember/dashboard1/household')

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
          <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fname" type="text" placeholder=""
        {...register('name')} />
        <p className="text-red-900">{errors.name?.message}</p>
          </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Address line1</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="add1" type="text" placeholder=""
       {...register('addressline1')} />
       <p className="text-red-900">{errors.addressline1?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Address line2</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="addressline2" type="text" placeholder=""
       {...register('addressline2')} />
       <p className="text-red-900">{errors.addressline2?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Area</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="area" type="text" placeholder=""
       {...register('area')} />
       <p className="text-red-900">{errors.area?.message}</p>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="city" class="block text-sm font-medium text-gray-700">City</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="city" type="text" placeholder=""
       {...register('city')} />
       <p className="text-red-900">{errors.city?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="state" class="block text-sm font-medium text-gray-700">State</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="state" type="text" placeholder=""
       {...register('state')} />
       <p className="text-red-900">{errors.state?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="zipcode" class="block text-sm font-medium text-gray-700">Zipcode</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="zipcode" type="text" placeholder=""
       {...register('zipcode')} />
       <p className="text-red-900">{errors.zipcode?.message}</p>
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