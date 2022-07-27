import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
        <h4>Toeo List</h4>
      {
        props.todoList.map((item,i)=>{
            return(
                <Todo key={i} data={item}/>
            )
        })
      }
    </div>
  )
}

export default Todos
