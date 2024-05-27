import React, { useState } from 'react'
import "./navbar.scss"
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineDollarCircle, AiOutlineLogout, AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useInView} from "react-intersection-observer"

const Navbar = ({setOpen,setSearch,search}) => {
    const [dropmenu, setDropmenu] = useState(false)
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState("/")

    const {ref, inView} = useInView({
      threshold : 0.5
    })

    const user = useSelector((state)=>state.user.currentUser)

    const handleSearch = (e) =>{
      setSearch(e.target.value)
    }

    const navigate = useNavigate();

    const handleSellbtn = () =>{
      if(user){
      setOpen(true)
      }else{
        navigate('/login')
      }
    }

    console.log(user?.image)

    const handleLogOut = () =>{
      localStorage.clear()
      window.location.reload()
    }

    const changeClass = (colorClass) =>{
      setCurrentPath(colorClass)
    }

  return (
    <div className="navbar-wrapper bg-[black] sticky top-0">
            <div className='navbar'>
      <div className="left">
        <Link style={{display:"flex", alignItems:"center"}} to={'/'} className='web-title'>
          THRIFT & SAVE
          {/* <img className='pp-image' src='/itg2.jpeg' /> */}
        </Link>
        <Link to={'/all'} className={location.pathname === "/all" ? 'change-col' : 'nav-options' } onClick={()=>changeClass('/all')}>
            Products
        </Link>
        <div className="nav-options h">
            Customers
        </div>
        <div className="nav-options h">
            Our Data
        </div>
        <Link className={location.pathname === '/hot-deals' ? 'change-col' : 'nav-options'} to={'/hot-deals'} onClick={()=>changeClass('/hot-deals')}>Hourly</Link>
      </div>
      <div className="mid">
        <input type="text" placeholder='search here...'  onChange={handleSearch}/>
        <AiOutlineSearch style={{cursor:"pointer"}}/>
      </div>
      <div className="right">{
        user ?
        <button className='login' onClick={handleLogOut}>Log Out <AiOutlineLogout /></button>
        :
        (location.pathname!=='/login') &&
        <button className='login' onClick={()=>navigate('/login')}>Login</button>
      }
        {
          location.pathname === "/" && <button className='sell' onClick={handleSellbtn}>sell now <AiOutlineDollarCircle /></button>
        }
        {
        user &&
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                  <img className='hidden md:pp-image' src={user?.image || "https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg"} alt='profile-image' />
                  <span className='hidden md:block' style={{color:"darkgrey", fontWeight:"bold"}}>{user?.username}</span>
          </div>
      }
      </div>
    </div>
    </div>
  )
}

export default Navbar
