import React from 'react'
import { useEffect,useState } from 'react';
function Posts() {
    const[url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
    const[post, setPost] = useState("");

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setPost(json)
            })
    })



    return (
        <>
            <h1 className='text-black text-xl'> Posts  here</h1>


            <table className="table w-[70%] border-2 border-black">
                <thead>
                    <tr className='bg-red-200'>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Data</th>

                    </tr>
                </thead>
                <tbody className='bg-blue-200'>
                    {
                        post && post.map((item, index) => (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>

                            </tr>

                        ))
                    }



                </tbody>
            </table>
        </>
    )


}

export default Posts