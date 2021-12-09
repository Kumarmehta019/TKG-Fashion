/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Divider, Header, Container, Comment, Segment, Button, Accordion, Icon, Form, Card } from 'semantic-ui-react'
import { getPayload, getTokenFromLocalStorage } from './helpers/auth'
import SimilarProducts from './SimilarProducts'
import Sellers from './Sellers'

const ProductShow = () => {

  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [hasError, setHasError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [productID, setProductID] = useState([])
  const [toggled, setToggle] = useState(false)
  const { id } = useParams()
  const token = getTokenFromLocalStorage()

  const getUsername = reviews.map(review => {
    console.log('ID -->', review.owner.id)
    return (
      review.owner.id
    )
  })

  const userIsOwner = (currentUserId) => {
    const payload = getPayload()
    if (!payload) return false
    console.log('CURRENT', currentUserId)
    return currentUserId === payload.sub 
  }
  
  const [reviewForm, setFormData] = useState({
    product: id,
    comment: '',
    rating: '',
    owner_id: userIsOwner(getUsername[0]),
  })

  const [bagItems, setBagItems] = useState({
    product: id,
    customer: userIsOwner(getUsername[0]),
  })
  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`api/products/${id}`)
        window.scrollTo(0, 0)
        setProduct(data)
        setCategory(product.category)
        setReviews(data.reviews)
        setProductID(data.id)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [id, product.category])


  const handleChange = (event) => {
    const newReviewData = { ...reviewForm, [event.target.name]: event.target.value }
    setFormData(newReviewData)
  }

  const handleBagSubmit = async event => {
    event.preventDefault()
    try {
      const newItems = { ...bagItems }
      setBagItems(newItems)
      await axios.post('/api/orders/', bagItems, 
        {
          headers: { Authorization: `Bearer ${token}` } ,
        })
      setToggle(true)
    } catch (err) {
      setHasError(true)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log('review ->', reviewForm)
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

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  

  const accordion = [
    {
      key: 'details-and-care',
      title: 'Details & Care',
      content: [
        'All clothes are made from 100% recyclable material. Wash at no higher than 30 degrees and do not tumbledry.'
      ].join(' '),
    },
    {
      key: 'delivery-collections-and-returns',
      title: 'Delivery, Collections & Returns',
      content: {
        content: (
          <div>
            <p>Free Standard Delivery - order recieved within 3-5 days</p>
            <p>Orders can be collected for free from your local TKG Fashion store</p>
            <p>Items can be fully refunded if they are returned by post (free return label included in packaging) or to a local TKG Fashion store within 28 days of the order being delivered or collected</p>
          </div>
        ),
      },
    },
    {
      key: 'reviews',
      title: 'Reviews',
      content: {
        content: (
          
          <Comment.Group size='large'>
            {!userIsAuthenticated()  ?
              <Comment>
                {reviews.map(review => {
                  return (
                    <Comment.Content key={review.id}>
                      <Comment.Author><Icon name='user circle'/>Author: {review.owner.username}</Comment.Author>
                      <Comment.Metadata>
                        <div><Icon name='calendar alternate'/>Posted on: {review.posted_on}</div>
                        <Divider />
                        <div><Icon name='star'/>Rating: {review.rating}/5</div>
                      </Comment.Metadata>
                      <Comment.Text>{review.comment}</Comment.Text>
                      <Divider />
                    </Comment.Content>
                  )
                })}
              </Comment>
              :
              <>
                <Comment>
                  {reviews.map(review => {
                    return (
                      <Comment.Content key={review.id}>
                        <Comment.Author><Icon name='user circle'/>Author: {review.owner.username}</Comment.Author>
                        <Comment.Metadata>
                          <div><Icon name='calendar alternate'/>Posted on: {review.posted_on}</div>
                          <Divider />
                          <div><Icon name='star'/>Rating: {review.rating}/5</div>
                        </Comment.Metadata>
                        <Comment.Text>{review.comment}</Comment.Text>
                        <Divider />
                      </Comment.Content>
                    )
                  })}
                </Comment>
                
                <Segment>
                  <Form reply onSubmit={handleSubmit}>
                    <Form.Field onChange={handleChange}>
                      <label>Username: </label>
                      <label>Rating out of 5:</label>
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
                </Segment>
              </>
            } 
          </Comment.Group>
        ),
      },
    }
  ]

  console.log('BAG', bagItems)
  return (
    <Container style={{ marginBottom: '15px' }}>
      {product ?
        <>
          <Container>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
                </Grid.Column>

                <Grid.Column>
                  <section className='product-info-wrapper'>
                    <p className='product-name' textAlign='center'>{product.name}</p>
                    <Sellers id={ productID }/>
                    <p className='product-price' ><Icon name='gbp' />{product.price}.00</p>
                    <Container>
                      <Segment compact color={product.colour} />
                    </Container>
                    <br />
                    <div className='product-colour' >Colour: {product.colour}</div>
                    <div className='product-size'>Size: {product.size}</div>
                    <br />

                    {!toggled ?
                      <Button animated size='huge' color='teal' onClick={handleBagSubmit} >
                        <Button.Content visible>Add to Bag</Button.Content>
                        <Button.Content hidden>
                          <Icon name='cart' />
                        </Button.Content>
                      </Button>
                      :
                      <Button disabled>Added to Cart</Button>
                    } 
                    
                    <br />
                    <br />
                    <Accordion defaultActiveIndex={0} panels={accordion} />
                  </section>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider />

            <SimilarProducts category={ category } />
          </Container>
        </>
        :
        <Header as='h3'>{hasError ? 'Sorry, something has gone wrong 🚨 ' : 'Loading product 👗 🩳 👚 '}</Header>
      }

    </Container>

  )
}
export default ProductShow