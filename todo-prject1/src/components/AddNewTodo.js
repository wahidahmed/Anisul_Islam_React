import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const AddNewTodo = (props) => {

    
    const [todo,setTodo]=useState({title:'',desc:''});

    const {title,desc}=todo;

    const fnSubmit=(e)=>{
        e.preventDefault();
        console.log('todo',todo);
        props.onAddNewTodo(todo);
        setTodo({title:'',desc:''});
    }

    const fnChangeVal=(e)=>{
        let name=e.target.name;
        if(name==='title'){
            setTodo({...todo,title:e.target.value})
        }

        if(name==='desc'){
            setTodo({...todo,desc:e.target.value})
        }
    }

  return (

    <form action='' onSubmit={fnSubmit}>
  
            {/* <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="todoId">Todo Id</span>
                <input type="number" className="form-control" aria-describedby="todoId" name='todoId' required onChange={fnChangeVal}/>
            </div> */}
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="title">Title</span>
                <input type="text" className="form-control" aria-describedby="title" name='title' required onChange={fnChangeVal} value={title}/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="desc">Desc</span>
                <input type="text" className="form-control" aria-describedby="desc" name='desc' required onChange={fnChangeVal}value={desc}/>
            </div>
            <Button type='submit' className='btn btn-sm success mb-2'>Save</Button>
            </form>
  
  )
}

export default AddNewTodo
