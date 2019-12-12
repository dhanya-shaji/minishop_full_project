import React from 'react'
export default class CartHome extends React.Component{
    render(){
        return(
            <div className="hero-wrap hero-bread" style={{backgroundImage:"url('images/bg_6.jpg')"}}>
      <div className="container">
    <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
            <h1 className="mb-0 bread">My Wishlist</h1>
          </div>
        </div>
      </div>
    </div>

    
        )
    }
}