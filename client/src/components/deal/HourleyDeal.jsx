import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const HourleyDeal = ({d}) => {
    const navigate = useNavigate()
    const handleBuy = () =>{
        navigate(`/product/${d?._id}`)
    }
  return (
    <div className='flex w-[400px] rounded-md bg-[white] items-center justify-center py-3 flex-col'>
      <img src={d?.productImage} className='w-[90%] h-[200px] rounded-md'/>
      <div className='flex items-center w-full mt-3 px-8' >
        <div className='flex flex-col flex-1'>
        <span className='text-lg text-[rgba(0,0,0,0.8)]'>{d?.productName}</span>
        <span className='text-sm font-semibold'><span className='text-[grey]'>PRICE : </span>{d?.price}/</span>
        </div>
        <AiOutlineLink className='py-2 px-2 text-4xl rounded-full bg-[#febf10] hover:bg-[#020240] transition-colors cursor-pointer hover:text-[white]'/>
      </div>
      <div className='flex mt-2 items-center justify-center w-full gap-3'>
        <span className='text-[rgba(0,0,0,0.8)]'>DEAL CLOSES IN : </span>
        <span className='text-[green]'>{d?.closingTime}:00</span>
      </div>
            {/* <div className='flex flex-col border py-4 px-4 flex-[1.2] bg-gradient-to-b from-[violet] to-[lightblue] items-center justify-center rounded-md'>
      <img src={d?.productImage} className='md:w-[80%] rounded-md' />
      <div className='flex items-center gap-5 mt-3'>
        <h1>DEAL CLOSES IN :</h1>
        <h1 className='text-[red] md:text-xl'>{d.closingTime}:00</h1>
      </div>
      <button className='border outline-none bg-[white] text-[black] py-2 px-5 rounded-md mt-4 text-xs' onClick={handleBuy}>BUY NOW</button>
    </div>
    <div className='flex flex-1 flex-col gap-4 border-l-0 px-5 py-5 bg-[#faf7f7] h-b'>
        <b>{d?.productName}</b>
        <p className='text-[grey]'>{d?.productDesc}</p>
        <div>used months : <b>{d?.usedTime}</b></div>
        <div className='text-[grey]'>PRICE : <b className='text-[green]'>{d?.price}</b></div>
    </div> */}
    </div>
  )
}

export default HourleyDeal
