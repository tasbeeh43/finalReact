

import React from 'react'
import Navbar from '../Home/Navbar'
import Details from './Details'
import { CartProvider } from 'react-use-cart'

function Allproducts() {
  return (
    <CartProvider>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Details/>
    </CartProvider>
  )
}

export default Allproducts