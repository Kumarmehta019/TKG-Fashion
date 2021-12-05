import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductIndex from './components/ProductIndex'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path ='/browse' element={<ProductIndex/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
    
}

export default App