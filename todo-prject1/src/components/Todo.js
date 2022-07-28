import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Todo = (props) => {
    const {id,title,desc}=props.todo;
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <i className='fa fa-trash fa-2x'></i>
        </div>
    </article>
  )
}

export default Todo
