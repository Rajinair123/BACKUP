// import React from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import householdStore from "../store/householdStore";
// import periodicpaymentStore from '../store/periodicpaymentStore'

// const Model=()=> {

// return(

//  <div>
//  <div className="container">
//     <div></div>

//  </div>


//  </div>


// )





//     const households = householdStore((state)=>state.households)
//     const setPeriodicName=periodicpaymentStore((state)=>state.setPeriodicName)
//     //console.log("households",households);
//     const retriveHousehold = householdStore((state)=>state.retriveHousehold)
//     const retrivePeriodicpayment = periodicpaymentStore((state)=>state.retrivePeriodicpayment)
//     const periodicpayment = periodicpaymentStore((state)=>state.periodicpayment)
//     const [showModal, setShowModal] = React.useState(false);
//     console.log("periodicpayment",periodicpayment);


//    useEffect(()=>{
//     retriveHousehold()
//     retrivePeriodicpayment()
//    },[])

//    const onhandleChange=()=>{
//     let optionSelected=document.getElementById("n1").value;
//     //console.log("optionSelected",optionSelected);
//     //let selectedHouseName=
//     let selectedHouseName=periodicpayment.filter((p)=>{
//       //console.log("p",p.household.name);
//       if(optionSelected==p.household.name){
//       return p
//       }
//    })
//    setPeriodicName(selectedHouseName)
//   }




//   return(
   
  
//     <div className="container">
       
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                 <select id="n1" className="w-30 px-4 py-2 mt-2 border rounded-md
//                focus:outline-none focus:ring-1 focus:ring-blue-600" onClick={()=>onhandleChange()} >
              
//               <option value="" disabled selected>
//             House Hold
//               </option>
//               {households.map((h) => (
//                 <option key={h._id} value={h.name}>
//                   {h.name}
//                 </option>
//               ))}
            
//         </select>
                  
            
       
//           </div>
//              <div className="flex items-center justify-between m-5">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"><Link to ="/member/dashboard2"> OK
//               </Link></button>
               
//             </div>
          
        
//     </div>
            
           
   
  
// }
// export default Model