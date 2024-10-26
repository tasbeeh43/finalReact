import React from 'react'
import Main from '../Home/Main'
import Navbar from '../Home/Navbar'
import Store from './Store'
import Footer from '../Home/Footer'
import { CartProvider } from 'react-use-cart'

function Allphone() {
  return (
    <CartProvider>
        <Navbar/>
        <Store/>
    <Main/>
    <Footer/>
    </CartProvider>
  )
}

export default Allphone