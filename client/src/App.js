import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App