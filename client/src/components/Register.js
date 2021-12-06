/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Modal, Button, Form, Header } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
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
      navigate('api/auth/login/')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
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
      >
        <Header>Register</Header>
        <Modal.Content>

          <Form.Field onChange={handleChange} value={formData.username}>
            <label>Username</label>
            <input name='username' placeholder='e.g. janesmith123' />
          </Form.Field>

          <Form.Field onChange={handleChange} value={formData.email}>
            <label>Email</label>
            <input name='email' placeholder='e.g. jane@email.com' />
          </Form.Field>

          <Form.Field onChange={handleChange} value={formData.password}>
            <label>Password</label>
            <input name='password' />
          </Form.Field>

          <Form.Field onChange={handleChange} value={formData.passwordConfirmation}>
            <label>Password Confirmation</label>
            <input name='passwordConfirmation' />
          </Form.Field>

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

        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="red" icon="times" content="Close" />
          <Button type="submit" color="green" icon="save" content="Register" />
        </Modal.Actions>
      </Modal>

    </div>
  )
}

export default Register