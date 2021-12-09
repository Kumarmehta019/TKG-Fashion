import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Item, Button } from 'semantic-ui-react'
import { getPayload } from './helpers/auth'

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
    if (item.customer === payload.sub){
      return item.product.price
    }
  })

  const total = totalFiltered.map(item => {
    return item.product.price
  })
  
  return (
    <>
      <Container>
        <Item.Group divided>
          {item.map(item => {
            if (item.customer === payload.sub) {
              return (
                <Item key={item.product.name}>
                  <Item.Image src={item.product.image_set[0].image} />

                  <Item.Content>
                    <Item.Header as='a'>Product name: {item.product.name}</Item.Header>
                    <Item.Meta>
                      <span className='cinema'>Price: £{item.product.price}</span>
                    </Item.Meta>
                    <Item.Extra>
                      <Button>DELETE</Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              )
            }
          })}
        </Item.Group>
        <Item.Header>Total: £{total.reduce((acc, price) =>{
          return acc + price
        }, 0)} </Item.Header>
      </Container>
    </>
  
  )
}

export default Bag