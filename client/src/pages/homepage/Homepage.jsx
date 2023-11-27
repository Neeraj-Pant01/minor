import React, { useState } from 'react'
import "./homepage.scss"
import Product from '../../components/navbar/product/Product'
import Label from '../../components/navbar/label/Label'
import { Link } from 'react-router-dom'
import { AiFillCamera, AiOutlineClose } from 'react-icons/ai'
import SliderComponent from '../../components/slider/Slider'
import { sliderData } from '../../data'

const Homepage = ({setOpen, open}) => {
  const [file, setFile] = useState(null)
  return (
    <div className='homepage'>
      <div className="homepage-wrapper">
        <SliderComponent />
        {
          open && 
          <div className="sell">
            <div className="sell-top">
              <b>UPLOAD AN ITEM NOW</b>
              <AiOutlineClose className='AiOutlineClose' onClick={()=>setOpen(false)}/>
            </div>
            <div className="sell-mid">
              <h2>ADD PRODUCT IMAGE</h2>
              <div className="div-img">
              <label htmlFor='file'>
                <AiFillCamera />
              </label>
              <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" />
              </div>
              <input id='file' type="file" onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
            </div>
            <div className="sell-bottom">
              <input type="text" placeholder='enter your product complete Name'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='enter product description...'></textarea>
              <div className="price-add">
              <input type="number" className='price' placeholder='enter price' />
              <input type="text" className='price-input' placeholder='enter address' />
              </div>
              <div className="upload-product">
              <input type='number' className="price" placeholder='used months'></input>
            <button>UPLOAD</button>
            </div>
            </div>
        </div>
        }
      </div>
      <div id='PRODUCTS' className="products">
        <p>New Suggestions</p>
        <div className="products-wrapper">
        <Product />
        <Product sliderData={sliderData[0].image} />
        <Product sliderData={sliderData[1].image} />
        <Product sliderData={sliderData[2].image}/>
        <Product sliderData={sliderData[3].image}/>
        <Product sliderData={sliderData[4].image}/>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
      </div>
    </div>
  )
}

export default Homepage
