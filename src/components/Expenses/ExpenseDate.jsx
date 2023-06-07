import React from 'react';

import './ExpenseDate.css';



function Expensedate(props){
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const month=props.date.toLocaleString('en-US',{month:'long'});

    return(
        <div >
    <div className='item-day'>{day}</div>
      <div className='item-month'>{month}</div>
      <div className='item-year'>{props.date.getFullYear()}</div>
        </div>
    );
}

export default Expensedate;