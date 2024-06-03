import React, { useState } from 'react'; // Importing useState from 'react'

import "./CSS folder/counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='count'>
        <h1>This is count {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    </>
  );
}

export default Counter;
