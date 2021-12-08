import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import HeroCarousel from './HeroCarousel'
import Advertisement from './Advertisement'

const Home = () => {
  return (
    <div id='home-section'>
      <Container style={{ background: 'black' }}>
        <HeroCarousel />
      </Container>
      <Container>
        <Advertisement />
      </Container>
      <Container style={{ background: 'black' }}>
        <Categories />
      </Container>
    </div>
  )
}

export default Home
