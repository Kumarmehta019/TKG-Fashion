/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Dropdown, Grid, Header, Menu, Image } from 'semantic-ui-react'
import { useLocation } from 'react-router'

// * ive renamed these a bit, be sure to use pluralised names for arrays

const categoryOptions = [ // * This is a static value, no need to be inside comp, prevents creation on every re render
  { key: 1, text: 'T-Shirts', value: 'T-Shirts' },
  { key: 2, text: 'Jumpers', value: 'Jumpers' },
  { key: 3, text: 'Dresses', value: 'Dresses' },
  { key: 4, text: 'Shorts', value: 'Shorts' },
  { key: 5, text: 'Jeans', value: 'Jeans' },
  { key: 6, text: 'Shirts', value: 'Shirts' },
  { key: 7, text: 'Socks', value: 'Socks' },
  { key: 8, text: 'Trousers', value: 'Trousers' }
]

// * Same with these
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
  // * The idea here is that you just store the filter conditions, then your filteredProducts, can just be some "derived state"
  // const [filteredProducts, setFilteredProducts] = useState([]) // * <-- No need to actually store this

  // * Instead, we just store the filter conditions
  const [categoryValue, setCategoryValue] = React.useState(null)
  const [genderValue, setGenderValue] = React.useState(null)
  const [priceValue, setPriceValue] = React.useState(null)

  useEffect(() => {
    // * You can check for extra values inside the url here!
    const params = new URLSearchParams(location.search)
    const value = params.get('value')
    // * like the button value, clicked from the link examples

    // * You can then manually set these initial filter values above ^^^^^^


    const getData = async () => {
      const { data } = await axios.get('api/products')
      if (value) {
        setCategoryValue(value)
      }
      setProducts(data)
    }
    getData()
  }, [location.search])

  // * We can create our derived filter state now

  const filteredProducts = products.filter(product => {
    return (
      (product.category === categoryValue || categoryValue === null) && // * we can filter out for our category
      (product.gender === genderValue || genderValue === null) // * and gender options in one go
    )
  }).sort((a, b) => { // * chaining on our sorting function at the end of filter
    if (priceValue === null) return 0 // * If no price filter set dont sort
    if (priceValue === 1) return a.price - b.price // * low to high
    if (priceValue === 2) return b.price - a.price // * high to low
  })

  return (

    <Container style={{ marginBottom: '10px' }} id='productindex-container'>
      <Header as="h1">Browse our products</Header>

      <Grid columns="two">
        <Grid.Row>
          <Grid.Column width={3} textAlign="left">
            <Container>
              <Grid.Column>
                <Header
                  as="h2"
                  content="Filters"
                  icon="filter"
                  size="medium"
                />
              </Grid.Column>
            </Container>

            <Container>
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
            <Card.Group itemsPerRow={3}>
              {filteredProducts.map(product => {
                return (
                  <>
                    <Card key={product.name} as='a' href={`/${product.id}`}>
                      <Image src={product.image_set !== undefined ? product.image_set[0].image : null} />
                      <Card.Content>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Description>GBP £{product.price}</Card.Description>
                      </Card.Content>
                    </Card>
                  </>
                )
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  )
}

export default ProductIndex