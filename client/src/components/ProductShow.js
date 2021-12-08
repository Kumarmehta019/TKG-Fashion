/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Divider, Header, Container, Comment, Segment, Button, Accordion, Icon, Form, Card } from 'semantic-ui-react'
import { getUsernameFromLocalStorage, getPayload } from './helpers/auth'


const ProductShow = () => {

  const [product, setProduct] = useState([])
  const [reviews, setReviews] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [category, setCategory] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const username = getUsernameFromLocalStorage()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`api/products/${id}`)
        console.log(data)
        window.scrollTo(0, 0)
        setProduct(data)
        setReviews(data.reviews)
        // setCategory(product.category)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [id])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/products')
        console.log(data)
        setAllProducts(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [])

  const handleChange = (event) => {
    const newReviewData = { ...reviews, [event.target.name]: event.target.value }
    setReviews(newReviewData)
  }

  const filterByCategory = () => {

    return allProducts.filter(product => {
      return product.category === category
    })
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
            <p>Orders can be collected for free from your local TFG Fashion store</p>
            <p>Items can be fully refunded if they are returned by post (free return label included in packaging) or to a local TFK Fashion store within 28 days of the order being delivered or collected</p>
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
            {!userIsAuthenticated() ?
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
              <Segment>
                <Form reply>
                  <Form.Field onChange={handleChange}>
                    <label>Username: {username}</label>
                    <label>Rating out of 5:</label>
                    <input type='number' min={1} max={5} value={reviews.rating}/>
                  </Form.Field>
                  <Form.TextArea value={reviews.comment} onChange={handleChange}/>
                  <Button content='Add a Comment' icon='comment alternate outline' labelPosition='left' color='teal'></Button>
                </Form>
              </Segment>

            }
          </Comment.Group>
        ),
      },
    }
  ]

  return (
    <Container>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
          </Grid.Column>


          <Grid.Column>
            <section className='product-info-wrapper'>
              <p className='product-name' textAlign='center'>{product.name}</p>
              <Divider />
              <p className='product-price'><Icon name='gbp' />{product.price}</p>
              <Container>
                <Button circular color={`${product.colour}`} disabled/>
              </Container>
              <br />
              <div className='product-colour'>Colour: {product.colour}</div>
              <div className='product-size'>Size: {product.size}</div>
              <br />
              <div>Sold by: </div>
              <br />
              <Button size='huge' color='teal'>Add to Bag</Button>
              <br />
              <br />
              <Divider />
              <Accordion defaultActiveIndex={0} panels={accordion}/>
            </section>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />

      <Header as='h3'>You may also like...</Header>
      {filterByCategory().length ?
        <Container>
          <Grid>
            <Grid.Row columns={4}>
              {filterByCategory().map((product, index) => {
                console.log(product)
                console.log(product.name)
                return (
                  <>
                    <Grid.Column>
                      <Card key={index} as='a' href={`/${product.id}`}>
                        <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
                        <Card.Content>
                          <Card.Header>{product.name}</Card.Header>
                          <Card.Description>GBP £{product.price}</Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </>
                )
              })}
            </Grid.Row>
          </Grid>
        </Container>
        :
        <Header as='h3'>{hasError ? 'Looks like you&apos;ve grabbed the last gem! :gem: ' : 'Loading products... :dress: :shorts: :womans_clothes: '}</Header>
      }

      
    </Container>
  
  

  


  )
}
export default ProductShow