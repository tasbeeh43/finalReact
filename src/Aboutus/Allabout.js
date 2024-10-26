


import React from 'react'
import Navbar from '../Home/Navbar'
import More from './More'
import { CartProvider } from 'react-use-cart'

function Allabout() {
  return (
    <CartProvider>
        <Navbar/>
       <More/>
       
    </CartProvider>
  )
}

export default Allabout