import React from 'react'
import { useSelector } from 'react-redux'


const Counter = () => {

   const obj= useSelector((state)=>(state))
   console.log(obj); 
  return (
    <>
   
      {
        !obj.privacy.private ? <h2>Count: {obj.counter.count}</h2> :<h2>Count is Private</h2>
      }
      
     
     
     </>
  )
}

export default Counter