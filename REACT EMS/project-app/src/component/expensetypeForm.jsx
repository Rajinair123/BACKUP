import React, {useEffect} from 'react'
import useStore from '../store/expenseStore'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const ExpenseForm = () => {
  const addExpense= useStore((state) => state.addExpense)
   const expensetype = useStore((state)=>state.expensetype)
   const updateExpense= useStore((state)=>state.updateExpense)
 
   const schema = yup.object().shape({
    name: yup.string().required(),
    
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) })

  const params = useParams()

useEffect(()=>{
   const expenseId = params.expenseId;
   if(!expenseId) return;
   const expense = expensetype.find((expense)=>expense._id === params.expenseId );
   if(!expense){
     return;
   }
   setValue("name",expense.name)
   setValue("_id",expense._id)


  },[])
  const navigate = useNavigate()

  const onSubmitHandler = (data) => {
   if(!data._id){
    addExpense(data)
    console.log(`on submit in add`, data)
    
    navigate('/admin/dashboard/expensetype')
  }
   else{
    updateExpense(data)
    navigate('/admin/dashboard/expensetype')

   }
  }

  return (
    
    <div className="container">
      <div className="py-10 flex justify-center overflow-hidden ">
        <div className=" w-full max-w-xs">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            method="post"
            className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-black  font-bold mb-2" for="name">
                 NAME
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                {...register('name')}
               
              />
              <p className="text-red-900">{errors.name?.message}</p>
            </div>
             <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>


  );
};

export default ExpenseForm;