import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home  from './Home'
import * as serviceWorker from './serviceWorker'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from './NavBarComponents/About'
import Contact from './NavBarComponents/Contact'
import Shop from './Catalog/Shop'
import SingleProduct from './Catalog/SingleProduct'
import Cart from './Catalog/Cart'
import Checkout from './Catalog/Checkout'
import SingleProductView from  './Catalog/SingleProductView'
import SearchProduct from './Search/SearchProduct'

const routing = (
    <Router>
      <div>
      
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop}/>
        <Route path="/SingleProduct" component={SingleProduct}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/SingleProductView" component={SingleProductView }/>
        <Route path="/SearchProduct" component={SearchProduct}/>
        

      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
