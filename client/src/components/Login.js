/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Modal, Button, Form, Header } from 'semantic-ui-react'



const Login = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [formData, setformData] = useState({
    username: '',
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
      const { data } = await axios.post('api/auth/login/', formData)
      setItemToLocalStorage(data.token)
      navigate('api/index')
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
        <Header>Register</Header>
        <Modal.Content>

          <Form.Field onChange={handleChange} value={formData.username}>
            <label>Username</label>
            <input name='username' placeholder='e.g. janesmith123' />
          </Form.Field>

          <Form.Field onChange={handleChange} value={formData.password}>
            <label>Password</label>
            <input name='password' />
          </Form.Field>

        </Modal.Content>

        <Modal.Actions>
          <Button type="submit" color="red" icon="times" content="Close" />
          <Button type="submit" color="green" icon="save" content="Register" />
        </Modal.Actions>
      </Modal>

    </div>
  )
}

export default Login