import React from 'react'
import "./register.scss"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URI}/auth/register`,{username:e.target[0].value,email:e.target[1].value,mobile:e.target[2].value,password:e.target[3].value})
            console.log(import.meta.env.VITE_REACT_APP_URI)
            response.data.status===200 && navigate('/login')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='register'>
        <form action='submit' onSubmit={handleSubmit}>
      <input type='text' placeholder='enter username' />
      <input type='email' placeholder='enter your email'/>
      <input type='text' placeholder='enter your mobile' />
      <input type='password'/>
      <button>REGISTER</button>
      <p>already registered</p>
      <Link to={'/login'}>Login</Link>
        </form>
    </div>
  )
}

export default Register
