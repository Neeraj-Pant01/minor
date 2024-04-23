import React from 'react'
import { AiFillBackward } from 'react-icons/ai'
import "./style.scss"

const functionLeft = [1,2,3]


const RightComponent = ({dir, index}) =>{
    return (
        <div style={{marginTop: `${index===0 ? "150px" : "0px"}`,flexDirection: `${dir==="left" ? "row-reverse": ""}`}} className='anim flex gap-6 items-center justify-end'>
                    <div className='flex flex-col justify-end w-[40%] gap-3'>
                        <h1 className='font-bold text-end text-lg text-[rgba(0,0,0,0.7)]'>Good Quality Products</h1>
                    <p className='text-[grey] font-thin text-sm italic text-end leading-6'>Build beautiful websites within seconds as quickly as never before, A high quality themes to grow your business and sales.
                    </p>
                    </div>
                    <div className='w-[100px] shadow-md flex h-[100px] rounded-full bg-[white] items-center justify-center cursor-pointer text-[#FEBE10] hover:text-[white] hover:bg-[#FEBE10] transition-all'>
                        <AiFillBackward className='text-4xl'/>
                    </div>
                </div>
    )
}

const Functionalities = () => {
  return (
    <div className='flex flex-col bg-[#f5f2f2] py-7 min-h-screen'>
      <h1 style={{fontFamily:"sans-serif"}} className='text-2xl font-bold text-center h-max w-full mt-10'>A Fresh Decade of Wow</h1>
      <h1 style={{fontFamily:"sans-serif"}} className='text-2xl font-bold text-center h-max mt-2 w-full text-[rgba(0,0,0,0.6)]'>Core Value Of Our Product</h1>
      <div className='flex mt-16 py-4'>
        <div className='flex h-[600px] flex-col gap-28 flex-1 border-r justify-end px-6 pr-12'>
           {
            functionLeft.map((f,i)=>{
                return (
                    <div className='anim-left flex gap-6 items-center justify-end'>
                    <div className='flex flex-col justify-end w-[40%] gap-3'>
                        <h1 className='font-bold text-end text-lg text-[rgba(0,0,0,0.8)]'>Good Quality Products</h1>
                    <p className='text-[grey] font-thin text-sm italic text-end leading-6'>Build beautiful websites within seconds as quickly as never before, A high quality themes to grow your business and sales.
                    </p>
                    </div>
                    <div className='w-[100px] shadow-md flex h-[100px] rounded-full bg-[white] items-center justify-center cursor-pointer text-[#FEBE10] hover:text-[white] hover:bg-[#FEBE10] transition-all'>
                        <AiFillBackward className='text-4xl'/>
                    </div>
                </div>
            )
            })
           }
        </div>
        <div className='flex flex-1 border-l flex-col px-4 items-start gap-28 justify-start pl-12'>
            {
                functionLeft.map((item,index)=><RightComponent dir="left" index={index}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default Functionalities
