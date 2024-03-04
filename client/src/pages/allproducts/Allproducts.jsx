import { AiOutlineArrowDown } from "react-icons/ai"
import Product from "../../components/navbar/product/Product"
import "./all.scss"
import { useEffect, useRef, useState } from "react"
import makeApiRequest from "../../utils/makeApiRequest"

const Allproducts = ({search}) => {
  const[sortby, setSortby] = useState("sales")
  const[options, setOptions] = useState(false)
  const[products, setProducts] = useState([])
  const min = useRef()
  const max = useRef()

  const api = makeApiRequest()

  const handleClick = (data) =>{
    setOptions(false);
    setSortby(data)
    console.log(min.current?.value)
  }

  const loadingProducts = async () =>{
    try{
      const resPonse = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/products?search=${search}&min=${min.current?.value}&max=${max.current?.value}&sort=${sortby}`)
      // console.log(resPonse)
      setProducts(resPonse.data)
    }catch(err){
      console.log(err)
    }
  }

  const Apply = () =>{
    loadingProducts()
  }

  useEffect(()=>{
    loadingProducts()
  },[search, sortby])

  return (
    <div className="allproducts">
        <h1>FIND YOUR FAVORATE PRODUCTS AT THE BEST PRICES</h1>
        <div className="sort">
          <b>SORT BY</b>
          <div className="price">
            <div className="min">
              <b>min</b>
              <input type="number" ref={min}></input>
            </div>
            <div className="min">
              <b>max</b>
              <input type="number" ref={max}/>
            </div>
            <button className="apply" onClick={Apply}>APPLY</button>
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
          {
            products.map((p)=>{
              return (
                <Product p={p} key={p._id}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Allproducts
