/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Divider, Header, Container, Comment, Segment, Button, Accordion, Icon } from 'semantic-ui-react'


const ProductShow = () => {

  const [product, setProduct] = useState([])
  const [reviews, setReviews] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`api/products/${id}`)
        console.log(data)
        setProduct(data)
        setReviews(data.reviews)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


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
            <Comment>
              {reviews.map(review => {
                return (
                  <Comment.Content key={review.id}>
                    <Comment.Author><Icon name='user circle'/>Author: {review.owner.username}</Comment.Author>
                    <Comment.Metadata>
                      <div><Icon name='calendar alternate'/>Posted on: {review.posted_on}</div>
                    </Comment.Metadata>
                    <Comment.Text>{review.comment}</Comment.Text>
                  </Comment.Content>
                )
              })}
            </Comment>
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
            {/* <Image size='large' src={product.image_set[0].image} /> */}
          </Grid.Column>


          <Grid.Column>
            <section className='product-info-wrapper'>
              <p className='product-name' textAlign='center'>{product.name}</p>
              <p className='product-price'><Icon name='gbp' />{product.price}</p>
              <Container>
                <Segment compact inverted color={product.colour} />
              </Container>
              <br />
              <div className='product-colour'>Colour: {product.colour}</div>
              <div className='product-size'>Size: {product.size}</div>
              <br />
              <Button size='huge' color='teal'>Add to Bag</Button>
              <br />
              <br />
              <Accordion defaultActiveIndex={0} panels={accordion}/>
            </section>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />

      <p>You may also like...</p>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </Container>
  
  

  


  )
}
export default ProductShow