import React, { useState, useEffect } from 'react'
import { Container, Image } from 'semantic-ui-react'
import axios from 'axios'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

const HeroCarousel = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products/')
      console.log(data)
      setProducts(data)
    }
    getData()
  }, [])







  return (

    <Container style={{ background: 'black', width: '250px', height: '250px' }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={10}
        interval={5000}
        isPlaying={true}
      >
        <Slider>
          {products.map(product => {
            return (

              <Slide key={product.name}>
                <Image src={product.image_set[0].image}></Image>
              </Slide>
            )
          })}
        </Slider>
      </CarouselProvider>
    </Container>

  )
}

export default HeroCarousel