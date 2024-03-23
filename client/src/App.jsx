import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/homepage/Homepage'
import Allproducts from './pages/allproducts/Allproducts'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Label from './components/navbar/label/Label'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'
import Seller from './pages/seller/Seller'
import Hotdeals from './pages/hotdeals/Hotdeals'

const App = () => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const user = useSelector((state)=>state.user.currentUser)

  console.log("user is ",user)

  const {pathname} = useLocation()
  // console.log("pathname", pathname)

  return (
    <>
    {
      (pathname !== '/login' && pathname !== '/register' && pathname !== "/hot-deals") &&
      <Navbar setOpen={setOpen} setSearch={setSearch} search={search}/>
    }
    <Routes>
      <Route path='/' element={user ? <Homepage setOpen={setOpen} open={open}/> : <Navigate to={'/login'}/> } />

      <Route path='/all' element={user ? <Allproducts search={search} /> : <Navigate to={'/login'} />} />

      <Route path='/product/:id' element={user ? <SingleProduct /> : <Navigate to={'/login'} />} />

      <Route path='/register' element={ !user ? <Register /> : <Navigate to={`/`} />} />

      <Route path='/user/:id' element={user ? <Seller /> : <Navigate to={'/login'} />}></Route>
      
    <Route path='/login' element={ !user ? <Login /> : <Navigate to={`/`} />} />
    <Route path='/hot-deals' element={user ? <Hotdeals /> : <Navigate to={'/login'} />} />
    </Routes>
    {
      (pathname !== '/login' && pathname !== '/register') &&
      <Label />
    }
    </>
  )
}

export default App
