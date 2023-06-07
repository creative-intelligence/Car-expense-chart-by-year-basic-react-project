import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];


for (const expense of props.expenses){
  console.log("App.js Expense Values",props.expenses,{expense})
const expenseMonth= expense.date.getMonth();
// Now CharDataPoints have acees to months label  inside objects in array
// along with the amount of each month from the expenses list from App.jsx Component
// Question From Sir Raheel
chartDataPoints[expenseMonth].value+=expense.amount;
}

  return <Chart dataPoints ={chartDataPoints} />;
};

export default ExpenseChart;


