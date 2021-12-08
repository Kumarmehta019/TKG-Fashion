import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Header, Image, Card, Container } from 'semantic-ui-react'


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
        <Header as='h3'>{hasError ? 'Looks like you&apos;ve grabbed the last gem! 💎 ' : 'Loading products... 👗 🩳 👚 '}</Header>
      }
    </Container>
  )
}
export default SimilarProducts