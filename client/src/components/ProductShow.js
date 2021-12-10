import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Divider, Header, Container, Comment, Segment, Button, Accordion, Icon, Message } from 'semantic-ui-react'
import { getPayload, getTokenFromLocalStorage } from './helpers/auth'
import SimilarProducts from './SimilarProducts'
import ReviewForm from './ReviewForm'
import Sellers from './Sellers'
import 'animate.css'


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
    return (
      review.owner.id
    )
  })

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const userIsOwner = (currentUserId) => {
    const payload = getPayload()
    if (!payload) return false
    return currentUserId === payload.sub
  }

  const [bagItems, setBagItems] = useState({
    product: id,
    customer: userIsOwner(getUsername[0]),
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`)
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

  const handleBagSubmit = async event => {
    event.preventDefault()
    try {
      const newItems = { ...bagItems }
      setBagItems(newItems)
      await axios.post('/api/orders/', bagItems,
        {
          headers: { Authorization: `Bearer ${token}` },
        })
      setToggle(true)
    } catch (err) {
      setHasError(true)
    }
  }



  const accordion = [
    {
      key: 'details-and-care',
      title: {
        content: 'Details & Care',
        icon: 'heart',
      },
      content: {
        content: (
          <p className='accordion-text'>All clothes are made from 100% recyclable material. Wash at no higher than 30 degrees and do not tumbledry.</p>
        ),
      },
    },
    {
      key: 'delivery-collections-and-returns',
      title: {
        content: 'Delivery, Collections & Returns',
        icon: 'box',
      },
      content: {
        content: (
          <div className='accordion-text'>
            <p>Free Standard Delivery - order recieved within 3-5 days</p>
            <p>Orders can be collected for free from your local TKG Fashion store</p>
            <p>Items can be fully refunded if they are returned by post (free return label included in packaging) or to a local TKG Fashion store within 28 days of the order being delivered or collected</p>
          </div>
        ),
      },
    },
    {
      key: 'reviews',
      title: {
        content: 'Reviews',
        icon: 'comments outline',
      },
      content: {
        content: (

          <Comment.Group size='large'>
            {!userIsAuthenticated() ?
              <Comment>
                {reviews.map(review => {
                  return (
                    <Comment.Content key={review.id}>
                      <Comment.Author><Icon name='user circle' />Author: {review.owner.username}</Comment.Author>
                      <Comment.Metadata>
                        <div><Icon name='calendar alternate' />Posted on: {review.posted_on}</div>
                        <Divider />
                        <div><Icon name='star' />Rating: {review.rating}/5</div>
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
                        <Comment.Author><Icon name='user circle' />Author: {review.owner.username}</Comment.Author>
                        <Comment.Metadata>
                          <div><Icon name='calendar alternate' />Posted on: {review.posted_on}</div>
                          <Divider />
                          <div><Icon name='star' />Rating: {review.rating}/5</div>
                        </Comment.Metadata>
                        <Comment.Text>{review.comment}</Comment.Text>
                        <Divider />
                      </Comment.Content>
                    )
                  })}
                </Comment>

                <Segment>
                  <ReviewForm
                    userIsOwner={userIsOwner}
                    getUsername={getUsername}
                  />
                </Segment>
              </>
            }
          </Comment.Group>
        ),
      },
    }
  ]


  return (
    <Container style={{ marginBottom: '15px' }}>
      {product ?
        <>
          <Container>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image className='animate__animated animate__slideInLeft' src={product.image_set !== undefined ? product.image_set[0].image : null} />
                </Grid.Column>

                <Grid.Column>
                  <Container className='animate__animated animate__slideInRight'>
                    <section className='product-info-wrapper'>
                      <Header as='h1' textAlign='center' style={{ padding: '20px' }}>{product.name}</Header>
                      <Sellers id={productID} />
                      <Divider />
                      <Header as='h2' style={{ padding: '2px' }}>£ {product.price}.00</Header>
                      <Container>
                        <Button circular style={{ backgroundColor: `${product.colour}`, padding: '15px' }} />
                      </Container>
                      <Header as='h2'>Size: {product.size}</Header>
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

                      <Divider />

                      <Accordion defaultActiveIndex={0} panels={accordion} style={{ fontSize: '20px' }} />
                    </section>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider />

            <SimilarProducts category={category} />
          </Container>
        </>
        :
        (hasError &&
          <Message negative icon>
            <Icon name='frown outline' />
            <Message.Content>
              <Message.Header>Sorry something went wrong!</Message.Header>
              Please try again later
            </Message.Content>
          </Message>
        )
      }

    </Container>
  )
}
export default ProductShow