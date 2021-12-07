/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Dropdown, Grid, Header, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProductIndex = () => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const category = [
    { key: 1, text: 'T-Shirts', value: 'T-Shirts' },
    { key: 2, text: 'Jumpers', value: 'Jumpers' },
    { key: 3, text: 'Dresses', value: 'Dresses' },
    { key: 4, text: 'Shorts', value: 'Shorts' },
    { key: 5, text: 'Jeans', value: 'Jeans' },
    { key: 6, text: 'Shirts', value: 'Shirts' },
    { key: 7, text: 'Socks', value: 'Socks' },
    { key: 8, text: 'Trousers', value: 'Trousers' }
  ]

  const gender = [
    { key: 1, text: 'Male', value: 'M', icon: 'male' },
    { key: 2, text: 'Female', value: 'F', icon: 'female' }
  ]

  const priceOptions = [
    { key: 1, text: 'Low to High', value: 1, icon: 'sort amount down' },
    { key: 2, text: 'High to Low', value: 2, icon: 'sort amount up' }
  ]

  const colour = [
    { key: 1, text: 'Black', value: 'Black' },
    { key: 2, text: 'Yellow', value: 'Yellow' },
    { key: 3, text: 'Blue', value: 'Blue' },
    { key: 4, text: 'Red', value: 'Red' },
    { key: 5, text: 'Green', value: 'Green' },
    { key: 6, text: 'Orange', value: 'Orange' },
    { key: 7, text: 'White', value: 'White' },
    { key: 8, text: 'Purple', value: 'Purple' },
    { key: 9, text: 'Brown', value: 'Brown' },
    { key: 10, text: 'Grey', value: 'Grey' },
    { key: 11, text: 'Beige', value: 'Beige' },
    { key: 12, text: 'Pink', value: 'Pink' }
  ]

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/products')
      console.log(data)
      setProducts(data)
      setFilteredProducts(data)
    }
    getData()
  }, [])

  const handleCategory = (_event, data) => {
    if (!data.value) {
      setFilteredProducts([...products])
    } else {
      const filterArray = products.filter(product => {
        return product.category === data.value
      })
      setFilteredProducts(filterArray)
    }
  }

  const handleGender = (_event, data) => {
    if (!data.value) {
      setFilteredProducts([...products])
    } else {
      const filterGender = products.filter(product => {
        return product.gender === data.value
      })
      setFilteredProducts(filterGender)
    }
  }

  const handlePrice = (_event, data) => {
    const filteredArray = [...filteredProducts]
    if (data.value === 1) {
      const sortedArray = filteredArray.sort((a, b) => a.price - b.price)
      setFilteredProducts(sortedArray)
    } else if (data.value === 2) {
      const sortedArray = filteredArray.sort((a, b) => b.price - a.price)
      setFilteredProducts(sortedArray)
    } else {
      setFilteredProducts([...products])
    }
  }

  const handleColour = (_event, data) => {
    if (!data.value) {
      setFilteredProducts([...products])
    } else {
      const filterColours = products.filter(product => {
        return product.colour === data.value
      })
      setFilteredProducts(filterColours)
    }
  }



  return (
    <>
      <Container>
        <Header as='h1'>Browse our products</Header>

        <Grid columns='two'>
          <Grid.Row>
            <Grid.Column width={3} textAlign='left'>
              <Container>
                <Grid.Column>
                  <Header
                    as='h2'
                    content='Filters'
                    icon='filter'
                    size='medium'
                  />
                </Grid.Column>
              </Container>

              <Container>
                <Menu style={{ margin: '10px' }} compact>
                  <Dropdown placeholder='By Category' options={category} onChange={handleCategory} clearable item />
                </Menu>
                <Menu style={{ margin: '10px' }} compact>
                  <Dropdown placeholder='By Gender' options={gender} onChange={handleGender} clearable item />
                </Menu>
                <Menu style={{ margin: '10px' }} compact>
                  <Dropdown placeholder='By Price' options={priceOptions} onChange={handlePrice} clearable item />
                </Menu>
                <Menu style={{ margin: '10px' }} compact>
                  <Dropdown placeholder='By Colour' options={colour} onChange={handleColour} clearable item />
                </Menu>
              </Container>
            </Grid.Column>

            <Grid.Column width={13}>
              <Card.Group itemsPerRow={3}>
                {filteredProducts.map(product => {
                  return (
                    <>
                      <Link to={`/${product.id}`}>
                        <Card key={product.name}>
                          {/* <Image src={product.image_set !== undefined ? product.image_set[0].image : null} /> */}
                          <Card.Content>
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Description>GBP £{product.price}</Card.Description>
                          </Card.Content>
                          {/* <Card.Content extra>GBP £{product.price}</Card.Content> */}
                        </Card>
                      </Link>
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