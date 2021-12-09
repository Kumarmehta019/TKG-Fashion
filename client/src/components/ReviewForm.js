/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Form, Header, Button } from 'semantic-ui-react'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
import { useParams } from 'react-router'

const ReviewForm = ({ userIsOwner, getUsername }) => {
  
  const token = getTokenFromLocalStorage()
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  const [reviewForm, setFormData] = useState({
    product: id,
    comment: '',
    rating: '',
    owner_id: userIsOwner(getUsername[0]),
  })

  const handleChange = (event) => {
    const newReviewData = { ...reviewForm, [event.target.name]: event.target.value }
    setFormData(newReviewData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/reviews/', reviewForm, 
        {
          
          headers: { Authorization: `Bearer ${token}` } ,
        }
      )
      window.location.reload()
    } catch (err) {
      setHasError(true)
    }
  }

  return (
    <Form reply onSubmit={handleSubmit}>
      <Form.Field onChange={handleChange}>
        <Header as='h4'>Add your review</Header>
        <input 
          type='number' 
          min={1} 
          max={5} 
          value={reviewForm.rating} 
          name='rating' 
          placeholder='Rating out of 5'
        />
      </Form.Field>
      <Form.TextArea 
        value={reviewForm.comment} 
        onChange={handleChange} 
        name='comment'
      />
      <Button content='Add a Comment' type='submit' icon='comment alternate outline' labelPosition='left' color='teal'></Button>
    </Form>
  )
}
export default ReviewForm