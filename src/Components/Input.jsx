import React, { useRef } from 'react'

import Privarcy from './Privarcy';
import { useDispatch } from 'react-redux';
import { Counteraction } from '../Stores/CounterSlice';
const Input = () => {

      const inputdata=useRef();
        const disptch=useDispatch();
      function handleAdd()
      {
         let data=inputdata.current.value;
         
         disptch(Counteraction.add(data));
        
          
      }
  return (
     
        
    <div>
        <input type='number' ref={inputdata}/>
        <span><button onClick={handleAdd}>Add</button></span>
        <Privarcy />
    </div>
  )
}

export default Input