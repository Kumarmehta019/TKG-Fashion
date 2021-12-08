import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import HeroCarousel from './HeroCarousel'
import Ads from './Ads'


const Home = () => {
  return (
    <div id='home-section'>
      <Container style={{ background: 'black' }}>
        <HeroCarousel />
      </Container>
      <Container>
        <Ads />
      </Container>
      <Container style={{ background: 'black' }}>
        <Categories />
      </Container>
    </div>
  )
}

export default Home
