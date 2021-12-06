import React, { useEffect } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import Register from './Register'
import Login from './Login'
import { useNavigate, useLocation } from 'react-router-dom'
import { getPayload } from './helpers/auth'


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation() // returns an object containing a string of the pathname of users current location

  useEffect(() => {

  }, [location.pathname]) // when location of user changes, trigger a rerender

  const userIsAuthenticated = () => {
    const payload = getPayload() // get payload part of the token by calling get payload function
    if (!payload) return false // if there is no payload returned function returns false
    const now = Math.round(Date.now() / 1000) // get the current time in milliseconds and convert to seconds as this is the format the expiry time on the token is in
    return now < payload.exp // check if the current time is less than the expiry time, returns a boolean
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token') // remove token from local storage
    navigate('/') // redirect user to the home page
  }

  return (
    <Menu>
      <Icon name='user' fitted size='large' />

      <Dropdown>
        <Dropdown.Menu>

          {!userIsAuthenticated() ?
            <>
              <Dropdown.Item>
                <Register />
              </Dropdown.Item>

              <Dropdown.Item>
                <Login />
              </Dropdown.Item>
            </>
            :
            <>
              <Dropdown.Item>
                My Orders
              </Dropdown.Item>
            
              <Dropdown.Item onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </>
          }
        </Dropdown.Menu>
      </Dropdown>

    </Menu>



  )
}

export default Navbar