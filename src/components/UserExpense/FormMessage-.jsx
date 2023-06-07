import React,{useState} from 'react';

import './FormMessage.css';

// don't change the Component name "App"
 function Message() {
    
    const [currentMessage,updatedMessage] =useState('');
    
    const userInputHandler =(e)=>{
        updatedMessage(e.target.value)
    }
    
    return (
        <form className='item-form'>
            <label>Your message</label>
            <input type="text"  value = {currentMessage} onChange={userInputHandler} />
            <p>{currentMessage.trim().length >= 3 ? 'Valid message' : 'Invalid message'
            }
            </p>
        </form>
    );
}
export default Message;