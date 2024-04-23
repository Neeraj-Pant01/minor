import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const StarterComponent = () => {
  return (
    <div>
          <div className='min-h-screen flex bg-[rgba(0,0,0,0.9)]'>
      <div className='flex-1 flex-col flex items-center justify-center gap-2'>
        <div className='flex font-bold w-[80%]'>
          <div className='text-3xl text-[white]' style={{lineHeight:'3rem'}}>THRIEFT &</div>
          <div className='text-2xl text-[goldenrod] ml-2' style={{fontFamily:"cursive",lineHeight:"3rem"}}>SAVE</div>
        </div>
        <div className='text-[lightgrey] text-2xl w-[80%]'>
        Search our collection of affordable and usable items
        </div>
        <div className='text-[white] w-[80%] text-xl mt-5'>09+ Unique Layouts</div>
        <div className='w-[80%] mt-4'>
        <button className='px-6 py-2 bg-[#FEBE10] rounded-md'>START NOW</button>
        </div>
        </div>
      <div className='flex-1'>
        <div className='relative h-[100%]'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXDvxdIOq6vw4164tWcR9Wz6DnVmkuLpiBhFAbgBPwg&s' className='w-[50%] absolute rounded-lg rotate-[20deg] right-10'/>

          <img src='https://5.imimg.com/data5/SELLER/Default/2022/11/BI/GR/DM/42341821/second-hand-laptop.jpg' className='w-[40%] mt-7 rotate-[20deg] rounded-lg' />

          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGllis6mTlEOrgUbqDC56b5x_B7IyS2zTIAcfzuwPrIw&s' className='w-[30%] rotate-[20deg] absolute bottom-56 rounded-lg'/>

          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMR9fNn7zGVZqhFBHn75ofElc9Lua29a3y2-Kpo3vAWQ&s' className='w-[40%] rotate-[20deg] right-[30%] absolute bottom-20 rounded-lg' />

        </div>
      </div>
    </div>
    <div className='bg-[#FEBE10] py-3 flex items-center gap-4 px-10'>
      <AiOutlineArrowRight className='bg-[black] rounded-full text-[white] w-[20px] h-[20px]'/> get step by step guide to use
    </div>
    </div>
  )
}

export default StarterComponent
