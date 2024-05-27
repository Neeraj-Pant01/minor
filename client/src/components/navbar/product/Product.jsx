import {AiOutlineHeart, AiOutlineLink } from "react-icons/ai"
import "./product.scss"
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer"

const Product = ({p}) => {

  const {ref, inView} = useInView({
    threshold : 0.5
  })

  const animationClass = inView ? 'move' : ''

  return (
    <Link to={`/product/${p._id}`}>
        <div ref={ref} className={`Product ${animationClass} shadow-md`}>
      <div className="product-top relative">
        <div className="absolute w-[100%] h-[240px] bg-[rgba(0,0,0,0.4)] rounded-lg"></div>
        <img src={p?.image}></img>
        <div className="heart">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="flex flex-col">
      <div className="flex mt-5 items-center justify-between">
        <h1 className="text-xl text-[rgba(0,0,0,0.8)]">{p?.productName}</h1>
        <AiOutlineLink className="w-[40px] px-2 py-2 text-xl h-[40px] rounded-full bg-[#FEBE10] transition-colors delay-[0.1s] hover:bg-[#090930] hover:text-[white]"/>
      </div>
      <div className="flex gap-2 items-center">
        <b>CATEGORY : </b>
        <span>{p?.cat}</span>
      </div>
      <h2 className="text-xl text-[#febf10]">₹{p?.price}</h2>
      </div>
    </div>
    </Link>
  )
}

export default Product
