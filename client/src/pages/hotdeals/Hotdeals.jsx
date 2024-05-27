import React, { useEffect, useState } from 'react'
import "./style.scss"
import Deal from '../../components/deal/Deal'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {useNavigate} from "react-router-dom"
import DealsUpload from '../../components/DealsUpload/DealsUpload'
import makeApiRequest from '../../utils/makeApiRequest'
import { useSelector } from 'react-redux'
import HourleyDeal from '../../components/deal/HourleyDeal'
import Appfeatures from '../../components/appfeatures/Appfeatures'
import WhatsNew from '../../components/whatsNew/WhatsNew'

const Hotdeals = () => {
  const navigate = useNavigate()
  const [on, setOn] = useState(false)
  const [deals, setdeals] = useState([]);

  const token = useSelector((state)=>state.user.currentUser.accesstoken)
  const api = makeApiRequest(token)


  useEffect(()=>{
    const getAllDeals = async () =>{
      try{
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/deals`);
        setdeals(response.data)
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    getAllDeals()
  },[])

  return (
    <>
    <div className='hot-deals'>
        <div className="hot-deals-navbar">
          <AiOutlineArrowLeft className='a-left' onClick={()=>navigate('/')}/>
          <h2>DON'T MISS THESE HOURLY DEALS</h2>
          <button onClick={()=>setOn(true)}>UPLOAD HOURLY DEAL</button>
        </div>
        <div className='flex flex-col items-center mt-14 mb-16'>
          <h1 style={{lineHeight:"4rem"}} className='md:text-3xl font-semibold text-xl text-[rgba(0,0,0,0.6)]'>Explore Our Latest Feature</h1>
          <p className='md:w-[50%] w-[80%] text-center text-[grey] italic font-light text-sm'>Discover exclusive hourly deals! Whether you're buying or selling, seize the opportunity to snag incredible discounts or showcase your own products in limited-time offers. Act fast, as these deals won't last long!</p>
        </div>
      <div className="flex mt-8 flex-wrap px-10 justify-center gap-10">
        {/* {
          deals.length > 0 ?
          deals.map((d)=><Deal d={d} key={d._id}/>)
          :
          <b>not deals to show</b>
        } */}
        {
          deals.length > 0 ?
          deals.map((d)=><HourleyDeal d={d} key={d._id}/>)
          :
          <b>not deals to show</b>
        }

      </div>
      {
        on &&
        <div className='upload-screen'>
          <DealsUpload setOn={setOn}/>
      </div>
      }
    <WhatsNew />
    {/* <Appfeatures /> */}
    </div>
    {/* <WhatsNew /> */}
    <Appfeatures />
    </>
  )
}

export default Hotdeals
