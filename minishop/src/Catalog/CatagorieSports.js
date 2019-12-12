import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
export default class CatagoriesSports extends React.Component{
    constructor(props){
        super(props)
        console.log("cooo",this.props.location)
    }
    render()
    {       
        const {productDeatils}=this.props.location.productParam;
        return( 
            <div>
            <Header/>
            <Navbar/>
        <div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex" >
        <div  className="product d-flex flex-column">
         <img className="img-fluid" style={{"height":"200px","width":"250px"}} 
         src={productDeatils.image} alt="Colorlib Template"/>
         <div  className="overlay"></div>
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
                 <h3><a href="#">{productDeatils.name}</a></h3>
                 <div className="pricing">
                      <p className="price"><span>{productDeatils.prize}</span></p>
                  </div>
                                <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div> 
        )
    }
}