import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductIndex from './components/ProductIndex'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('api/products') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return (
    <>
      {/* <h1>Hello World</h1> */}
      <BrowserRouter>
        <Routes>
          <Route exact path ='/browse' element={<ProductIndex/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
    
}

export default App