import React, { useState } from 'react'
import "./style.scss"
import { AiFillCloseSquare } from 'react-icons/ai'

const Deal = ({d}) => {
    const [open, setOpen] = useState(false)

    console.log("ends in",new Date(d.createdAt).getHours() + d.closingTime)
    console.log("current",new Date().getHours())
    return (
        <div className='deal'>
            <div className="left">
                <img src={d?.productImage || "noimg"} />
                <div>PRICE : <b style={{ color: "green" }}>{d.price}/</b></div>
            </div>
            <div className="mid-box">
                <b>{d.productName}</b>
                <p>{d.productDesc}</p>
                <div>used months : <b>{d.usedTime}</b></div>
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
                            Deal closes in : <b style={{ color: "red" }}>{d.closingTime}:00</b>
                        </div>
                        <button className='buy' onClick={() => setOpen(true)}>BUY NOW</button>
                    </div>
            }
        </div>
    )
}

export default Deal
