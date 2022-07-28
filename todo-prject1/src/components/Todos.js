import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <section>
        {
            props.todosList.map((item)=>{
                return (
                    <Todo key={item.id} todo={item}/>
                )
            })
        }
      
    </section>
  )
}

export default Todos
