import React, { useState } from 'react'

export default function HookStateFunctional() {

    const[count,setCount]=useState(0);
  const increament=()=>{
setCount(count+1);

  }
  return (
    <div>
      <h1>count by functional state:{count}</h1>
      <button onClick={increament}> functional increament</button>
    </div>
  )
}
