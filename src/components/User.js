import React, { useEffect, useState } from 'react'

const User = () => {

    const[url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
    const[user, setUser] = useState("");

    useEffect(()=>{
       fetch(url)
       .then(response => response.json())
       .then((json) => {
        console.log(json)
        setUser(json)
       })
    })

  return (
    <>
   <h1 className='text-black text-xl'> Users Post here</h1>
   

<table className="table w-[70%] border-2 border-black">
  <thead>
    <tr className='bg-red-200'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody className='bg-blue-200'>
    {
        user && user.map((item, index)=>(
            <tr key={index+1}>
            <th scope="row">{index+1}</th>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
          </tr>

        ))
    }
   
   

  </tbody>
</table>
    </>
  )
}

export default User