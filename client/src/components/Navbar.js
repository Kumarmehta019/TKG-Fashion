import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Image, Menu, Icon, Dropdown, Modal, Header, Button } from 'semantic-ui-react'
import { getPayload, getUsernameFromLocalStorage } from './helpers/auth'
import Register from './Register'
import Login from './Login'


const Navbar = () => {
  const [open, setOpen] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

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

  const username = getUsernameFromLocalStorage()


  return (
    <Menu style={{ padding: '0px 50px' }} color='teal' secondary inverted size='large' id='nav'>
      <Container>
        <Menu.Item header as='a' href='/' position='left'>
          <Image style={{ marginRight: '10px' }} size='tiny' src='https://i.imgur.com/uOjwmDf.png' circular />
          <h3 style={{ marginTop: 'unset', color: 'white' }}>TKG Fashion</h3>
        </Menu.Item>
        <Menu.Item as='a' href=''><Icon name='search' size='large' />Browse</Menu.Item>
        
        {!userIsAuthenticated() ?
          <>
            <Menu.Item position='right' as='a'><Icon name='signup' size='large' /><Register /></Menu.Item>
            <Menu.Item as='a'><Icon name='user circle' size='large' /><Login /></Menu.Item>
            <Menu.Item as='a'><Icon name='shopping bag' size='large' />Bag</Menu.Item>
          </>
          :
          <>
            <Menu.Item as='a' href=''><Icon name='shopping bag' size='large' />Bag</Menu.Item>
            <Menu.Item><Icon name='user secret' size='large' />
              <Dropdown floating closeOnChange inline direction='left'>
                <Dropdown.Menu size='mini'>
                  <Dropdown.Header>Signed In / Register </Dropdown.Header>
                  <Dropdown.Item as='a' href='/profile' icon='user circle' size='large' text={username} />
                  <Modal
                    basic
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    size='small'
                    trigger={<Dropdown.Item as='a' onClick={handleLogout} icon='log out' text='Log Out' />}
                    centered={true}
                  >
                    <Header icon>
                      <Icon name='frown outline' />
                      Logging Out?
                    </Header>
                    <Modal.Content>
                      <p> Are you sure you want to log out, you will be missed?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button basic color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button basic color='green' onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
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