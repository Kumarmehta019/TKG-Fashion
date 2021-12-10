import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
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

    <>
      <Button animated inverted color='red' size='huge' value='T-Shirts' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>T-Shirts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> T-Shirts</Button.Content>
      </Button>
      <Button animated inverted color='orange' size='huge' value='Jumpers' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Jumpers</Button.Content>
        <Button.Content hidden value='Jumpers'><Icon name='angle double right' /> Jumpers</Button.Content>
      </Button>
      <Button animated inverted color='blue' size='huge' value='Dresses' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Dresses</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Dresses</Button.Content>
      </Button>
      <Button animated inverted color='purple' size='huge' value='Shorts' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Shorts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shorts</Button.Content>
      </Button>
      <Button animated inverted color='green' size='huge' value='Jeans'  style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Jeans</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Jeans</Button.Content>
      </Button>
      <Button animated inverted color='pink' size='huge' value='Shirts' style={{ marginBottom: '5px', marginTop: '5px' }}  onClick={handleTS} id='category-button'>
        <Button.Content visible>Shirts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shirts</Button.Content>
      </Button>
      <Button animated inverted color='blue' size='huge' value='Socks' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Socks</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Socks</Button.Content>
      </Button>
      <Button animated inverted color='violet' size='huge' value='Trousers' style={{ marginBottom: '5px', marginTop: '5px' }} onClick={handleTS} id='category-button'>
        <Button.Content visible>Trousers</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Trousers</Button.Content>
      </Button>
    </>

  )
}
export default Categories
