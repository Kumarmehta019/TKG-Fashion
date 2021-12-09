import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Segment, Image, Grid, Card, Message, Icon } from 'semantic-ui-react'

const RandomCards = () => {

  const [randomProductOne, setRandomProductOne] = useState(null)
  const [randomProductTwo, setRandomProductTwo] = useState(null)
  const [randomProductThree, setRandomProductThree] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('api/products')
        let randomIndex =  Math.floor(Math.random() * data.length)
        let randomCardOne = data.splice(randomIndex, 1 )
        randomCardOne = randomCardOne[0]
        randomIndex = Math.floor(Math.random() * data.length)
        let randomCardTwo = data.splice(randomIndex, 1)
        randomCardTwo = randomCardTwo[0]
        randomIndex = Math.floor(Math.random() * data.length)
        let randomCardThree = data.splice(randomIndex, 1)
        randomCardThree = randomCardThree[0]

        setRandomProductOne(randomCardOne)
        setRandomProductTwo(randomCardTwo)
        setRandomProductThree(randomCardThree)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      {randomProductOne && randomProductTwo && randomProductThree ?
        <Segment style={{ backgroundColor: '#F6DFEB' }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'black', textShadow: '0px 0px 8px #ffffff' }}>CAN&apos;T DECIDE WHAT YOU WANT?</h2>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column style={{ textAlign: 'center', fontWeight: 'bold' }}>
                <Card as='a' href={`/browse/${randomProductOne.id}`} style={{ background: 'black' }}>
                  <Image src={randomProductOne.image_set !== undefined ? randomProductOne.image_set[0].image : null }/>
                  <Card.Content>
                    <Card.Header style={{ color: 'white' }}>{randomProductOne.name}</Card.Header>
                    <Card.Description style={{ color: 'white' }}>GBP £{randomProductOne.price}.00</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column style={{ textAlign: 'center', fontWeight: 'bold' }}>
                <Card as='a' href={`/browse/${randomProductTwo.id}`} style={{ background: 'black' }}>
                  <Image src={randomProductTwo.image_set !== undefined ? randomProductTwo.image_set[0].image : null} />
                  <Card.Content>
                    <Card.Header style={{ color: 'white' }}>{randomProductTwo.name}</Card.Header>
                    <Card.Description style={{ color: 'white' }}>GBP £{randomProductTwo.price}.00</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column style={{ textAlign: 'center', fontWeight: 'bold' }}>
                <Card as='a' href={`/browse/${randomProductThree.id}`} style={{ background: 'black' }}>
                  <Image src={randomProductThree.image_set !== undefined ? randomProductThree.image_set[0].image : null} />
                  <Card.Content>
                    <Card.Header style={{ color: 'white' }}>{randomProductThree.name}</Card.Header>
                    <Card.Description style={{ color: 'white' }}>GBP £{randomProductThree.price}.00</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        :
        <>
          {hasError ?
            <Segment>
              <Message icon color='red'>
                <Icon name='exclamation circle'/>
                <Message.Content>
                  <Message.Header>Error:</Message.Header>
                  ⛔️ Oops! Something has gone wrong, please refresh the page.
                </Message.Content>
              </Message>
            </Segment>

            :
            <Segment>
              <Message icon color='blue'>
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  😎 We are fetching that content for you.
                </Message.Content>
              </Message>
            </Segment>
          }
        </>
      }
    </Container>



  )
}
export default RandomCards
