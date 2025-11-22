import React from 'react'
import "./poster.scss"
import { useNavigate } from 'react-router-dom'

const Poster = ({img}) => {
  const navigate = useNavigate();
  return (
    <div className='test flex items-center justify-center cursor-pointer relative ' onClick={()=>navigate('/all')}>
      <div style={{fontFamily:"cursive"}} className='flex h-[100%] w-[100%] absolute bg-[transparent items-center justify-end bg-[rgba(0,0,0,0.5)] text-[white] md:text-3xl font-bold flex-col py-2 rounded-md'>{img?.title}</div>
      <img src={img?.img} className='md:w-[300px] md:h-[300px] w-[900px] h-[100px] rounded-md'/>
    </div>
  )
}

export default Poster
