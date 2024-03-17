import React from 'react'
import { useDispatch } from 'react-redux'
import { Counteraction } from '../Stores/CounterSlice';
const Buttons = () => {

     const dispatch=useDispatch();
    function handleIncrement()
    {
         dispatch(Counteraction.increment());
    }
    function handleDecrement()
    {
      dispatch(Counteraction.decrement());
    }
  return (
    <div>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
</div>
  )
}

export default Buttons