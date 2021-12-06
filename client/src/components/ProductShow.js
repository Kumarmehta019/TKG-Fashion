/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Image, Container, Segment } from 'semantic-ui-react'


const ProductShow = () => {

  const [product, setProduct] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`api/products/${id}`)
        console.log(data)
        setProduct(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


  // console.log(product.image_set[0].image)
  return (
    // <h1>Hello</h1>
    <>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <Image src={product.image_set !== undefined ? product.image_set[0].image : null} /> */}
            {/* <Image src={product.image_set[0].image} /> */}
          </Grid.Column>
          <Grid.Column>
            <Container>
              <Segment>{product.name}</Segment>
              <Segment>£{product.price}</Segment>
              <Segment inverted color={product.colour} />
              <Segment>{product.colour}</Segment>
              <Segment>{product.size}</Segment>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
export default ProductShow