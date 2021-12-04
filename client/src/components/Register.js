import React, { useState } from 'react'
import { Modal, Button, Form, Header } from 'semantic-ui-react'


const Register = () => {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: ''
  // })

  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <div className="modal-wrapper">
      <Modal
        as={Form}
        handleSubmit={event => handleSubmit(event)}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Header>Register</Header>
        <Modal.Content>
          <Form.Group widths={2}>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Field>
            <label>username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input placeholder='Password Confirmation' />
          </Form.Field>
          {saved ? <div>Saved!</div> : null}
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="red" icon="times" content="Close" />
          <Button type="submit" color="green" icon="save" content="Save" />
        </Modal.Actions>
      </Modal>

    </div>
  )
}

export default Register