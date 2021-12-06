import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import ProductIndex from './components/ProductIndex'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/browse' element={<ProductIndex />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App


