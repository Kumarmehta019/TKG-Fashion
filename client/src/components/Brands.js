import React from 'react'
import { Segment, Image  } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Brands = () => {
  
  
  
  
  return (
    <Segment style={{ backgroundColor: 'lightBlue' }}>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'black', textShadow: '0px 0px 8px #ffffff'  }}>TRENDING BRANDS</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={15}
        interval={8000}
        isPlaying={true}
        playDirection='forward'
        orientation='horizontal'
        visibleSlides={3}
        infinite={true}
      >
        <Slider>
          <Slide index={0}><Image src='https://i.imgur.com/HVWTKQT.jpg'></Image></Slide>
          <Slide index={1}><Image src='https://i.imgur.com/v4IJUX3.png'></Image></Slide>
          <Slide index={2}><Image src='https://i.imgur.com/NFC2wRY.png'></Image></Slide>
          <Slide index={3}><Image src='https://i.imgur.com/CukmfSk.png'></Image></Slide>
          <Slide index={4}><Image src='https://i.imgur.com/FnZAiTK.png'></Image></Slide>
          <Slide index={5}><Image src='https://i.imgur.com/wqikhH0.png'></Image></Slide>
          <Slide index={6}><Image src='https://i.imgur.com/L5IcNcS.png'></Image></Slide>
          <Slide index={7}><Image src='https://i.imgur.com/vVj9th6.png'></Image></Slide>
          <Slide index={8}><Image src='https://i.imgur.com/4Vq5rSK.png'></Image></Slide>
          <Slide index={9}><Image src='https://i.imgur.com/jzb1p4b.png'></Image></Slide>
          <Slide index={10}><Image src='https://i.imgur.com/hEGLgsS.png'></Image></Slide>
          <Slide index={11}><Image src='https://i.imgur.com/OqYJqcB.png'></Image></Slide>
          <Slide index={12}><Image src='https://i.imgur.com/mqHGR4e.png'></Image></Slide>
          <Slide index={13}><Image src='https://i.imgur.com/dURdKjt.png'></Image></Slide>
          <Slide index={14}><Image src='https://i.imgur.com/OpNjAzb.png'></Image></Slide>
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}
export default Brands