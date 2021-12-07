import React, { useEffect, useState } from 'react'
import { Button, Segment, Icon } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Categories = () => {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/products') 
      console.log(data)
      setProducts(data)
    }
    getData()
  }, [])
  

  const handleChange = (event) => {
    if (!event.currentTarget.value) {
      navigate('/browse')
      setProducts([...products])
    } else {
      const filterArray = products.filter(product => {
        console.log('CATEGORY', product.category)
        return product.category === event.currentTarget.value
      })
      setProducts(filterArray)
    }
  }




  return (

    <Segment inverted style={{ background: 'black', textAlign: 'center' }} id='categories-segment'>
      <Button animated inverted color='red' size='big' onClick={handleChange}>
        <Button.Content visible>T-Shirts</Button.Content>
        <Button.Content hidden value='T-Shirts'><Icon name='angle double right' /> T-Shirts</Button.Content>
      </Button>
      <Button animated inverted color='orange' size='big'>
        <Button.Content visible>Jumpers</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Jumpers</Button.Content>
      </Button>
      <Button animated inverted color='yellow' size='big'>
        <Button.Content visible>Dresses</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Dresses</Button.Content>
      </Button>
      <Button animated inverted color='purple' size='big'>
        <Button.Content visible>Shorts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shorts</Button.Content>
      </Button>
      <Button animated inverted color='green' size='big'>
        <Button.Content visible>Jeans</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Jeans</Button.Content>
      </Button>
      <Button animated inverted color='pink' size='big'>
        <Button.Content visible>Shirts</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Shirts</Button.Content>
      </Button>
      <Button animated inverted color='blue' size='big'>
        <Button.Content visible>Socks</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Socks</Button.Content>
      </Button>
      <Button animated inverted color='violet' size='big'>
        <Button.Content visible>Trousers</Button.Content>
        <Button.Content hidden><Icon name='angle double right' /> Trousers</Button.Content>
      </Button>
      <div>
        <Link to="/browse?value=t-shirts">T Shirts</Link>
      </div>
    </Segment>

  )
}
export default Categories
