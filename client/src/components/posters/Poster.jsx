import React from 'react'
import "./poster.scss"

const Poster = ({img}) => {
  return (
    <div className='test flex items-center justify-center cursor-pointer relative '>
      <div style={{fontFamily:"cursive"}} className='flex h-[100%] w-[100%] absolute bg-[transparent items-center justify-end bg-[rgba(0,0,0,0.5)] text-[white] text-3xl font-bold flex-col py-2 rounded-md'>{img?.title}</div>
      <img src={img?.img} className='w-[300px] h-[300px] rounded-md' />
    </div>
  )
}

export default Poster
