import React from 'react';
import './input.css';

const Input = (props) => {
    return(
        <input className='form-control' type="text" onChange={props.onChangeHandler} placeholder="Add some todo..." value={props.inputVal}></input> 
    )
}

export default Input;