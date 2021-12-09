/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Modal, Button, Form, Header, Message, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Login from './Login'


const Register = () => {
  const [displayMessage, setMessage] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    firstName: '',
    lastName: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    firstName: '',
    lastName: '',
  })

  const [open, setOpen] = useState(false)


  const handleChange = (event) => {
    console.log(event.target.value)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Form Data ->', formData)
    try {
      await axios.post('api/auth/register/', formData)
      setOpen(false)
      setMessage(true)
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
      setMessage(false)
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
        trigger={<p>Register</p>}
        success
      >
        <Header as='h1'>Register</Header>
        <Modal.Content>

          <Form.Group widths={2}>
            <Form.Field onChange={handleChange} value={formData.firstName}>
              <label>First Name</label>
              <input name='firstName' placeholder='e.g. Jane' />
            </Form.Field>

            <Form.Field onChange={handleChange} value={formData.lastName}>
              <label>Last Name</label>
              <input name='lastName' placeholder='e.g. Smith' />
            </Form.Field>
          </Form.Group>

          <Form.Field required onChange={handleChange} value={formData.username}>
            <label>Username</label>
            <input name='username' placeholder='e.g. janesmith123' />
          </Form.Field>

          <Form.Field required onChange={handleChange} value={formData.email}>
            <label>Email</label>
            <input name='email' placeholder='e.g. jane@email.com' />
          </Form.Field>

          <Form.Group widths={2}>
            <Form.Field required onChange={handleChange} value={formData.password}>
              <label>Password</label>
              <input name='password' type='password' />
            </Form.Field>
            <Form.Field required onChange={handleChange} value={formData.password_confirmation}>
              <label>Password Confirmation</label>
              <input name='password_confirmation' type='password' />
            </Form.Field>
          </Form.Group>

          {displayMessage ? (
            <>
              <Message
                success
                header='Your user registration was successful'
                content='You may now log-in with the username you have chosen'
              />
            </>
          ) : (errors && <Message 
            error
            header='Action Forbidden'
            content='Please check all fields have been entered correctly.'
          />)
          }
          
        </Modal.Content>
        
        <Modal.Actions>
          <Button animated type="submit" color="red" onClick={() => setOpen(false)}>
            <Button.Content visible>Close</Button.Content>
            <Button.Content hidden>
              <Icon name='close' />
            </Button.Content>
          </Button>
          <Button animated type="submit" color="teal">
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name='check' />
            </Button.Content>
          </Button>
        </Modal.Actions>
        
      </Modal>

    </div>
  )
}

export default Register