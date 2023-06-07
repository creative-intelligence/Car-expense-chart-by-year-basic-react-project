import React, { useState } from "react";
import Message from "./components/UserExpense/FormMessage-";
import NewExpense from "./components/Expenses/Newexpense";
import UserExpense from "./components/UserExpense/UserEpense";

const DummyExpenses = [
  { id:'e1', title: "Car Insurance", amount: 150.94, date: new Date(2019, 10, 4) },
  {id:'e2', title: "Bus Insurance", amount: 59.98, date: new Date(2023, 8, 4) },
  { id:'e3',title: "Taxi Insurance", amount: 29.95, date: new Date(2023, 2, 4) },
  { id:'e4',title: "Taxi Insurance", amount: 7, date: new Date(2021, 4, 4) },
  { id:'e5',title: "Taxi Insurance", amount: 799.95, date: new Date(2020, 7, 4) },
  { id:'e6',title: "Taxi Insurance", amount: 199.95, date: new Date(2020, 1, 4) },
  { id:'e7',title: "Taxi Insurance", amount: 100.95, date: new Date(2020, 11, 4) }
];

function Hello() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const userExpenseData = (euserdata) => {
    // console.log('App.js')
    // concatting Dummy Expenses array with new array data entered
    // by the user using spread operator
    setExpenses((prevExpenses) => {
      return [euserdata, ...prevExpenses];
    });
    console.log("Data rendered from UserExpense Child Component");
  };

  return (
    <div>
      <UserExpense onAddExpense={userExpenseData} />
      <Message />
      <NewExpense items={expenses} />
    </div>
  );
}

export default Hello;
