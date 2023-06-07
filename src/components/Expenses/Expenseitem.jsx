import React from 'react';

import './Expenseitem.css';
import Expensedate from './ExpenseDate.jsx';
import Card from '../UI/Card';


function Expenseitem(props) {

  // const [title,setTitle]=useState(props.title);
  // // console.log('State Evaluated')

  // const clickHandler  =()=>{
  //  setTitle ('Updated Car Insurance')
  // };
   
    // const day=props.date.getFullYear();

  return (
    <Card className='item'>
     <Expensedate date={props.date}></Expensedate>

      <div className='item-description'>
        <h2>{props.title}</h2>
      </div>
      <div className='item-price'>${props.amount}</div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default Expenseitem;
