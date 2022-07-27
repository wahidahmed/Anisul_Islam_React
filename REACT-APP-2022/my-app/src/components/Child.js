import React from 'react'

const Child = (props) => {

    props.onData("i am from child to parent dataaaa");
  return (
    <div>
      <p>{props.data}</p>
    </div>
  )
}

export default Child
