import React from 'react'
import { Container } from 'semantic-ui-react'
import Categories from './Categories'
import HeroCarousel from './HeroCarousel'
import Ads from './Ads'
import RandomCards from './RandomCards'


const Home = () => {
  return (
    <div id='home-section'>
      <Container>
        <HeroCarousel />
      </Container>
      <Container>
        <Ads />
      </Container>
      <Container>
        <Categories />
      </Container>
      <Container>
        <RandomCards />
      </Container>
    </div>
  )
}

export default Home
