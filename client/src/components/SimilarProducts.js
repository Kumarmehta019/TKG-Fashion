import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Segment, Image, Card, Container, Message, Icon } from 'semantic-ui-react'


const SimilarProducts = ( { category }) => {

  const [allProducts, setAllProducts] = useState([])
  const [hasError, setHasError] = useState(false)


  
  
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

  const filterByCategory = () => {

    return allProducts.filter(product => {
      return product.category === category
    })
  }


  return (
    <Container>
      {filterByCategory().length ?
        <Container>
          <Grid style={{ marginBottom: '10px' }}>
            <Grid.Row columns={4}>

              {filterByCategory().map((product, index) => {
                console.log(product)
                console.log(product.name)
                return (
                  <>
                    <Grid.Column style={{ marginBottom: '15px' }}>
                      <Card key={index} as='a' href={`/${product.id}`}>
                        <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
                        <Card.Content>
                          <Card.Header>{product.name}</Card.Header>
                          <Card.Description>GBP £{product.price}.00</Card.Description>
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
        <>
          {hasError ? 
            <Segment>
              <Message icon color='red'>
                <Icon name='exclamation circle'/>
                <Message.Content>
                  <Message.Header>Error:</Message.Header>
                  ⛔️ Oops! Looks like you&apos;ve grabbed the last gem! 💎  Please refresh the page.
                </Message.Content>
              </Message>
            </Segment>
            
            : 
            <Segment>
              <Message icon color='blue'>
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  😎 We are fetching that content for you 👗 🩳 👚.
                </Message.Content>
              </Message>
            </Segment>
          }
        </>
      }
    </Container>
  )
}
export default SimilarProducts