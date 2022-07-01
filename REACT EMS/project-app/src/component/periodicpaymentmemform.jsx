import React, {useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import householdStore from '../store/householdStore';
import expensetypeStore from '../store/expenseStore';
import periodicpaymentStore from '../store/periodicpaymentStore';

const schema = yup.object().shape({
  description : yup.string().required(),
  paidThrough:yup.string().required(),
  paidBy: yup.string().required(),
  householdId:yup.string().required(),
  expensetypeId:yup.string().required(),
  frequency: yup.string().required(),
  amount:yup.number().required(),
  dueDate:yup.date().required(),
    paymentDetails:yup.object().shape({
    amount:yup.number().required(),
    date:yup.date().required(),
 method:yup.string().required()
}),
})
const PeriodicpaymentForm =()=>{
const addPeriodicpayment = periodicpaymentStore((state)=>state.addPeriodicpayment)
const households = householdStore((state)=>state.households)
const expensetype= expensetypeStore((state)=>state.expensetype)
const  periodicpayment = periodicpaymentStore((state)=>state. periodicpayment)
const updatePeriodicpayment = periodicpaymentStore((state)=>state.updatePeriodicpayment)
const retriveexpensetype = expensetypeStore((state)=>state.retriveexpensetype)
const retriveHousehold = householdStore((state)=>state.retriveHousehold)


useEffect(()=>{
  retriveexpensetype()
  retriveHousehold()
},[])
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()
  useEffect(()=>{
    const periodicpaymentId = params.periodicpaymentId;
   
    if(!periodicpaymentId) return;
    const periodicpay =  periodicpayment.find((p)=>p._id === params.periodicpaymentId)
   
    
    if(!periodicpay)
      return;
    
    setValue("householdId",periodicpay.household._id)
    setValue("frequency",periodicpay.frequency);
    setValue("amount",periodicpay.amount);
    setValue("dueDate",periodicpay.dueDate);
    setValue("expensetypeId",periodicpay.expensetype._id)
    setValue("_id",periodicpay._id)
    setValue("description",periodicpay.description)
    setValue("paidThrough",periodicpay.paidThrough);
    setValue("paidBy",periodicpay.paidBy);
 
  },[]);


  
  const navigate = useNavigate()

      const onSubmitHandler = (data) => {
       if(!data._id){
        addPeriodicpayment(data)
       navigate('/member/dashboard2/periodicpaymentmem')
       }
     else{
        updatePeriodicpayment(data)
      navigate('/member/dashboard2/periodicpaymentmem')
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
          <label for="freq" class="block text-sm font-medium text-gray-700">Frequency</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="freq" type="text" placeholder=""
       {...register('frequency')} />
       <p className="text-red-900">{errors.frequency?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="amt" class="block text-sm font-medium text-gray-700">Amount</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="amount" type="text" placeholder=""
       {...register('amount')} />
       <p className="text-red-900">{errors.amount?.message}</p>
        </div>


        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700" for="name">
           Due Date
             </label>
             <input
             className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="dueDate"
               type="date"
               {...register('dueDate')}/>
             <p className="text-red-900">{errors.dueDate?.message}</p>
           </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="city" class="block text-sm font-medium text-gray-700">Expense Type</label>
          <select className="w-full px-4 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
               {...register("expensetypeId")}
                
             >
                  <p className="text-red-900">{errors.expensetypeId?.message}</p>
                <option value="" disabled selected> select expense type</option>
                 {expensetype.map((e)=>(
             <option  key={e._id} value={e._id}> {e.name}</option>
            
         ))}
        </select>
        </div>
          
        <div className="mb-4">
             <label className="block text-black font-bold mb-2" for="name">
               Amount
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="paymentdetails"
               type="number"
               {...register('paymentDetails.amount')}
             
             />
             <p className="text-red-900">{errors.paymentDetails?.amount?.message}</p>
           </div>


           <div className="mb-4">
             <label className="block text-black font-bold mb-2" for="name">
               Method
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="paymentdetails"
               type="text"
               {...register('paymentDetails.method')}
             
             />
             <p className="text-red-900">{errors.paymentDetails?.method?.message}</p>
           </div>

           <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700" for="name">
            Date
             </label>
             <input
             className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="dueDate"
               type="date"
               {...register('paymentDetails.date')}/>
             <p className="text-red-900">{errors.paymentDetails?.date?.message}</p>
           </div>




        <div class="col-span-6 sm:col-span-3">
          <label for="des" class="block text-sm font-medium text-gray-700">Description</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="description" type="text" placeholder=""
       {...register('description')} />
       <p className="text-red-900">{errors.description?.message}</p>
        </div>


        <div class="col-span-6 sm:col-span-3">
          <label for="paidthrough" class="block text-sm font-medium text-gray-700">Payment Through</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="paidThrough" type="text" placeholder=""
       {...register('paidThrough')} />
       <p className="text-red-900">{errors.paidThrough?.message}</p>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="paidthrough" class="block text-sm font-medium text-gray-700">Payment By</label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="paidBy" type="text" placeholder=""
       {...register('paidBy')} />
       <p className="text-red-900">{errors.paidBy?.message}</p>
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










)


}
export default PeriodicpaymentForm






