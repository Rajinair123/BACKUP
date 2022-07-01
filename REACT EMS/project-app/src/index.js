import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from "./component/user"
import Login from "./component/login"
import Household from "./component/household"
import reportWebVitals from './reportWebVitals';
import HouseholdForm from './component/householdForm';
import Register from "./component/register";
import Householdexp from './component/householdexp';
import HouseholdexpForm from './component/householdexpForm';
import Expensetype from './component/expensetype';
import ExpensetypeForm from './component/expensetypeForm'
import Periodicpayment from './component/periodicpayment';
import PeriodicpaymentForm from './component/periodicpaymentform';
import Householdmember from './component/householdmember';
import Navbar from './component/Navbar';
import Dashboard from './component/dashboard';
import PrimaryMember from './component/primarymember';
import Dashboard1 from './component/dashboard1';
import UserForm from './component/userForm';
import Member from './component/member';
import Dashboard2 from './component/dasboard2';
import Periodicpaymentmem from "./component/perodicpaymentmem"
import Householdexpmem from "./component/householdexpmem"
import PeriodicpaymentmemForm from './component/periodicpaymentmemform';
import HouseholdexpmemForm from "./component/householdexpmemform"
import Model from './component/model';
import HouseholdmemberForm from './component/householdmemberForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route index element={<Login />} />
  <Route path="/admin" element={<Navbar/>} > 
  <Route path="userForm" element={<UserForm />} /> 
  <Route path="userForm/:userId" element={<UserForm />} />
  <Route path="expensetypeForm" element={<ExpensetypeForm/>} />
  <Route path="expensetypeForm/:expenseId" element={<ExpensetypeForm/>} />
  <Route path="dashboard" element={<Dashboard/>} > 
  <Route path="user" element={<User />} />
 <Route path="expensetype" element={<Expensetype/>} />
   </Route> 
  </Route>

  <Route path="/" element={<Login />} />
  <Route path="/primarymember" element={<PrimaryMember/>} >  
   <Route path="householdForm" element={<HouseholdForm/>} />
   <Route path="householdmemberForm" element={<HouseholdmemberForm/>} />
   <Route path="householdmemberForm/:householdmemId" element={<HouseholdmemberForm/>} />
   <Route path="householdForm/:householdId" element={<HouseholdForm/>} />
   <Route path="periodicpaymentForm" element={<PeriodicpaymentForm/>} />
  <Route path="periodicpaymentForm/:periodicpaymentId" element={<PeriodicpaymentForm/>} />
  <Route path="householdexpForm/:householdexpId" element={<HouseholdexpForm />} />
  <Route path="householdexpForm" element={<HouseholdexpForm />} />
  <Route path="dashboard1" element={<Dashboard1/>} >  
  <Route path="household" element={<Household />} />
  <Route path="householdexp" element={<Householdexp />} />
  <Route path="householdmember" element={<Householdmember/>} />
  <Route path="periodicpayment" element={<Periodicpayment/>} />
   </Route> 
   </Route> 
   <Route path="/" element={<Login />} />
   <Route path="/model" element={<Model />} />
  <Route path="/member" element={<Member/>} >
  <Route path="householdexpmemForm" element={<HouseholdexpmemForm />} />  
  <Route path="periodicpaymentmemForm" element={<PeriodicpaymentmemForm/>} />
  <Route path="dashboard2" element={<Dashboard2/>} > 
  <Route path="periodicpaymentmem" element={<Periodicpaymentmem/>} />
  <Route path="householdexpmem" element={<Householdexpmem/>} />

  {/* <Route path="periodicpayment" element={<Periodicpayment/>} /> */}
  </Route> 
  </Route>
  
  
  
  <Route path="/register" element={<Register/>} />
  

    {/* <Route path="/" element={<App />} >
    <Route path="navbar/user" element={<User />} />
    
    <Route path="/household" element={<Household />} />
    <Route path="/householdForm/:householdId" element={<HouseholdForm/>} />
   
    
    <Route path="/householdexp" element={<Householdexp/>} />
    <Route path="/householdexpForm/:householdexpId" element={<HouseholdexpForm/>} />
    <Route path="/expensetype" element={<Expensetype/>} />
    <Route path="/householdmember" element={<Householdmember/>} />
    <Route path="/expensetypeForm/:expenseId" element={<ExpensetypeForm/>} />
    <Route path="navbar/periodicpayment" element={<Periodicpayment/>} />
    <Route path="/periodicpaymentForm/:periodicpaymentId" element={<PeriodicpaymentForm/>} />
 </Route>
  */}

  </Routes>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

