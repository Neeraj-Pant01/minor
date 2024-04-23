import React from 'react'

const More = ({d}) => {
  return (
    <div className='flex items-center justify-center w-[350px] h-[350px] cursor-pointer relative'>
        <div className='absolute w-[90%] h-[90%] hover:text-[violet] transition-all rounded-md bg-[rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-[1.02] text-[white] text-xl' style={{fontFamily:"cursive"}}>{d?.title}</div>
      <img src={d?.img} alt='' className='w-[90%] h-[90%] rounded-md hover:scale-[1.1]' />
    </div>
  )
}

export default More
