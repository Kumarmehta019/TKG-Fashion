import React from 'react'
import { Button, Segment, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'


const Categories = () => {

  const navigate = useNavigate()

  const handleTS = (event) => {
    console.log('EVENT', event.currentTarget.value)

    if (event.currentTarget.value === 'T-Shirts') {
      navigate('/browse?value=T-Shirts')
    } else if (event.currentTarget.value === 'Jumpers') {
      navigate('/browse?value=Jumpers')
    } else if (event.currentTarget.value === 'Dresses') {
      navigate('/browse?value=Dresses')
    } else if (event.currentTarget.value === 'Shorts') {
      navigate('/browse?value=Shorts')
    } else if (event.currentTarget.value === 'Jeans') {
      navigate('/browse?value=Jeans')
    } else if (event.currentTarget.value === 'Shirts') {
      navigate('/browse?value=Shirts')
    } else if (event.currentTarget.value === 'Socks') {
      navigate('/browse?value=Socks')
    } else if (event.currentTarget.value === 'Trousers') {
      navigate('/browse?value=Trousers')
    }
    
  }


  return (

    <Segment inverted color='black' style={{ textAlign: 'center', marginTop: '15px' }}>
      <Button animated inverted color='red' size='big' value='T-Shirts' onClick={handleTS}>
        <Button.Content visible>T-Shirts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> T-Shirts</Button.Content>
      </Button>
      <Button animated inverted color='orange' size='big' value='Jumpers' onClick={handleTS}>
        <Button.Content visible>Jumpers</Button.Content>
        <Button.Content hidden value='Jumpers'><Icon name='angle double right' /> Jumpers</Button.Content>
      </Button>
      <Button animated inverted color='yellow' size='big' value='Dresses' onClick={handleTS}>
        <Button.Content visible>Dresses</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Dresses</Button.Content>
      </Button>
      <Button animated inverted color='purple' size='big' value='Shorts' onClick={handleTS}>
        <Button.Content visible>Shorts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shorts</Button.Content>
      </Button>
      <Button animated inverted color='green' size='big' value='Jeans' onClick={handleTS}>
        <Button.Content visible>Jeans</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Jeans</Button.Content>
      </Button>
      <Button animated inverted color='pink' size='big' value='Shirts' onClick={handleTS}>
        <Button.Content visible>Shirts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shirts</Button.Content>
      </Button>
      <Button animated inverted color='blue' size='big' value='Socks' onClick={handleTS}>
        <Button.Content visible>Socks</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Socks</Button.Content>
      </Button>
      <Button animated inverted color='violet' size='big' value='Trousers' onClick={handleTS}>
        <Button.Content visible>Trousers</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Trousers</Button.Content>
      </Button>
    </Segment>

  )
}
export default Categories
