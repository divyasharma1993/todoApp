import React, { useState } from 'react';
import './App.css';
import Input from './component/Input/input';
import Button from './component/Button/button';
import TodoList from './component/TodoList/todoList';

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todolist") || "[]"));
  const [inputVal, setInputVal] = useState('');

  const onChangeHandler = (e) => {
    let val = e.target.value.replace(/^ +/gm, '')
    setInputVal(val);
  }

  const addTodoHandler = (e) => {
    e.preventDefault();
    let newTodo = [...todoList, { name: inputVal, isCompleted: false }];
    setTodoList(newTodo);
    localStorage.setItem("todolist", JSON.stringify(newTodo));
    setInputVal('');
  }

  const completeTaskHandler = (index) => {
    const toDoArray = [...todoList];
    toDoArray[index].isCompleted = !toDoArray[index].isCompleted;
    setTodoList(toDoArray);
    localStorage.setItem("todolist", JSON.stringify(toDoArray));
  }

  return (

    <div className="container">
      <div className="add-item">
        <Input onChangeHandler={(e) => onChangeHandler(e)} inputVal={inputVal} />
        <Button addTodoHandler={(e) => addTodoHandler(e)} />
      </div>
       <h1 className="text-primary">Total todos remaining: {todoList.length - todoList.filter(item => item.isCompleted).length} out of {todoList.length}.</h1>
      <TodoList todoList={todoList} completeTaskHandler={(i) => completeTaskHandler(i)} />
    </div>


  );
}

export default App;
