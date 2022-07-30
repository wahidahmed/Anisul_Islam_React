import React, { useState } from 'react'
import Todo from './Todo'

const Todos = (props) => {

  const[id,setId]=useState('');

  const fnDeleteDoto=(id)=>{
    setId(id);
    props.onDeleteTodos(id);
  }

  return (
    <section>
        {
            props.todosList.map((item)=>{
                return (
                    <Todo key={item.id} todo={item.item} id={item.id} onDeleteTodo={fnDeleteDoto}/>
                )
            })
        }
      
    </section>
  )
}

export default Todos
