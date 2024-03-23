import React from 'react'
import "./style.scss"
import Deal from '../../components/deal/Deal'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {useNavigate} from "react-router-dom"

const Hotdeals = () => {
  const navigate = useNavigate()
  return (
    <div className='hot-deals'>
        <div className="hot-deals-navbar">
          <AiOutlineArrowLeft className='a-left' onClick={()=>navigate('/')}/>
          <h2>DON'T MISS THESE HOURLY DEALS</h2>
          <button>UPLOAD HOURLY DEAL</button>
        </div>
      <div className="hot-deals-wrapper">
        <Deal />
        <Deal />
        <Deal />
        <Deal />
        <Deal />
        <Deal />
        <Deal />

      </div>
      <div className='upload-screen'>
        iam the upload screen
      </div>
    </div>
  )
}

export default Hotdeals
