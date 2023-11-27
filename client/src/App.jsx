import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/homepage/Homepage'
import Allproducts from './pages/allproducts/Allproducts'
import { Route, Routes } from 'react-router-dom'
import Label from './components/navbar/label/Label'
import SingleProduct from './pages/singleProduct/SingleProduct'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Navbar setOpen={setOpen} />
    <Routes>
      <Route path='/' element={<Homepage setOpen={setOpen} open={open}/>} />
      <Route path='/all' element={<Allproducts />} />
      <Route path='/product/:id' element={<SingleProduct />} />
    </Routes>
    <Label />
    </>
  )
}

export default App
