import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./seller.scss"
import makeApiRequest from '../../utils/makeApiRequest'
import AddedProduct from '../../components/addedproduct/AddedProduct'

const Seller = () => {
    const {id} = useParams()
    const location = useLocation()
    const [deals, setDeals] = useState([])
    console.log(location.state)

    const api = makeApiRequest()

    useEffect(()=>{
        const getDeals = async () =>{
            try{
                const responses = await api.get(`/deals/deal/${id}`)
                setDeals(responses.data)
                console.log("response",responses.data)
            }catch(err){
              console.log(err)
            }
        }
        getDeals()
    },[id])

  return (
    <div className='seller'>
      <div className="seller-top">
        <h2 style={{color:"grey", marginBottom:"20px"}}>SELLER DETAILS</h2>
        <div className="seller-image">
            <img src={location.state.image || "https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg"} />
        </div>
        <div className="seller-info">
            <div className='info-box'><span style={{color:"grey"}}>Name : </span><span> {location.state.username}</span></div>
            <div className='info-box'><span style={{color:"grey"}}>contact : </span><span> {location.state.email}</span></div>
            {
              location.state.mobile &&
              <div className='info-box'><span style={{color:"grey"}}>mobile : </span><span> {location.state.mobile}</span></div>
            }
        </div>
      </div>
      <div className='added-products'>
        <b>PRODUCTS ADDED BY THIS SELLER</b>
    <div className="added-products-wrapper">
        {
          deals.map((d,i)=>{
            return (
              <AddedProduct d={d} key={d._id} />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Seller
