import React from 'react';
import './button.css';

const Button = (props) => {
    return(
        <button className='btn-primary' onClick={props.addTodoHandler}>Add Todo</button>
    )
}

export default Button