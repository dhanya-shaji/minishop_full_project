import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class Navbar extends React.Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link to="/"className="navbar-brand">Minishop</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<Link to="/Shop"className="dropdown-item">Shop</Link>
                <Link to="/SingleProduct" className="dropdown-item">Single Product</Link>
                <Link to ="/Cart" className="dropdown-item">Cart</Link>
                <Link to="/Checkout"className="dropdown-item">Checkout</Link>
              </div>
            </li> 
			<li className="nav-item"><Link to="/about"className="nav-link">About</Link></li>
	          <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
	          <li className="nav-item"><Link to ="/Contact" className="nav-link">Contact</Link></li>
	          <li className="nav-item cta cta-colored">
				  <Link to="/Cart" className="nav-link">
					<span className="icon-shopping_cart">
					</span>[0]
					</Link>
					</li>
	        </ul>
	      </div>
	    </div>
	  </nav>
	  
        )
    }
}