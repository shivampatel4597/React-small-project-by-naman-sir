import React,{useState} from 'react'
import Timer from './Timer'
const ControlTimer = () => {
    const[showTimer, setShowTimer] = useState(true)
  return (
    <div>

        {showTimer ? <Timer/> : "not showing"}
        <button onClick={()=>setShowTimer(!showTimer)}>show and hide</button>
   
        
    </div>
  )
}

export default ControlTimer