import React, { useState } from 'react'
import User from './components/User';
import Posts from './components/Posts';


function Main() {

    const[show, setShow] = useState(true);

    function toggle(check){
   setShow(!show)

   
   
    }
  return (
    <div>
  <div className='flex flex-col  space-y-4 items-center justify-center'>

    <button onClick={toggle} className={`px-4 py-2 my-4 text-xl font-bold rounded-md ${show ?  'bg-green-500 text-black' : 'bg-blue-400  text-white' }`}>
   {show ?  "show post" : "show user"}
    </button>

    {show ?  <User/> : <Posts/>}
 
  

  
  </div>

    </div>
  )
}

export default Main