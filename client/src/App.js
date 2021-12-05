import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Profile from './components/Profile'


const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App