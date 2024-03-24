import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counterx, setCounterx] = useState(0);
  const [countery, setCountery] = useState(0);

  // useEffect(function sideEffect() {
  //   console.log("This is the side effect");
  // },[ counterx])

  
  // we can also try it for both render
  useEffect(function sideEffect() {
    console.log("This is the side effect");
  },[])

  const increaseCounterx = () => {
    setCounterx(counterx + 1);
  };

  const increaseCountery = () => {
    setCountery(countery + 1);
  };

  return (
    <div>
      <h3>Count = {counterx}</h3>
      <button onClick={increaseCounterx}>Increase +1</button>

      <h3>Count = {countery}</h3>
      <button onClick={increaseCountery}>Increase +1</button>
    </div>
  );
};

export default Counter;
