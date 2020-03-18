import React from 'react';
import TodoListItem from './TodoListItem/todoListItem';
import './todoList.css';

const TodoList = (props) => {
    return (
    
        <ul>
            {props.todoList && props.todoList.map((todo, i) => {
                return (
                    <TodoListItem key={i} todo={todo} completeTaskHandler={() => props.completeTaskHandler(i)} />
                )
            })}
        </ul>
    )
}

export default TodoList;