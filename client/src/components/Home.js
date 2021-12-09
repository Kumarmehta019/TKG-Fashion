import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import HeroCarousel from './HeroCarousel'
import Ads from './Ads'
import RandomCards from './RandomCards'
import Brands from './Brands'


const Home = () => {
  return (
    <div id='home-section'>
      <Container>
        <HeroCarousel />
      </Container>
      <Container style={{ textAlign: 'center', margin: '18px' }}>
        <Categories />
      </Container>
      <Container>
        <Ads />
      </Container>
      <Container>
        <RandomCards />
      </Container>
      <Container style={{ marginBottom: '20px' }}>
        <Brands />
      </Container>
    </div>
  )
}

export default Home
