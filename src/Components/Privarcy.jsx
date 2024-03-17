import React from 'react'
import { useDispatch } from 'react-redux'
import { PrivacyAction } from '../Stores/PrivacySlice'

const Privarcy = () => {
       
        const Dispatch=useDispatch()
     function handlePrivacy()
     {
        Dispatch(PrivacyAction.privacy())
     }
  return (
    <div><button onClick={handlePrivacy}>Privacy</button></div>
  )
}

export default Privarcy