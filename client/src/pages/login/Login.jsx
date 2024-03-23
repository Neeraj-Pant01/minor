import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import "./login.scss"
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const [register, setRegister] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = ["I", "T", "G", "-", "C", "A", "R", "T"]

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = register ? await axios.post(`${import.meta.env.VITE_REACT_APP_URI}/auth/register`,{username:e.target[0].value,email:e.target[1].value,mobile:e.target[2].value,password:e.target[3].value}) : await axios.post(`${import.meta.env.VITE_REACT_APP_URI}/auth/login`,{
        email:e.target[0].value,password:e.target[1].value
      })
      dispatch(login(response.data))
      response.status === 200 && navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  const signGoogle = async () =>{
    signInWithPopup(auth , provider).then((result)=>{
      axios.post(`${import.meta.env.VITE_REACT_APP_URI}/auth/google`,{
        email:result.user.email,
        mobile:result.user?.phoneNumber || "",
        username:result.user.displayName,
        image:result.user.photoURL
      }).then((res)=>{
        dispatch(login(res.data))
      res.status === 200 && navigate('/')
      })
    }).catch((err)=>console.log(err))
  }


  return (
    <div className='login-wrapper'>
      <div className="left-login-warpper">
      <h1 className='title'>ITG-CART</h1>
        {/* <img src='/itg2.jpeg' className='logo'/> */}
        {/* {
          name.map((item,i)=><h1 style={{ transform: i === 3 ? 'rotate(90deg)' : 'none' }}>{item}</h1>)
        } */}
      </div>
      <div className="right-login-wrapper">
      <img src='/itg2.jpeg' className='logo'/>

      <form action='submit' onSubmit={handleLogin}>
        {
          register &&
          <input type='text' placeholder='enter username' />
        }
        <input type='email' placeholder='enter your email' />
        {
          register &&
          <input type='text' placeholder='enter mobile Number' />
        }
        <input type='password' placeholder='enter your password' />
        {
          register ?
        <button className='l-btn'>Register</button>
          :
        <button className='l-btn'>Login</button>
        }
        {
          !register ?
        <p>Dont't have an account ?</p>
        :
        <p>Already have an account</p>
        }
        {/* <Link to={'/register'}>Register</Link> */}
        {
          register ?
          <b style={{color:"white", cursor:"pointer"}} onClick={()=>setRegister(false)}>login</b>
          :
          <b style={{color:"white", cursor:"pointer"}} onClick={()=>setRegister(true)}>Register manually</b>
        }
      </form>
      {
        !register &&
        <button style={{marginTop:"20px"}} className='l-btn' onClick={signGoogle}>Sign In With Google</button>
      }
      </div>
    </div>
  )
}

export default Login
