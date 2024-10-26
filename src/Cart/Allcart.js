

import React from 'react'
import Navbar from '../Home/Navbar'
import { CartProvider, useCart } from 'react-use-cart';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      totalItems,
      items,
      cartTotal,
      emptyCart,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty){
          return(
      <div>
          <h2 className="text-center">Your cart is empty
              <button className="btn btn-danger" onClick={()=>emptyCart()}>Clear it All</button>
              </h2>;
      </div>
          )    
    }    
  
    return (
      <div>
        <h1 className="text-center">Cart ({totalUniqueItems})</h1>
  
        <Container>
          <Row>
              <Col md="10" className="m-auto">
      <table className="table table-dark text-center">
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>quantity</th>
                  <th>Price</th>
                  <th>Operation</th>
              </tr>
          </thead>
       <tbody>
          {items.map((item) => (
            <tr >
              <td>
                  <img src={item.images[0]} style={{height : "70px"}}></img>
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{Math.round(item.price*item.quantity)}</td>
              <td>
              <button
              className="btn btn-warning"
                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
              >
                -
              </button>
              <button
              className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
              >
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))} 
          <tr>
              <td>Total</td>
              <td>----------</td>
            <td>{totalItems}</td>
            <td>{Math.round(cartTotal)}</td>
            <td>
                 <NavLink to="/Shopping" className="btn btn-primary">continue shopping</NavLink>
            </td>
          
  
          </tr>
       </tbody>
      </table>
              </Col>
          </Row>
        </Container>
  
  
      </div>
    );
  }
  
function Allcart() {
    return (
        <CartProvider>    
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <Cart/>
    </CartProvider>
    )
}

export default Allcart