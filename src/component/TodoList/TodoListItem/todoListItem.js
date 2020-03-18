import React from 'react';
import './todoListItem.css';

const TodoListItem = (props) => <li className={props.todo.isCompleted ? 'item-completed cursor-pointer': 'item cursor-pointer' } onClick={props.completeTaskHandler}>{props.todo.name}</li>

export default TodoListItem;