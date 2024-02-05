import React, { useState } from 'react'

const Counter: React.FC<{ initialCount: number; }> = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount || 0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count - 1);
  };

  const reset = () =>{
    setCounter(0)
  }

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span>{counter}</span>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
