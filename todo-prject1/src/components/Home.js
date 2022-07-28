import React from 'react';

import Todos from './Todos';

const dumyTodos=[
    {
        id:1,
        title:'title 1',
        desc:'descripton 1 for todo project'
    },
    {
        id:2,
        title:'title 2',
        desc:'descripton 2 for todo project'
    }
]

const Home = () => {
  return (
    <div>
      <Todos todosList={dumyTodos}/>
    </div>
  )
}

export default Home
