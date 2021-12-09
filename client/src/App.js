import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductIndex from './components/ProductIndex'
import ProductShow from './components/ProductShow'
import Bag from './components/Bag'


const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/browse' element={<ProductIndex />} />
        <Route exact path='/:id' element={<ProductShow />} />
        <Route path='/bag' element={<Bag />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


