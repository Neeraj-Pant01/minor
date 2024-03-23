import React from 'react'
import "./style.scss"
import {useNavigate } from 'react-router-dom'

const AddedProduct = ({ d }) => {
    const navigate = useNavigate()
    return (
        <div className="added-product" onClick={() => navigate(`/product/${d?._id}`)}>
            <img src={d?.image}></img>
            <div className="added-product-desc-single">
                <b>{d?.productName}</b><br></br>
                <b style={{color:"black", fontSize:"14px", marginTop:"10px"}}>PRICE : <span style={{color:"green"}}>₹{d?.price}</span></b>
                <p>{(d?.productDesc).substring(0,60)}...</p>
            </div>
            <div className="address-used-time">
                <div><span style={{color:"black", fontWeight:"bold", marginRight:"10px"}}>address:</span><span>{d?.address}</span></div>
                <div><span style={{color:"black", fontWeight:"bold", marginRight:"10px"}}>used months:</span><span>{d?.usedTime}</span></div>
                <div><span style={{color:"black", fontWeight:"bold", marginRight:"10px"}}>uploaded on:</span><span>{new Date(d?.createdAt).toLocaleDateString()}</span></div>
            </div>
        </div>
    )
}

export default AddedProduct
