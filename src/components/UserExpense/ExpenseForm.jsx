import React,{useState} from "react";


const ExpenseForm = (props) => {


    // Saving and Storing the user input value by useState 
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    // console.log(enteredTitle);
    
 

const titleChangeHandler =(e)=>{
    setEnteredTitle(e.target.value);
}
const amountChangeHandler =(e)=>{
    setEnteredAmount(e.target.value);
}
const dateChangeHandler = (e) =>{
    setEnteredDate(e.target.value);
};

const submitHandler =(e)=>{
    e.preventDefault();
 
    // Passing ExpenseData to the userExpense Component
const expenseData ={
    title:enteredTitle,
    amount:+enteredAmount,
    date:new Date(enteredDate)
};

// console.log(expenseData);
// console.log(enteredTitle)

// Now we r calling this prop from child component and this props
// have the function as value which will store expenseData as a parameter
props.onSaveExpenseData(expenseData);// passing expenseData as an Argument
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');

}
  return (

      <form onSubmit={submitHandler} >
<div className="new-item">
    <div className="new-control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
    </div>
    <div className="new-control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
    </div>
    <div className="new-control">
        <label>Date</label>
        <input type="date"  min="2000-01-01" max="2023-04-01 " value={enteredDate} onChange={dateChangeHandler}/>
    </div >
</div>
<div className="ex-action">
      <button className="btn" type="button" onClick={props.onCancelForm}>Cancel</button>
    <button className="btn" type="submit">Add Expense</button>
  
</div>

      </form>
     

      
    
  );
};
export default ExpenseForm;
