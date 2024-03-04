
import React, { useEffect, useState } from 'react';
import './single.scss';
import Chat from '../../components/chat/Chat';
import {useParams} from "react-router-dom"
import makeApiRequest from "../../utils/makeApiRequest"
import { AiOutlineMessage, AiOutlinePhone } from "react-icons/ai"

const SingleProduct = () => {

  const {id} = useParams()
  const [chat, setChat] = useState(false)
  const [item, setItem] = useState({})
  const [owner, setOwner] = useState({})

  const api = makeApiRequest()

  useEffect(()=>{
    const loadProduct = async () =>{
      try{
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/products/${id}`)
        setItem(response.data)
      }catch(err){
        console.log(err)
      }
    }
    loadProduct()
  },[id])

  useEffect(()=>{
    const loadOwner = async () =>{
      try{
        const response = item?.userId && await api.get(`${import.meta.env.VITE_REACT_APP_URI}/auth/${item?.userId}`)
        setOwner(response?.data)
      }catch(err){
        console.log(err)
      }
    }
    loadOwner()
  },[item?.userId])

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={item?.image} alt="" />
        {/* <h1>₹{item?.price}</h1> */}
      </div>
      <div className="right-container">
        {
          chat ?
            <Chat setChat={setChat} />
            :
            <>
              <div className="price-info">
                <h1>PRICE : ₹ {item?.price}</h1>
                <p>used months : {item?.usedTime}</p>
                <p>{item?.productDesc}</p>
                <b>{item?.productName}</b>
                <div className="add-date">
                  <p>{item?.address}</p>
                  <p className='dateOfUpload'>{new Date(item?.createdAt).toDateString()}</p>
                </div>
              </div>

              <div className="owner-info">
              <span style={{fontWeight:"bold", color:"black"}}>SELLER DETAILS</span>
                <div className="top">
                  <img src={owner?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4znITWJipPxYSgCLy_sb-G_K8_U3S0byImaqI8rwjo3uO21NVoVg2tkq8ApYgaHHH4oQ&usqp=CAU'} alt='' />
                  <p>{owner?.username}</p>
                </div>
                <div className="chat-icons">
                  <span><AiOutlineMessage className='chat-icon' onClick={()=>setChat(true)}/></span>
                  <span><AiOutlinePhone className='chat-icon'/></span>
                </div>
                {/* <b onClick={() => setChat(true)}>CHAT WITH OWNER</b> */}
              </div>
              <div className="more-desc">
              Initiate a conversation with the seller now to inquire further about the product, gather additional information, and arrange a booking for the desired date.
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default SingleProduct;
