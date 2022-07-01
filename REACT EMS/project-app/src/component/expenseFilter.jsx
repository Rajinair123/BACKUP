import React from 'react';

const ExpensesFilter = () => {
  const dropdownChangeHandler = () => {
    let optionSelected = document.getElementById("n1").value;
    let timeSpan=new Date();
    timeSpan.setDate(timeSpan.getDate()-optionSelected)
   console.log("tim", timeSpan);
   
 };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select id="n1" onChange={()=>{dropdownChangeHandler()}}>
                    <option id="h" value={0}>Today</option>
                    <option id="o1" value={1}>Yesterday</option>
                    <option id="o2" value="7">Last 7 Days</option>
                    <option id="o3" value="180">Last 6 months</option>
                    <option id="o3" value="65">LastYear</option>
                </select>
      </div>
    </div>




  );
};

export default ExpensesFilter;
