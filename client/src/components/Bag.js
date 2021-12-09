import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Item, Label } from 'semantic-ui-react'

const Bag = () => {

  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/orders/')
        setItem(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  
  console.log('ITEM', item)
  
  return (
    
    <Item.Group divided>
      <Item>
        <Item.Image src='/images/wireframe/image.png' />

        <Item.Content>
          <Item.Header as='a'>Product name: </Item.Header>
          <Item.Meta>
            <span className='cinema'>Price: </span>
          </Item.Meta>
          <Item.Description></Item.Description>
          <Item.Extra>
            <Label>DELETE</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default Bag