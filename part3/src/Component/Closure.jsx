import React from 'react'

const Closure = () => {
  function outer() {
    let b = 10;
    function inner() {
      var a = 20;
      console.log(a + b);
    }
    return inner;
  }
  return (
    <div>
      <h3>Closure = javascript related feature</h3>
    </div>
  )
}

export default Closure
