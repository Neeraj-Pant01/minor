import { AiOutlineArrowDown } from "react-icons/ai"
import Product from "../../components/navbar/product/Product"
import "./all.scss"
import { useState } from "react"

const Allproducts = () => {
  const[sortby, setSortby] = useState("bestsellings")
  const[options, setOptions] = useState(false)

  const handleClick = (data) =>{
    setOptions(false);
    setSortby(data)
  }
  return (
    <div className="allproducts">
        <h1>FIND YOUR FAVORATE PRODUCTS AT THE BEST PRICES</h1>
        <div className="sort">
          <b>SORT BY</b>
          <div className="price">
            <div className="min">
              <b>min</b>
              <input type="number"></input>
            </div>
            <div className="min">
              <b>max</b>
              <input type="number" />
            </div>
          </div>
          <div className="newest">
            <b style={{display:"flex", alignItems:"center ",gap:"10px"}}>{sortby==="sales" ? "Best Sellings" : "Newest"}  </b>
            <AiOutlineArrowDown style={{cursor:"pointer"}} onClick={()=>setOptions(!options)}/>
            {
              options && 
              <div className="sort-options">
                {
                  sortby==="sales" ? 
                  <b onClick={()=>handleClick("createdAt")} style={{cursor:"pointer"}}>Newest</b>
                  :
                  <b onClick={()=>handleClick("sales")}style={{cursor:"pointer"}}>Best Sellings</b>
                }
              </div>
            }
          </div>
        </div>
        <div className="allproducts-wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
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
  )
}

export default Allproducts
