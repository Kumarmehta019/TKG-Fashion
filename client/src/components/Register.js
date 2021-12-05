/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Modal, Button, Form, Header } from 'semantic-ui-react'


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // const [errors, setErrors] = useState({
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  const [open, setOpen] = useState(false)


  const handleChange = (event) => {
    console.log(event.target.value)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Form Data ->', formData)
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
          <Form >
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

            <Form.Field onChange={handleChange} value={formData.username}>
              <label>Username</label>
              <input name='username' placeholder='e.g. janesmith123' />
            </Form.Field>

            <Form.Field onChange={handleChange} value={formData.password}>
              <label>Password</label>
              <input name='password' />
            </Form.Field>

            <Form.Field onChange={handleChange} value={formData.passwordConfirmation}>
              <label>Password Confirmation</label>
              <input name='passwordConfirmation' />
            </Form.Field>

          </Form>
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