import React from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import Register from './Register'
import Login from './Login'



const Navbar = () => {




  return (
    <Menu>
      <Icon name='user' fitted size='large'/>
      <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Register />
            Register
          </Dropdown.Item>
          <Dropdown.Item>
            <Login />
            Login
          </Dropdown.Item>
          <Dropdown.Item>
          My Account
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>



  )
}

export default Navbar