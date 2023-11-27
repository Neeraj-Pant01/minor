import "./label.scss"
import { AiFillApple, AiFillAppstore, AiFillPlaySquare } from "react-icons/ai"

const Label = () => {
  return (
    <div className='LABEL'>
      <div className="label-top">
        <div className="label-left">
          <img src="https://wallpaperaccess.com/full/4258490.jpg" alt="" />
        </div>
        <div className="label-mid">
          <h1>TRY THE APPLICATION APP <br></br> ON MOBILE</h1>
        </div>
        <div className="label-right">
          <b>GET YOUR APP TODAY</b>
          <div className="platform">
            <AiFillApple className="AiFillApple" />
            <AiFillAppstore className="AiFillAppstore" />
          </div>
        </div>
      </div>
      <div className="label-links">
        <div className="links">
          <b>AOUT US</b>
          <span>About WEBAPP Group</span>
        <span>Careers</span>
        <span>Contact Us</span>
        <span>WEBAPPPEOPLE</span>
        </div>
        <div className="links">
          <b>AOUT US</b>
          <span>About WEBAPP Group</span>
        <span>Careers</span>
        <span>Contact Us</span>
        <span>WEBAPPPEOPLE</span>
        </div>
        <div className="links">
          <b>AOUT US</b>
          <span>About WEBAPP Group</span>
        <span>Careers</span>
        <span>Contact Us</span>
        <span>WEBAPPPEOPLE</span>
        </div>
      </div>
      <div className="label-bottom">

      </div>
    </div>
  )
}

export default Label
