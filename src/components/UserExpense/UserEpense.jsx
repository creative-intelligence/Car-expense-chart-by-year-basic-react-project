import React,{useState} from "react";
import './UserExpense.css'
import ExpenseForm from "./ExpenseForm";


const UserExpense=(props)=>{
    // e is a parameter fetcing values from expenseData
    // of child component into parentComponent UserExpense
    

const [isEditing, setisEditing]=useState(false)



    const  saveExpenseDataHandler =(e)=>{
        const expenseData={
            ...e,//spread-operator whcih access all values in parent expenseData const.
            id:Math.random().toString()
           
        };
        
        console.log("ExpenseData=>",expenseData);
        console.log("Data Rendered From expenseeData Using Spread Operator");
        props.onAddExpense(expenseData);
        setisEditing (false);
        
    };

const editEventHandler =()=>{
    setisEditing(true);
}
const stopEditingHandler =()=>{
    setisEditing (false);
}


return(
    <div className="item">
{/* Onsaveexpensedata is function pointer prop stores a function as a value which is saveExpenseDataHandler */}
        {!isEditing && (<button className="btn" onClick={editEventHandler}>Add New Expense</button>)}
       {isEditing && (
       <ExpenseForm 
       onSaveExpenseData={saveExpenseDataHandler} 
        onCancelForm ={stopEditingHandler} 
        /> )}
    </div>

)

};

export default UserExpense;