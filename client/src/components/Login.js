/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Modal, Button, Form, Header, Icon } from 'semantic-ui-react'


const Login = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setformData(newFormData)
  }

  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setItemToLocalStorage(data.token)
      navigate('/browse')
    } catch (err) {
      setError(true)
    }
  }



  return (

    <div className="modal-wrapper">
      <Modal
        as={Form}
        onSubmit={handleSubmit}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<p>Login</p>}
      >
        <Header as='h1'>Login</Header>
        <Modal.Content style={{ backgroundColor: '#F6DFEB' }}>

          <Form.Field required onChange={handleChange} value={formData.email}>
            <label>Email</label>
            <input name='email' placeholder='e.g. janesmith@email.com' />
          </Form.Field>

          <Form.Field required onChange={handleChange} value={formData.password}>
            <label>Password</label>
            <input name='password' type='password' />
          </Form.Field>

        </Modal.Content>

        <Modal.Actions>
          <Button animated type="submit" color="red" onClick={() => setOpen(false)}>
            <Button.Content visible>Close</Button.Content>
            <Button.Content hidden>
              <Icon name='close' />
            </Button.Content>
          </Button>
          <Button animated type="submit" color="teal">
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='sign-in' />
            </Button.Content>
          </Button>
        </Modal.Actions>
      </Modal>

    </div>
  )
}

export default Login