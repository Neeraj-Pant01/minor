import {AiOutlineHeart } from "react-icons/ai"
import "./product.scss"
import {Link} from "react-router-dom"

const Product = ({p}) => {
  return (
    <Link to={`/product/${p._id}`}>
        <div className='Product'>
      <div className="product-top">
        <img src={p?.image}></img>
        <div className="heart">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="product-bottom">
        <h2>₹{p?.price}</h2>
        <p>{new Date(p?.createdAt).getUTCDate()}-{new Date(p?.createdAt).getUTCMonth()}-{new Date(p?.createdAt).getUTCFullYear()}</p>
        <b>{(p?.productName)}</b>
        <span> {(p?.productDesc)?.substring(0,30)}...</span>
        <span className="used-time">used time : {p?.usedTime} months</span>
        <span>{p?.address}</span>
      </div>
    </div>
    </Link>
  )
}

export default Product
