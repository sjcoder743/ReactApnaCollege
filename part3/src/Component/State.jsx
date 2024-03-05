import React from 'react'
import { useState } from 'react';
const State = () => {
  // set-> update hoker reRender hoti hai (Updater Function)
  // let arr = useState(10)
  // console.log(arr);
  const [count, setCount] = useState(0)
  console.log("Component is rendered");
  console.log(`count = ${count}`)
  return (
    <div>
      <h2>State in React</h2>
      count:  {count}
      <br />
      <button onClick={() => setCount(count + 2)}>
        Increase your count
      </button>
    </div>
  )
}

export default State
