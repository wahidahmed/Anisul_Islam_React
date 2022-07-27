import React from 'react';
import uuid from 'react-uuid';

const todos=[
    {
        id:uuid(),
      title:'todos 1',
      desc:'desctription for todos 1'
    },
    {
        id:uuid(),
      title:'todos 2',
      desc:'desctription for todos 2'
    },
    {
        id:uuid(),
      title:'todos 3',
      desc:'desctription for todos 3'
    }
  ]

const List=()=>{
    return (
    <div>
       { todos.map((item)=>{
            const {id,title,desc}=item;
               return (<div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
               </div>);
            })
        }
    </div>
    );
}

export default List;