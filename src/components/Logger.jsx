import React, { useEffect } from 'react';

const Logger = () => {

    useEffect(()=>{
        console.log("Component mounted");
    },[])
  return (
  <div style={{backgroundColor:'lightblue', height:"300px", textAlign:'center'}}>
  <h1> this is logger component </h1>
  <h2> check in the console weather useEffect run on initial mount </h2>
  </div>
  )
}

export default Logger