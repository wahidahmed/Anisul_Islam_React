import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';

import Todos from './Todos';

const Home = () => {

    const[todos,setTodos]=useState([]);

    const addTodo=(item)=>{
        setTodos((prvItem)=>{
            return [...prvItem,{item}]
        });
    }
  return (
    <div  className='container mt-2'>
        <div className='row'>
            <div className='col-5'>
            <AddNewTodo  onAddNewTodo={addTodo}/>
            </div>
            <div className='col-7'>
            <Todos todosList={todos}/>
            </div>
        </div>
       
    </div>
  )
}

export default Home
