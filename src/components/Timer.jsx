import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0); // Initialize state with useState

  useEffect(() => {
    console.log("timer start")
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Use functional update to ensure you get the latest state value
    }, 1000);

    return () => {
        
      clearInterval(intervalId); // Clear interval on component unmount
      console.log("timer end")
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Timer;
