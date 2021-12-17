import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Dropdown, Grid, Header, Menu, Image, Message, Icon, Segment } from 'semantic-ui-react'
import { useLocation } from 'react-router'

const categoryOptions = [ // This is a static value
  { key: 1, text: 'T-Shirts', value: 'T-Shirts' },
  { key: 2, text: 'Jumpers', value: 'Jumpers' },
  { key: 3, text: 'Dresses', value: 'Dresses' },
  { key: 4, text: 'Shorts', value: 'Shorts' },
  { key: 5, text: 'Jeans', value: 'Jeans' },
  { key: 6, text: 'Shirts', value: 'Shirts' },
  { key: 7, text: 'Socks', value: 'Socks' },
  { key: 8, text: 'Trousers', value: 'Trousers' }
]

const genderOptions = [
  { key: 1, text: 'Male', value: 'M', icon: 'male' },
  { key: 2, text: 'Female', value: 'F', icon: 'female' }
]

const priceOptions = [
  { key: 1, text: 'Low to High', value: 1, icon: 'sort amount down' },
  { key: 2, text: 'High to Low', value: 2, icon: 'sort amount up' }
]

const ProductIndex = () => {
  const [products, setProducts] = useState([])
  const location = useLocation()
  const [hasError, setHasError] = useState(false)

  // store the filter conditions
  const [categoryValue, setCategoryValue] = React.useState(null)
  const [genderValue, setGenderValue] = React.useState(null)
  const [priceValue, setPriceValue] = React.useState(null)

  useEffect(() => {
    // can check for extra values inside the url here!
    const params = new URLSearchParams(location.search)
    const value = params.get('value')

    const getData = async () => {
      try {
        const { data } = await axios.get('api/products/')
        if (value) {
          setCategoryValue(value)
        }
        setProducts(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [location.search])

  const filteredProducts = products.filter(product => {
    return (
      (product.category === categoryValue || categoryValue === null) && // we can filter out for our category
      (product.gender === genderValue || genderValue === null) // and gender options in one go
    )
  }).sort((a, b) => { // chaining on our sorting function at the end of filter
    if (priceValue === null) return 0 // If no price filter set dont sort
    if (priceValue === 1) return a.price - b.price // low to high
    if (priceValue === 2) return b.price - a.price // high to low
  })

  return (

    <Container style={{ marginBottom: '10px' }} id='productindex-container'>
      <Grid columns="two">
        <Grid.Row>
          <Grid.Column width={3} textAlign="left">
            <Container className='animate__animated animate__slideInLeft'>
              <Grid.Column>
                <Header
                  as="h2"
                  content="Filters"
                  icon="filter"
                  size="medium"
                />
              </Grid.Column>
            </Container>

            <Container className='animate__animated animate__slideInLeft'>
              <Menu style={{ margin: '10px' }} compact>
                <Dropdown
                  placeholder="By Category"
                  value={categoryValue}
                  options={categoryOptions}
                  onChange={(_e, data) => setCategoryValue(data.value)}
                  clearable
                  item
                />
              </Menu>
              <Menu style={{ margin: '10px' }} compact>
                <Dropdown
                  placeholder="By Gender"
                  options={genderOptions}
                  onChange={(_e, data) => setGenderValue(data.value)}
                  clearable
                  item
                />
              </Menu>
              <Menu style={{ margin: '10px' }} compact>
                <Dropdown
                  placeholder="By Price"
                  options={priceOptions}
                  onChange={(_e, data) => setPriceValue(data.value)}
                  clearable
                  item
                />
              </Menu>
            </Container>
          </Grid.Column>

          <Grid.Column width={13}>
            {products.length ?
              <Card.Group itemsPerRow={3}>
                {filteredProducts.map(product => {
                  return (
                    <>
                      <Card key={product.name} as='a' href={`/browse/${product.id}`} className='animate__animated animate__pulse'>
                        <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
                        <Card.Content>
                          <Card.Header>{product.name}</Card.Header>
                          <Card.Description>GBP £{product.price}.00</Card.Description>
                        </Card.Content>
                      </Card>
                    </>
                  )
                })}
              </Card.Group>
              :
              <>
                {hasError ?
                  <Segment>
                    <Message negative icon>
                      <Icon name='frown outline' />
                      <Message.Content>
                        <Message.Header>Sorry something went wrong!</Message.Header>
                        Please try again later
                      </Message.Content>
                    </Message>
                  </Segment>
                  :
                  <Segment>
                    <Message icon color='blue'>
                      <Icon name='circle notched' loading />
                      <Message.Content>
                        <Message.Header>Just one second</Message.Header>
                        😎 We are fetching that content for you.
                      </Message.Content>
                    </Message>
                  </Segment>
                }
              </>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default ProductIndex