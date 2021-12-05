import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'

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
        <Card.Group>
          {products.map(product => {
            return (
              <>
                <Card key ={product.name}>
                  <Card.Content>{product.name}</Card.Content>
                  <Card.Content extra>£ {product.price}</Card.Content>
                </Card>
              </>
            )
          })}
        </Card.Group>
      </Container>
    </>
  )
}

export default ProductIndex