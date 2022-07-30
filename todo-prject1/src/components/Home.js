import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';
import {v4 as uuidv4} from 'uuid';

import Todos from './Todos';

const Home = () => {

    const[todos,setTodos]=useState([]);

    const addTodo=(item)=>{
        setTodos((prvItem)=>{
            console.log(prvItem);
            return [...prvItem,{id:uuidv4(),item}]
        });

        console.log('todos',todos)
    }

    const fnDelete=(id)=>{
   
      setTodos((prvTodos)=>{
        let filterTodos=prvTodos.filter((todo)=>todo.id!==id);
        return filterTodos;
      });
    }
  return (
    <div  className='container mt-2'>
        <div className='row'>
            <div className='col-5'>
            <AddNewTodo  onAddNewTodo={addTodo}/>
            </div>
            <div className='col-7'>
            <Todos todosList={todos} onDeleteTodos={fnDelete}/>
            </div>
        </div>
       
    </div>
  )
}

export default Home
