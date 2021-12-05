import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Dropdown, Grid, Header, Icon, Menu } from 'semantic-ui-react'

const ProductIndex = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/products') // * <-- replace with your endpoint
      console.log(data)
      setProducts(data)
    }
    getData()
  }, [])



  return (
    <>
      <Container>
        <Header as='h1'>Browse our products</Header>
        
        <Grid columns='two'>
          <Grid.Row>
            <Grid.Column width={3} textAlign='left'>
              <Container>
                {/* <Grid.Column>
                  <Header 
                    as='h2'
                    content='Filter'
                    icon='filter'
                  />
                </Grid.Column> */}
              </Container>
              <Container>
                <Menu text vertical>
                  <Menu.Item header><Icon name='filter'/> Filter</Menu.Item>
                  <Dropdown item multiple fluid text='Categories'>
                    <Dropdown.Menu>
                      <Dropdown.Item>T-Shirts</Dropdown.Item>
                      <Dropdown.Item>Jumpers</Dropdown.Item>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu>

                <Menu text vertical>
                  <Dropdown item fluid text='By Price'>
                    <Dropdown.Menu>
                      <Dropdown.Item>Low to High</Dropdown.Item>
                      <Dropdown.Item>High to Low</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu>
              </Container>

            </Grid.Column>

            <Grid.Column width={13}>
              <Card.Group>
                {products.map(product => {
                  return (
                    <>
                      <Card key ={product.name}>
                        <Card.Content>
                          <Card.Header>Insert image here</Card.Header>
                        </Card.Content>
                        <Card.Content>{product.name}</Card.Content>
                        <Card.Content extra>£ {product.price}</Card.Content>
                      </Card>
                    </>
                  )
                })}
              </Card.Group>
            </Grid.Column>

          </Grid.Row>
        </Grid>
          
        
      </Container>
    </>
  )
}

export default ProductIndex