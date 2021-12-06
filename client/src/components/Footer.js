import React from 'react'
import { Segment, Grid, List, Icon, Container, Header, Image } from 'semantic-ui-react'
import 'animate.css'

const Footer = () => {

  return (
    <Segment color='black' inverted style={{ padding: '30px 0em 0 0', margin: 'revert' }}>
      <Container>
        <Grid inverted stackable >
          <Grid.Row centered>
            <Grid.Column width={5} textAlign='center'>
              <Header inverted as='h3' content='ABOUT US' />
              <List link inverted animated verticalAlign='middle' size={'medium'} >
                <List.Item as='a' href=''>About TKG Fashion</List.Item>
                <List.Item as='a' href='https://github.com/taliaglantz' target='_blank'>Talia</List.Item>
                <List.Item as='a' href='https://github.com/Kumarmehta019' target='_blank'>Kumar</List.Item>
                <List.Item as='a' href='https://github.com/gayatrirajgor' target='_blank'>Gayatri</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
              <Header inverted as='h3' content='SHOP NOW' />
              <List link inverted animated verticalAlign='middle' size={'medium'}>
                <List.Item as='a' href='/register'>Register</List.Item>
                <List.Item as='a' href='/login'>Sign In</List.Item>
                <List.Item as='a' href='/login'>Browse</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
              <Header inverted as='h3' content='HELP & SUPPORT' />
              <List link inverted animated verticalAlign='middle' size={'medium'}>
                <List.Item as='a' href=''>How To Order</List.Item>
                <List.Item as='a' href=''>Size Guide</List.Item>
                <List.Item as='a' href=''>Returns</List.Item>
                <List.Item as='a' href=''>Delivery</List.Item>
                <List.Item as='a' href=''>COVID-19</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container>
          <Grid.Column style={{ margin: '5px 0 0 0' }}>
            <Image src='https://i.imgur.com/Iv07pIc.gif' size='small' centered circular/>
          </Grid.Column>
        </Container>
        <Container textAlign='center'>
          <Segment color='black' inverted>
            <List horizontal relaxed style={{ margin: '5px 0 5px 0' }}>
              <List.Item>
                <List.Item as='a' href='https://twitter.com/home' target='_blank'><Icon name='twitter' size='big' color='teal' /></List.Item>
              </List.Item>
              <List.Item>
                <List.Item as='a' href='https://www.instagram.com/' target='_blank'><Icon name='instagram' size='big' color='pink' /></List.Item>
              </List.Item>
              <List.Item>
                <List.Item as='a' href='https://www.facebook.com/' target='_blank'><Icon className='facebookicon' name='facebook' size='big' color='blue'/></List.Item>
              </List.Item>
              <List.Item>
                <List.Item as='a' href='https://www.youtube.com/' target='_blank'><Icon name='youtube' size='big' color='red' /></List.Item>
              </List.Item>
            </List>
            <p style={{ margin: '5px 0px 5px 0px' }}>&copy;{new Date().getFullYear()} TKG Fashion | All Rights Reserved | Terms of Service | Privacy</p>
          </Segment>
        </Container>
      </Container>
    </Segment>
  )
}
export default Footer