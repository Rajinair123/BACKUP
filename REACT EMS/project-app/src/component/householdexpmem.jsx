import React,{useEffect,useMemo} from 'react'
import { Link } from 'react-router-dom'
import householdexpStore from '../store/householdexpStore'
import moment from 'moment'
import householdStore from '../store/householdStore'
import dayjs from 'dayjs'
const  Householdexpense =()=>{

  const isSameOrAfter= require("dayjs/plugin/isSameOrAfter")
  const isSameOrBefore= require("dayjs/plugin/isSameOrBefore")
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)

  const householdexpense=householdexpStore((state)=>state.householdexpense)
    const retriveHouseholdexp=householdexpStore((state)=>state.retriveHouseholdexp)
    const retriveHousehold =householdStore((state)=>state.retriveHousehold)
    const deleteHouseholdexp = householdexpStore((state)=>state.deleteHouseholdexp)
   const setFilterdHouseholdexp=householdexpStore((state)=>state.setFilterdHouseholdexp)
const setHouseholdExpname = householdexpStore((state)=>state.setHouseholdExpname)
const households = householdStore((state)=>state.households)
const setFiltereddata = householdexpStore((store)=>store.setFiltereddata)

const onhandleChange=()=>{
  let optionSelected=document.getElementById("n2").value;
let selectedHouseName=householdexpense.filter((he)=>{
  if(optionSelected==he.household.name){
  return he
  }

})
setHouseholdExpname(selectedHouseName)
}


   const dropdownChangeHandler = async() => {
    let optionSelected = document.getElementById("n2").value;
     let shouldBeGreaterThanDate = moment().subtract(optionSelected,'d').format('YYYY-MM-DD');
     let filteredExpense = householdexpense.filter((expense)=>{
      let expenseDate = moment(expense.paymentDetails[0].date).format('YYYY-MM-DD')+1
      if (expenseDate>shouldBeGreaterThanDate) {
          return expense
      }
     })
     console.log("shouldBeGreaterThanDate",filteredExpense);
     setFilterdHouseholdexp(filteredExpense)
     
   };

useEffect(()=>{
   retriveHouseholdexp()
   retriveHousehold()
},[])

const total = useMemo(()=>{
  let total = 0;
  householdexpense?.map(elem=>{total += elem?.paymentDetails[0].amount});
  return total;
},[householdexpense]);
 console.log("total",total)



 const handleFilterDate = async(field) => {
  let optionSelected = document.getElementById("startDate").value;
  console.log("optionSelected",optionSelected )
  const filteredData =householdexpense.filter((p) => {
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
  const filteredData = householdexpense.filter((p) => {
    if (field === "to" && dayjs(p.paymentDetails[0].date).isSameOrBefore(dayjs(optionSelected)))
    {
      
    return p;
     }
    
   
  });

  setFiltereddata(filteredData);
  console.log("filterddata",filteredData)
}; 


return(
        <div className="flex-col  flex items-center   ">
          <div className='m-2'>
            <button className='bg-gray-500 hover:bg-gray-700 mb-25 text-white font-bold py-2 px-4 border m-1 border-gray-700 rounded'>Total expenses</button>
            <span className='mr-20 font-bold text-lg'>$.{total}</span>

            <label><i class="fas fa-filter w-30"></i></label>
   <select id="n1" className='bg-gray-500 hover:bg-gray-500  text-white font-bold py-2  px-4 border ml-5 m-2 border-gray-500 rounded'  
   onChange={()=>{dropdownChangeHandler()}} >
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




        <select id="n2" className="w-30 px-4 py-2 mt-2 border rounded-md
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
        <h2 className="text-black-500  font-bold  font-serif text-center text-3xl m-2 "></h2>
       <table className="shadow-lg justify-center table-fixed mb-10 ">
           <thead>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black ">Household</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Expense Type</th>
             <th className="bg-blue-300 border text-left px-1 py-2 text-black">payment Details</th>
             <th className="bg-blue-300 border text-left px-1 py-2 text-black">Date</th>    
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Description</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Paid through</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Paid By</th>
               <th className="bg-blue-300 border text-left px-1 py-2 text-black">Delete</th>
               
        
                   
   

     



           </thead>
           
           <tbody>
                { householdexpense.map((h)=>(
                   <tr key={h._id}> 
                       
                       <td className="border px-1 py-2"> {h.household.name}</td> 
                       <td className="border px-1 py-2">{h.expensetype.name}</td>
                     <td className="border px-1 py-2">{h.paymentDetails[0].amount},{h.paymentDetails[0].method}</td>  
                   <td className="border px-1 py-2">
                        {moment(h.paymentDetails[0].date).format('DD-MM-YYYY')}
                        </td>
                     <td className="border px-1 py-2">{h.description}</td>
                       <td className="border px-1 py-2">{h.paidThrough}</td>
                       <td className="border px-1 py-2">{h.paidBy}</td>
                         <td className="border px-1 py-2">
                       <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                       onClick={()=>{deleteHouseholdexp(h._id).then(()=>retriveHouseholdexp())}}
                       >delete</button>
                       </td>
                    </tr>
               ))} 
           </tbody>
       </table>
       
           </div>
           <Link to ="/member/householdexpmemForm"><button className="text-white bg-gradient-to-r mb-15 from-blue-400 via-bblue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  +</button></Link>
           
       
  
    
       
    
        </div>



     )




}
 export default Householdexpense;