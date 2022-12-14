import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Todo = (props) => {
    const {title,desc}=props.todo;
    const {id}=props;

    const fnDelete=(id)=>{
       props.onDeleteTodo(id);
    }
  return (
    <article>
        <div className=''>
           
                
                <Card className=' bg-info'>
                    <div className='row'>
                        <div className='col-8'>
                        <Card.Header>{title}</Card.Header>
                        <Card.Body>{desc}</Card.Body>
                    
                        </div>
                        <div className='col-4'>
                            <Card.Footer>
                                <Button size="sm" variant='danger' onClick={()=>{fnDelete(id)}}><i className='fa fa-trash fa-2x'></i></Button> 
                            </Card.Footer>
                      
                        </div>
                    </div>
                   
                    
                </Card>
                
           
        
        </div>
        
    </article>
  )
}

export default Todo
