import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';
import Todos from './Todos';


const defaultTodos=['todo1','todo2','todo3'];
const Home = () => {
    const [todoList,setTodoList]=useState(defaultTodos);

const fnAddToDo=(newtodo)=>{
    console.log(newtodo)
    setTodoList([...todoList,newtodo]);
}
    
  return (
    <div>
        <AddNewTodo  addTodo={fnAddToDo}/>
        <hr/>
      <Todos todoList={todoList}/>
    </div>
  )
}

export default Home
