import { useNavigate } from "react-router-dom"
import "./label.scss"
import { AiFillApple, AiFillAppstore, AiFillCheckCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMobile, AiFillPlaySquare, AiFillTwitterSquare } from "react-icons/ai"

const feilds = ["0 Platform Fee", "Easy User Interface", "100's Of Products"]

const Label = () => {
  const navigate = useNavigate()
  return (
    <div className='LABEL'>
      <div className="label-top">
        <button className="py-3 px-8 border border-[white] rounded-md text-[white]">Lowest Price Guarantee</button>
      </div>
      <div style={{lineHeight:"4rem"}} className="flex items-center justify-center text-[white] text-3xl font-semibold text-center">
      Start Selling Your Old Stuff, Today!
      </div>
      <div className="flex items-center gap-10 mt-8 justify-center">
        {
          feilds.map((f,i)=>{
            return (
        <div className="flex items-center gap-4">
          <AiFillCheckCircle className="text-[#ffba00] text-3xl"/> <span className="text-[white]">{f}</span>
        </div>
            )
          })
        }
      </div>
      <div className="flex self-center mt-6 py-3 px-5 rounded-md bg-[#ffba00] cursor-pointer" onClick={()=>navigate('/all')}>PURCHASE NOW</div>
      {/* <div className="label-links">
        <div className="links">
          <b>ITGCART</b>
        </div>
        <div className="links">
          <b>AOUT US</b>
          <span>About ITG-CART Group</span>
        <span>Careers</span>
        <span>Contact Us</span>
        <span>ITG-CART</span>
        </div>
        <div className="links">
          <b>CONTECT</b>
          <span>Reach out to us</span>
        <span><AiFillMail style={{color:"maroon"}}/> itg-cart@gmail.com</span>
        <span><AiFillMobile style={{color:"lightgreen"}}/> 8434068192</span>
        <span><AiFillTwitterSquare style={{color:"lightskyblue"}}/> @itg_cart</span>
        </div>
        <div className="links">
          <b>SOCIAL</b>
          <span>Join us on our social pages</span>
        <span><AiFillInstagram style={{color:"pink"}}/>Instragram</span>
        <span><AiFillFacebook style={{color:"blue"}}/>Facebook</span>
        <span><AiFillLinkedin style={{color:"lightskyblue"}}/>LinkdIn</span>
        </div>
      </div>
      <div className="label-bottom">
        
      </div> */}
    </div>
  )
}

export default Label
