import React from 'react'

const Todo = (props) => {
    const {id,title,desc}=props.todo;
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default Todo
