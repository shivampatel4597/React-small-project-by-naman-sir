import React, { useState, useEffect } from 'react';

const DynamicFetcher = () => {
  const [id, setId] = useState(1);
  const [show, setShow] = useState(null); // Initially, show is set to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const jsonData = await response.json();
        setShow(jsonData); // Set show to the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div style={{backgroundColor:'lightblue', height:"300px", textAlign:'center'}}>
      {show && ( // Conditional rendering for the fetched data
        <div key={show.id}>
          <h1>Post ID: {show.id}</h1>
          <h1>Title: {show.title}</h1>
          <h1>Body: {show.body}</h1>
        </div>
      )}
      <button onClick={() => setId(id + 1)}>Increment ID</button>
      <button onClick={() => setId(id - 1)}>Decrement ID</button>
    </div>
  );
};

export default DynamicFetcher;
