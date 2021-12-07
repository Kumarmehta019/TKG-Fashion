import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import HeroCarousel from './HeroCarousel'

const Home = () => {
  return (
    <div id='home-section'>
      <Container style={{ background: 'black' }}>
        <HeroCarousel />
      </Container>
      <Container style={{ background: 'black' }}>
        <Categories />
      </Container>
    </div>
  )
}

export default Home
