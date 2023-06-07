import React, { useState } from "react";

import Expenseitem from "./Expenseitem";
import FilterYear from "../UserExpense/FilterYear";
// import Hello from "../../App";
import Card from "../UI/Card";
// import './Newexpense.css';
import ExpenseChart from "./ExpenseChart";
function NewExpense(props) {
  const [defaultSelectedYear, selectedYear] = useState("2021");

  const filterSelectedYear = (e) => {
    selectedYear(e);
    console.log("Selected Year :", e);
    console.log("Year rendered from child component FilterYear ");

  };

const filteredExpenses =props.items.filter(FilterYear =>{
  return FilterYear.date.getFullYear().toString() ===defaultSelectedYear;
})



let arrListCount=<p>No Data Found</p>

if (filteredExpenses.length>0) {
  arrListCount= filteredExpenses.map((expenses) => (
    <Expenseitem
      key={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
    />
  ))
}




  return (
    <div>
      <Card className="expenses">
        <FilterYear
          defaultYear={defaultSelectedYear}
          onChangeFilterYear={filterSelectedYear}
        />
        <ExpenseChart expenses={filteredExpenses}/>

        {arrListCount}


{/* unique id to avoid bug */}
{/* Always add a unique id key wgile mapping  */}
{/* props.items.map to add a new list to the app component */}
{/* We Can also use ternary operatior for the condition */}



{/* {filteredExpenses.length === 0 && <h4>No Data Found</h4> }
{filteredExpenses.length >0 && 

  filteredExpenses.map((expenses) => (
    <Expenseitem
      key={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
    />
  ))}
         */}


        {/* HardCoded Expense items Now we are using array map method  */}
        {/* <Expenseitem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></Expenseitem>
        <Expenseitem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></Expenseitem>
        <Expenseitem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></Expenseitem> */}
      </Card>
    </div>
  );
}
export default NewExpense;
