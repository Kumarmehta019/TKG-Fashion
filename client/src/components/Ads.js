import React from 'react'
import { Container, Grid, Image, Segment } from 'semantic-ui-react'

const Ads = () => {

  return (
    <Container >
      <Segment inverted color='violet' tertiary style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid container columns={3} style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Grid.Column>
            <Image src='https://i.imgur.com/Vik8Spe.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://i.imgur.com/nhWk941.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://i.imgur.com/Xxa1Ykz.png' />
          </Grid.Column>
        </Grid>
      </Segment>
      
    </Container>
  )
}
export default Ads