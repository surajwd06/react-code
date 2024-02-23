import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    <h2 className='text-orange-700 text-xl flex justify-center font-bold'>User: {userid}</h2>
  )
}

export default User