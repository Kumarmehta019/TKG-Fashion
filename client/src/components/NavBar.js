import React, { useState, useEffect } from 'react'
import { Container, Image, Menu, Icon, Dropdown, Modal, Header, Button } from 'semantic-ui-react'
// import axios from 'axios'

const NavBar = () => {
  const [open, setOpen] = useState([])

  useEffect(() => {

  })







  return (
    <Menu style={{ padding: '0px 50px' }} color='teal' secondary inverted size='large' >
      <Container>
        <Menu.Item header as='a' href='/' position='left'>
          <Image style={{ marginRight: '10px' }} size='tiny' src='https://i.imgur.com/uOjwmDf.png' circular/>
          <h3 style={{ marginTop: 'unset', color: 'white' }}>TKG Fashion</h3>
        </Menu.Item>
        <Menu.Item as='a' href=''><Icon name='search' size='large'/>Browse</Menu.Item>
        <Menu.Item position='right' as='a' href=''><Icon name='signup' size='large'/>Register</Menu.Item>
        <Menu.Item as='a' href=''><Icon name='user circle' size='large'/>Sign In</Menu.Item>
        <Menu.Item as='a' href=''><Icon name='shopping bag' size='large'/>Bag</Menu.Item>
        <Menu.Item><Icon name='user secret' size='large' />
          <Dropdown floating closeOnChange inline direction='left'>
            <Dropdown.Menu size='mini'>
              <Dropdown.Header>Signed In / Register </Dropdown.Header>
              <Dropdown.Item as='a' href='/profile' icon='user circle' size='large' text='Profile'/>
              <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Dropdown.Item as='a' href='' icon='log out' text='Log Out'/>}
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
      </Container>
    </Menu>
  )
}

export default NavBar
