import React from 'react'
import { AiOutlineSync } from 'react-icons/ai'
import "./loader.scss"

const Loader = () => {
  return (
    <div className='Loader'>
        <AiOutlineSync className='AiOutlineSync'/>
        <b>UPLOADING...</b>
    </div>
  )
}

export default Loader
