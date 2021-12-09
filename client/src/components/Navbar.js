import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Image, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { getPayload } from './helpers/auth'
import Register from './Register'
import Login from './Login'


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const payload = getPayload()

  useEffect(() => {

  }, [location.pathname])

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate('/')
  }

  console.log('PAYLOAD', payload)

  return (
    <Menu style={{ padding: '0px 50px' }} color='teal' secondary inverted size='large' id='nav'>
      <Container>
        <Menu.Item header as='a' href='/' position='left'>
          <Image style={{ marginRight: '10px' }} size='tiny' src='https://i.imgur.com/uOjwmDf.png' circular />
          <h3 style={{ marginTop: 'unset', color: 'white' }}>TKG Fashion</h3>
        </Menu.Item>
        <Menu.Item as='a' href='/browse'>
          <Icon name='search' size='large' />
          Browse
        </Menu.Item>
        
        {!userIsAuthenticated() ?
          <>
            <Menu.Item as='a' position='right' fitted='horizontally'>
              <Icon name='signup' size='large'/>
              <Register />
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='user circle' size='large' fitted='horizontally'/>
              <Login />
            </Menu.Item>
          </>
          :
          <>
            <Menu.Item as='a' href=''>
              <Icon name='shopping bag' size='large' />
              Bag
            </Menu.Item>
            <Menu.Item>
              <Icon name='user' size='large' />
              <Dropdown floating closeOnChange inline direction='left'>
                <Dropdown.Menu size='mini'>
                  <Dropdown.Header>Signed in as: {payload.username} </Dropdown.Header>
                  <Dropdown.Item as='a' icon='log out' size='large' text='Log Out' onClick={handleLogout}/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </>
        }
      </Container>
    </Menu>
  )
}

export default Navbar