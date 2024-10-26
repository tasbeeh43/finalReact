


import React from 'react'

function Main() {
  return (
    <div>
         <main className="container my-4 ">
        <section id="phones">
            <h2 className="text-center">Available Phones</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="img/images.jpeg" className="card-img-top" alt="iPhone 14"/>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 14</h5>
                            <p className="card-text">Price: $999</p>
                            <button className="btn btn-success add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="cart" className="mt-5">
            <h2 className="text-center">Your Cart</h2>
            <ul id="cart-items" className="list-group mb-3"></ul>
            <p id="total-price" className="text-center font-weight-bold">Total: $0</p>
        </section>
    </main>
    </div>
  )
}

export default Main