

import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
import { CartProvider } from 'react-use-cart'

 class Allupdates extends Component {
    state = {
        persons :[]
    }
    componentDidMount(){
        axios.get("/js/Api.json")
        .then( (item)=>{
           this.setState(
            {
                persons : item.data.products
            }
           )
        })
    }
  render() {
    return (
      <CartProvider>
       <Navbar/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className='container'>
        <div className='row'>
       {this.state.persons.map(  (create)=> 
          <div className='col-md-4 text-center md-4' > 
            <img src={create.image_url} style={{height :"350px"}} className='img-fluid'></img>
            <h5> {create.title} </h5>
            <h5> {create.publisher} </h5>
          </div>
    
    )}

        </div>
       </div>
      </CartProvider>
    )
  }
}

export default Allupdates