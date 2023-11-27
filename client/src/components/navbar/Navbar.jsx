import React, { useState } from 'react'
import "./navbar.scss"
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({setOpen}) => {
    const [dropmenu, setDropmenu] = useState(false)
    const location = useLocation()
  return (
    <div className="navbar-wrapper">
            <div className='navbar'>
      <div className="left">
        <Link to={'/'} className='web-title'>WEBSITENAME.</Link>
        <div className="nav-options first">
          MENU
        </div>
        <Link to={'/all'} className="nav-options">
            Products
        </Link>
        <div className="nav-options">
            Customers
        </div>
        <div className="nav-options">
            Our Data
        </div>
      </div>
      <div className="mid">
        <input type="text" placeholder='search here...'/>
        <AiOutlineSearch style={{cursor:"pointer"}}/>
      </div>
      <div className="right">
        <button className='login'>Login</button>
        {
          location.pathname === "/" &&         <button className='sell' onClick={()=>setOpen(true)}>SELL</button>
        }
      </div>
    </div>
    {
        // dropmenu &&
        <div className={dropmenu?"dropmenu":"dropmenu-hide"}>
          <h3>ALL CATEGORIES</h3>
          {
            dropmenu ?  <AiOutlineArrowUp onClick={()=>setDropmenu(false)} style={{cursor:"pointer",fontWeight:"bolder",color:"black", fontSize:"24px"}}/>  :  <AiOutlineArrowDown className='AiOutlineArrowDown' onClick={()=>setDropmenu(true)} style={{cursor:"pointer",fontWeight:"bolder",color:"black",fontSize:"24px"}}/>
          }
          {
            dropmenu && 
            <div>
              </div>
          }
    </div>
    }
    </div>
  )
}

export default Navbar
