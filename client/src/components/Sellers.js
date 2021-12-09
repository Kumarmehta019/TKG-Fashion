/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const Sellers = ( { productID }) => {
  
  const [sellers, setSellers] = useState([])
  const [seller, setSeller] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/sellers')
        console.log(data)
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
  console.log(realSeller)
  



  return (
    <Header as='h4'>sellers:{realSeller.map(seller => {
      return <p key={seller}>{seller}</p>
    })}
    </Header>
  )
}
export default Sellers