import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
const[data, setData]  = useState(null);

    useEffect(()=>{
async function fetching(){
 try{
 const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
 const jsonData = await reponse.json();
   setData(jsonData)
 }
 catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetching();
    },[])
  return (
    <div style={{backgroundColor:'lightgreen', height:"300px", textAlign:'center'}}>
     <ul>
  {data && (
    <li key={data.id}>
        <h1> Id :{data.id}</h1>
        <h2>Title: {data.title}</h2>
        <p> content: {data.body}</p>
    </li>
  )}
  </ul>

   
    </div>
  
  )
}

export default DataFetcher