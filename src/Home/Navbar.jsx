

import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from 'react-use-cart'

function Navbar() {
    const {totalItems} = useCart();
  return (
    <CartProvider>
          <header className="bg-success text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
            <Link className="nav-link text-white" href='/Phones'>Phone Shop</Link>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/AboutUs">AboutUs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Updates">Update</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Shopping">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Cart"><i class="fa-solid fa-cart-shopping"></i> {totalItems}</Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    </header>
    </CartProvider>
  )
}

export default Navbar