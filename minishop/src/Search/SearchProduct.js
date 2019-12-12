import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class Product extends React.Component{
    constructor(props){
        super(props)
    }

    render()

    {
        return(  
        <div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex" >
        <div  className="product d-flex flex-column">
        <Link to={{pathname:"/SingleProductView",
                 productParam:{productDeatils:this.props.data}}}  className="img-prod">
         <img className="img-fluid" style={{"height":"200px","width":"250px"}}
          src={this.props.data.image} alt="Colorlib Template"/>
         <div  className="overlay"></div></Link>
                            <div className="text py-3 pb-4 px-3">
             <div className="d-flex">
              <div className="cat">
                 <span>Lifestyle</span>
              </div>
             <div className="rating">
              <p className="text-right mb-0">
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
            </p>
            </div>
           </div>
              <h3><a href="#">{this.props.data.name}</a></h3>
              <div className="pricing">
               <p className="price"><span>{this.props.data.prize}</span></p>
              </div>
                 <p className="bottom-area d-flex px-3">
                 <Link to={{pathname:"/Cart"}} className="add-to-cart text-center py-2 mr-1">
                     <span>Add to cart <i className="ion-ios-add ml-1"></i></span>
                     </Link>
                 <Link to={{pathname:"/Cart"}} className="buy-now text-center py-2">
                     Buy now<span><i className="ion-ios-cart ml-1"></i></span>
                     </Link>
                </p>
                 </div>
                  </div>
                 </div>
        
        )
    }
}