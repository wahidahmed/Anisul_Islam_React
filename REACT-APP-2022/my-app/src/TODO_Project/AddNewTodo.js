import React, { useState } from 'react'

const AddNewTodo = ( props) => {

    const [todo,setTodo]=useState('');

    const fnChangeTodo=(e)=>{
        setTodo(e.target.value);
    }
    const fnSubmit=(e)=>{
        e.preventDefault();
        props.addTodo(todo);
    }
  return (
    <form action='' onSubmit={fnSubmit}>
        <h4>Add New Todo </h4>
      <label htmlFor='todo'>New ToDo :-</label>
      <input type='text' name='todo' id='todo' value={todo} onChange={fnChangeTodo} />
      <button type='submit'>add</button>
    </form>
  )
}

export default AddNewTodo
