/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { List, Header } from 'semantic-ui-react'

const Sellers = ( { productID }) => {
  
  const [sellers, setSellers] = useState([])
  const [seller, setSeller] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/sellers')
        setSellers(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [id])

  
  const realSeller = sellers.map(seller => {
    if (seller.products[id] === productID) {
      return seller.name
    }
  })
  

  return (
    <>
      <Header as='h4'>Sold by:</Header>
      <List divided horizontal relaxed>
        {realSeller.map(seller => {
          return (
            <>
              <List.Item key={seller}>{seller}</List.Item>
            </>
          )
        })}
      </List>
    </>
  )
}
export default Sellers