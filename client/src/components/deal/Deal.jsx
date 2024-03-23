import React, { useState } from 'react'
import "./style.scss"
import { AiFillCloseSquare } from 'react-icons/ai'

const Deal = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='deal'>
            <div className="left">
                <img src='https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp' />
                <div>PRICE : <b style={{ color: "green" }}>999/</b></div>
            </div>
            <div className="mid-box">
                <b>PRODUCT NAME</b>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quidem odit voluptas? Alias voluptatem dolorum dignissimos est repudiandae laborum nihil et veritatis, corrupti ab, at, tenetur perferendis suscipit possimus ex voluptate molestias. Magni, facere est. Omnis quibusdam possimus fugiat tempore?</p>
                <div>used months : <b>9</b></div>
            </div>
            {
                open ?
                    <div className='buying-details'>
                        <div className='d-details'>
                            <div style={{display:"flex", alignItems:"center",gap:"5px"}}>SELLER : <b>seller name</b>                 <AiFillCloseSquare className='close-icon' onClick={() => setOpen(false)} /></div>
                            <div>Address : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fa</p></div>
                            <div>CONTACT : <p>email : email@gmail.com</p> <p>moble : 9012010712</p></div>
                            <button>CHAT WITH OWNER</button>
                        </div>
                    </div>
                    :
                    <div className="right">
                        <div>
                            Deal closes in : <b style={{ color: "red" }}>09:99</b>
                        </div>
                        <button className='buy' onClick={() => setOpen(true)}>BUY NOW</button>
                    </div>
            }
        </div>
    )
}

export default Deal
