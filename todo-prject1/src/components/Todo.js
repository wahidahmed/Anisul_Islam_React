import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Todo = (props) => {
    const {id,title,desc}=props.todo;
  return (
    <article>
        <div className='container mt-2 bg-success'>
           
                
                <Card>
                    <div className='row bg-info'>
                        <div className='col-8'>
                        <Card.Header>{title}</Card.Header>
                        <Card.Body>{desc}</Card.Body>
                    
                        </div>
                        <div className='col-4'>
                            <Card.Footer>
                            <Button size="sm" variant='danger'><i className='fa fa-trash fa-2x'></i></Button> 
                            </Card.Footer>
                      
                        </div>
                    </div>
                   
                    
                </Card>
                
           
        
        </div>
        
    </article>
  )
}

export default Todo
