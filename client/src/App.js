import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductIndex from './components/ProductIndex'
import ProductShow from './components/ProductShow'

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="site-wrapper">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/browse' element={<ProductIndex />} />
          <Route exact path='/:id' element={<ProductShow />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App


