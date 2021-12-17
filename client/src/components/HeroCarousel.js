import React, { useState, useEffect } from 'react'
import { Image, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const HeroCarousel = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products/')
      // console.log(data)
      setProducts(data)
    }
    getData()
  }, [])



  const product = products.map(product => {
    return product
  })
  // console.log('PRODUCT ARRAY->', product)

  const images = product.map(image => {
    return image.image_set[0].image
  })
  console.log('IMAGES ARRAY->', images)

  

  return (

    <Segment style={{ backgroundColor: '#F6DFEB' }}>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'black', fontFamily: 'Cinzel, serif' }}>OUR COLLECTION</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        interval={5000}
        isPlaying={true}
        playDirection='forward'
        orientation='horizontal'
        visibleSlides={3}
        infinite={true}
      >
        <Slider>
          {images.map((image, index) => {
            return (
              <Slide key={index} index={index}>
                <Image src={image}></Image>
              </Slide>
            )
          })}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

export default HeroCarousel