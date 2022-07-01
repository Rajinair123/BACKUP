import React ,{useEffect,useMemo}from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import periodicpaymentStore from '../store/periodicpaymentStore'
import householdStore from '../store/householdStore'
import householdexpStore from '../store/householdexpStore'
import dayjs from 'dayjs'

const Periodicpayment =()=>{

  const isSameOrAfter= require("dayjs/plugin/isSameOrAfter")
const isSameOrBefore= require("dayjs/plugin/isSameOrBefore")
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

  const households = householdStore((state)=>state.households)
const setFilteredPeriodicpayment= periodicpaymentStore((state)=>state.setFilteredPeriodicpayment)
    const retriveHousehold = householdStore((state)=>state.retriveHousehold)
    const setPeriodicName=periodicpaymentStore((state)=>state.setPeriodicName)
const periodicpayment = periodicpaymentStore((state)=>state.periodicpayment)
const retrivePeriodicpayment = periodicpaymentStore((state)=>state.retrivePeriodicpayment)
const deletePeriodicpayment = periodicpaymentStore((state)=>state.deletePeriodicpayment)
const setHouseholdExpname = householdexpStore((state)=>state.setHouseholdExpname)
const householdexpense = householdexpStore((state)=>state.householdexpense)
const setFiltereddata = periodicpaymentStore((state)=>state.setFiltereddata)
  


 useEffect(()=>{
     retrivePeriodicpayment()
     retriveHousehold()
 },[])


 const dropdownChangeHandler = async() => {
  let optionSelected = document.getElementById("n1").value;
   let shouldBeGreaterThanDate = moment().subtract(optionSelected,'d').format('YYYY-MM-DD');
   let filteredExpense = periodicpayment.filter((expense)=>{
    let expenseDate = moment(expense.paymentDetails[0].date).format('YYYY-MM-DD')+1
    if (expenseDate>shouldBeGreaterThanDate) {
        return expense
    }
   })
   console.log("shouldBeGreaterThanDate",filteredExpense);
    setFilteredPeriodicpayment(filteredExpense)
   
 };
 const onhandleChange=()=>{
  let optionSelected=document.getElementById("n2").value;
  console.log("optionSelected",optionSelected)
   let selectedHouseName=periodicpayment.filter((p)=>{
     if(optionSelected==p.household.name){
     return p
   
    }
  })
  setPeriodicName(selectedHouseName)
 }

 const handleFilterDate = async(field) => {
  let optionSelected = document.getElementById("startDate").value;
  console.log("optionSelected",optionSelected )
  const filteredData = periodicpayment.filter((p) => {
    if (field === "from" && dayjs(p.paymentDetails[0].date).isSameOrAfter(dayjs(optionSelected)))
    {
      
    return p;
     }
    
   
  });

  setFiltereddata(filteredData);
  console.log("filterddata",filteredData)
}; 

const handleFilterDate2 = async(field) => {
  let optionSelected = document.getElementById("endDate").value;
  console.log("optionSelected",optionSelected )
  const filteredData = periodicpayment.filter((p) => {
    if (field === "to" && dayjs(p.paymentDetails[0].date).isSameOrBefore(dayjs(optionSelected)))
    {
      
    return p;
     }
    
   
  });

  setFiltereddata(filteredData);
  console.log("filterddata",filteredData)
}; 





 

 const total = useMemo(()=>{
    let total = 0;
    periodicpayment?.map(elem=>{total += elem?.amount});
    return total;
},[periodicpayment]);



return(
<div className="flex-col  flex items-center  ">

<div className='m-5'>
            <button className='bg-gray-500 mb-10 hover:bg-gray-700 text-white font-bold py-2 px-4 border  border-gray-700 rounded'>Total expenses</button>
            <span className='font-bold text-lg'>$.{total}</span>

            <label><i class="fas fa-filter w-30"></i></label>
   <select id="n1" className='bg-gray-500 hover:bg-gray-500 mr- text-white font-bold py-2 px-4 border ml-3 m-2 border-gray-500 rounded'  onChange={()=>{dropdownChangeHandler()}} >
              <option id="h" value={0}>Today</option>
                    <option id="o1" value={1}>Yesterday</option>
                    <option id="o2" value={7}>Last 7 Days</option>
                    <option id="o3" value={180}>Last 6 months</option>
                    <option id="o3" value={365}>LastYear</option>
                    
                  </select>
                          
      
          
        <span className='mr-15  font-bold' htmlFor="startDate">From</span>
        <input
          type="date"
          className="form-control  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 border  border-gray-700 rounded"
          id="startDate"
       onChange={()=>{handleFilterDate("from")}}
        />
      
      
        <span htmlFor="endDate mr-12  text-lg ">To</span>
        <input
          type="date"
          className="form-control bg-gray-500 mb-30 hover:bg-gray-500 text-white font-bold py-2 px-2 border border-gray-700 rounded"
          id="endDate"
          
        onChange={()=>{handleFilterDate2("to")}}
        />



            
<select id="n2" className="w-30 px-4 py-2  border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={()=>onhandleChange()} >
              
              <option value="" disabled selected>
            House Hold
              </option>
              {households.map((h) => (
                <option key={h._id} value={h.name}>
                  {h.name}
                </option>
              ))}
            
        </select>
        <h2 className="text-black-500  font-bold  font-serif text-center text-3xl m-2"></h2>
       <table className=" mb-10 ">
           <thead>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black ">Household</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Frequency</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Payment Details</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Date</th>
                <th className="bg-blue-300 border text-left px-1 py-2 text-black">Amount</th> 
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Due date</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Expense Type</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Description</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Paid By</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Paid Through</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Delete</th>
              
     
           </thead>
          
           <tbody>
                {periodicpayment.map((p)=>(
                   <tr key={p._id}> 
                   
                       
                       <td className="border px-1 py-2">{p.household.name}</td> 
                        <td className="border  px-1  py-2">{p.frequency}</td>
                        <td className="border px-1 py-2">{p.paymentDetails[0].amount},{p.paymentDetails[0].method}</td>
                        <td className="border px-1 py-2">
                        {moment(p.paymentDetails[0].date).format('DD-MM-YYYY')}
                        </td>
                        <td className="border px-1 py-2">{p.amount}</td>
                        <td className="border px-1 py-2">{moment(p.dueDate).format('DD-MM-YYYY')}</td>
                        <td className="border px-1 py-2">{p.expensetype.name}</td>
                       <td className="border px-1 py-2">{p.description}</td>
                       <td className="border px-1 py-2">{p.paidThrough}</td>
                       <td className="border px-1 py-2">{p.paidBy}</td>
                      
                      
                       
                      
                       
                       <td className="border px-1 py-2">
                       <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                       onClick={()=>{deletePeriodicpayment(p._id).then(()=>retrivePeriodicpayment())}}
                       >delete</button>
                       </td>
                       
                           
                       
                    </tr>
               ))} 
           </tbody>
       </table>

       

    </div>

      
    <Link to ="/member/periodicpaymentmemForm"><button className="text-white bg-gradient-to-r from-blue-400 via-bblue-500 m-7 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      +</button></Link>
   </div>

)
                

}

export default Periodicpayment




        
    