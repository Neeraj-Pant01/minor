import {AiOutlineHeart } from "react-icons/ai"
import "./product.scss"
import {Link} from "react-router-dom"

const Product = ({sliderData}) => {
    const title = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores reprehenderit nam totam provident consequatur ab debitis sunt, minima officiis hic."
  return (
    <a>
        <div className='Product'>
      <div className="product-top">
        <img src={sliderData ? sliderData : 'https://i.gadgets360cdn.com/products/large/Poco-f5-5g-db-709x800-1683638719.jpg'}></img>
        <div className="heart">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="product-bottom">
        <h2>₹999</h2>
        <p>2021</p>
        <b>{title.substring(0,30)}...</b>
        <span>address</span>
      </div>
    </div>
    </a>
  )
}

export default Product
