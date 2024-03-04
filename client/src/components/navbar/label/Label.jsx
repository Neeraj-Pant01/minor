import "./label.scss"
import { AiFillApple, AiFillAppstore, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMobile, AiFillPlaySquare, AiFillTwitterSquare } from "react-icons/ai"

const Label = () => {
  return (
    <div className='LABEL'>
      <div className="label-top">
        {/* <div className="label-top-left">
          ITGCART.
        </div>
        <div className="label-top-right">
        Promoting the reuse of old items benefits the environment and students alike, fostering sustainability and providing affordable resources for education
        </div> */}
      </div>
      <div className="label-links">
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
        
      </div>
    </div>
  )
}

export default Label
