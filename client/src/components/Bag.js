/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Item, Grid, Segment, Header, Divider, Button, Image, Label } from 'semantic-ui-react'
import { getPayload } from './helpers/auth'
import 'animate.css'

const Bag = () => {

  const [item, setItem] = useState([])
  const payload = getPayload()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/orders/')
        setItem(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const totalFiltered = item.filter(item => {
    if (item.customer === payload.sub) {
      return item.product.price
    }
  })

  const total = totalFiltered.map(item => {
    return item.product.price
  })


  // console.log('ITEM', item[0].product.price)

  return (

    <Grid columns={2} divided>
      <Grid.Row>

        <Grid.Column>
          <Segment style={{ marginLeft: '10px', marginBottom: '10px' }} className='animate__animated animate__slideInLeft'>
            <Header as='h1'>My bag</Header>
            <Divider />
            <Item.Group divided>
              {item.map(item => {
                if (item.customer === payload.sub) {
                  console.log(item.product.name)
                  return (
                    <Item key={item.product.name}>
                      <Item.Image src={item.product.image_set[0].image} />
                      <Item.Content>
                        <Header as='h3'>{item.product.name}</Header>
                        <br />
                        <br />
                        <Header color='grey' as='h3'>£{item.product.price}</Header>
                        <br />
                        <br />
                        <Item.Extra>
                          <Label style={{ backgroundColor: `${item.product.colour}`, color: 'white' }}>{item.product.colour}</Label>
                          <Label icon='hashtag'>Quantity: 1</Label>
                          <Label icon='globe'>Size: {item.product.size}</Label>
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  )
                }
              })}
            </Item.Group>
          </Segment>

        </Grid.Column>

        <Grid.Column>
          <Segment style={{ marginRight: '10px' }} compact className='animate__animated animate__slideInRight'>
            <Header as='h1'>Total</Header>
            <Divider />
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h4'>Sub-total</Header>
                </Grid.Column>

                <Grid.Column className='animate__animated animate__tada animate__delay-2s'>
                  <Header as='h4'>£ {total.reduce((acc, price) => {
                    return acc + price
                  }, 0)}</Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Header as='h4'>Delivery</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h4'>Free Standard Delivery (3-5 days)</Header>
                </Grid.Column>
              </Grid.Row>

            </Grid>
            <Divider />
            <Button fluid color='teal'>CHECKOUT</Button>
            <Header as='h5'>We accept:</Header>
            <Image centered src='https://res.cloudinary.com/dwvbpmbul/image/upload/v1639073366/Screenshot_2021-12-09_at_17.36.24_apmuan.png' />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>



  )
}

export default Bag