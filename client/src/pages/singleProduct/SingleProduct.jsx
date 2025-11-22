
import React, { useEffect, useState } from 'react';
import './single.scss';
import Chat from '../../components/chat/Chat';
import { Link, useParams } from "react-router-dom"
import makeApiRequest from "../../utils/makeApiRequest"
import { AiOutlineArrowRight, AiOutlineMessage, AiOutlinePhone } from "react-icons/ai"
import Product from '../../components/navbar/product/Product';

const SingleProduct = () => {

  const { id } = useParams()
  const [chat, setChat] = useState(false)
  const [item, setItem] = useState({})
  const [owner, setOwner] = useState({})
  const [suggestedProducts, setSuggestedProducts] = useState([])

  const api = makeApiRequest()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/products/${id}`)
        setItem(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    loadProduct()
  }, [id])

  useEffect(() => {
    const loadOwner = async () => {
      try {
        const response = item?.userId && await api.get(`${import.meta.env.VITE_REACT_APP_URI}/auth/${item?.userId}`)
        setOwner(response?.data)
      } catch (err) {
        console.log(err)
      }
    }
    loadOwner()
  }, [item?.userId])

  useEffect(() => {
    const loadSuggestedProducts = async () => {
      try {
        const response = await api(`${import.meta.env.VITE_REACT_APP_URI}/products/suggested/products`)
        console.log("response is ", response)
        setSuggestedProducts(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    loadSuggestedProducts();
  }, [])

  return (
    <div className="main-container">
      <div className='flex flex-col'>
        <div className='flex items-center gap-2 border-b-2 pb-5'>
          <Link className='text-[goldenrod] underline flex gap-4 items-center justify-center' to={'/'}>HOME <AiOutlineArrowRight /> </Link>
          <Link className='text-[goldenrod] underline flex gap-4 items-center justify-center' to={'/all'}>PRODUCTS <AiOutlineArrowRight /> </Link>
          <Link className='text-[goldenrod] underline flex gap-4 items-center justify-center' to={`/product/${item?._id}`}>{item.productName}</Link>
        </div>
        <div className='flex flex-col'>
          <h1 style={{ lineHeight: "6rem" }} className='text-4xl text-[rgba(0,0,0,0.7)] font-semibold'>{item?.productName}</h1>
          <p className='w-[60%] text-[rgba(0,0,0,0.6)]'>{item?.productDesc}</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className="left-container">
          <div className='flex w-[80%] h-full border items-center justify-center bg-[#eeebeb] rounded-lg'>
            <img src={item?.image} alt="" />
          </div>
          {/* <h1>₹{item?.price}</h1> */}
        </div>
        <div className="right-container">
          {
            chat ?
              <Chat setChat={setChat} ownerId={owner?._id} />
              :
              <>
                <div className="price-info border-2 rounded-md">
                  <h1>PRICE : ₹ {item?.price}</h1>
                  <p>used months : {item?.usedTime}</p>
                  <p className='text-[14px]'>{item?.productDesc}</p>
                  <b className='text-[#6f9a37]'>{item?.productName}</b>
                  <div className="add-date">
                    <p>Address : {item?.address}</p>
                    <p className='dateOfUpload'>UPLOADED ON : {new Date(item?.createdAt).toDateString()}</p>
                  </div>
                  <button className='bg-[#ffba00] rounded-md py-2 px-4 text-[white]'>{item?.productName}</button>
                </div>

                <div className="owner-info border-2 rounded-md">
                  <span style={{ fontWeight: "bold", color: "orange" }}>SELLER DETAILS</span>
                  <div className="top">
                    <Link to={`/user/${owner?._id}`} state={owner}>
                      <img src={owner?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4znITWJipPxYSgCLy_sb-G_K8_U3S0byImaqI8rwjo3uO21NVoVg2tkq8ApYgaHHH4oQ&usqp=CAU'} alt='' />
                    </Link>
                    <p>{owner?.username}</p>
                  </div>
                  <div className="chat-icons">
                    <span><AiOutlineMessage className='chat-icon' onClick={() => setChat(true)} /></span>
                    <a href={`tel:${owner?.mobile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span><AiOutlinePhone className='chat-icon' /></span>
                    </a>
                  </div>
                  {/* <b onClick={() => setChat(true)}>CHAT WITH OWNER</b> */}
                </div>
                {/* <div className="more-desc">
              Initiate a conversation with the seller now to inquire further about the product, gather additional information, and arrange a booking for the desired date.
              </div> */}
              </>
          }
        </div>
      </div>
      <div className='flex mt-16 flex-col items-center justify-center'>
        <h1 style={{ lineHeight: "3rem" }} className='md:text-4xl text-[rgba(0,0,0,0.8)] text-2xl'>Explore More Products</h1>
        <p style={{ fontFamily: "cursive" }} className='text-center text-[grey] italic'>Expand Your Horizons with Our Wide Array of Products. Delve Into a Catalog of Quality Offerings Tailored to Your Needs</p>
        <div className='flex items-center justify-center flex-wrap px-10 py-6'>
          {
            suggestedProducts.length > 0 ?
              suggestedProducts.map((p, i) => {
                return (
                  <Product p={p} key={i} />
                )
              })
              :
              <span>No Products To Show</span>
          }
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
