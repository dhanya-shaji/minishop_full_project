import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import Gallery from '../Components/Gallery'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class SingleProductView extends React.Component{
    constructor(props){
        super(props);
        console.log("cooo",this.props.location)         
    }
    
    render()
    {
		const {productDeatils}=this.props.location.productParam;
	
        return(
            <div>
                <Header/>
                <Navbar/>
            <div><section className="ftco-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-lg-6 mb-5 ftco-animate">
					<a href={productDeatils.image}
					className="image-popup prod-img-bg">
						<img src={productDeatils.image}
						 className="img-fluid" alt="Colorlib Template"/>
                    </a>
    			</div>
    			<div className="col-lg-6 product-details pl-md-5 ftco-animate">
    				<h3>Nike Free RN 2019 iD</h3>
    				<div className="rating d-flex">
							<p className="text-left mr-4">
								<a href="#" className="mr-2">5.0</a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
								<a href="#"><span className="ion-ios-star-outline"></span></a>
							</p>
							<p className="text-left mr-4">
								<a href="#" className="mr-2" style={{color:"#bbb"}}>100 
								<span style={{color: "#bbb;"}}>Rating</span></a>
							</p>
							<p className="text-left">
								<a href="#" className="mr-2" style={{color:"#bbb"}}>500 
								<span style={{color: "#bbb;"}}>Sold</span></a>
							</p>
						</div>
    				<p className="price"><span>{productDeatils.Prize}</span></p>
    				<p>A small river named Duden flows by their place and supplies 
						it with the necessary regelialia. It is a paradisematic country, 
						in which roasted parts of sentences fly into your mouth.</p>
    				<p>On her way she met a copy. The copy warned the Little Blind 
						Text, that where it came from it would have been rewritten a 
						thousand times and everything that was left from its origin would
						 be the word "and" and the Little Blind Text should turn around and 
						 return to its own, safe country. But nothing the copy said could 
						 convince her and so it didn’t take long until a few insidious Copy 
						 Writers ambushed her, made her drunk with Longe and Parole and dragged
						  her into their agency, where they abused her for their.
						</p>
						<div className="row mt-4">
							<div className="col-md-6">
								<div className="form-group d-flex">
		              <div className="select-wrap">
	                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" className="form-control">
	                  	<option value="">Small</option>
	                    <option value="">Medium</option>
	                    <option value="">Large</option>
	                    <option value="">Extra Large</option>
	                  </select>
	                </div>
		            </div>
							</div>
							<div className="w-100"></div>
							<div className="input-group col-md-6 d-flex mb-3">
	             	<span className="input-group-btn mr-2">
						<button type="button" className="quantity-left-minus btn"  
						data-type="minus" data-field="">
	                   <i className="ion-ios-remove"></i>
	                	</button>
	            		</span>
					 <input type="text" id="quantity" name="quantity" 
					 className="quantity form-control input-number" 
					 value="1" min="1" max="100"/>
	             	<span className="input-group-btn ml-2">
						<button type="button" className="quantity-right-plus btn" 
						data-type="plus" data-field="">
	                     <i className="ion-ios-add"></i>
	                 </button>
	             	</span>
	          	</div>
	          	<div className="w-100"></div>
	          	<div className="col-md-12">
	          		<p style={{color: "#000;"}}>80 piece available</p>
	          	</div>
          	</div>
          	<p>
				<Link to={{pathname:"/Cart",productParam:{productDeatils:this.props.data}}}
				className="btn btn-black py-3 px-5 mr-2">
					  Add to Cart</Link>
				<a href="cart.html" className="btn btn-primary py-3 px-5">
						  Buy now</a></p>
    			</div>
    		</div>




    		<div className="row mt-5">
          <div className="col-md-12 nav-link-wrap">
			<div className="nav nav-pills d-flex text-center" id="v-pills-tab" 
			role="tablist" aria-orientation="vertical">
			  <a className="nav-link ftco-animate active mr-lg-1"
			   id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1"
			    role="tab" aria-controls="v-pills-1" aria-selected="true">Description</a>

              <a className="nav-link ftco-animate mr-lg-1" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Manufacturer</a>

              <a className="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Reviews</a>

            </div>
          </div>
          <div className="col-md-12 tab-wrap">
            
            <div className="tab-content bg-light" id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
              	<div className="p-4">
	              	<h3 className="mb-4">Nike Free RN 2019 iD</h3>
	              	<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>

              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
              	<div className="p-4">
	              	<h3 className="mb-4">Manufactured By Nike</h3>
	              	<p>On her way she met a copy. The copy warned the 
						  Little Blind Text, that where it came from it 
						  would have been rewritten a thousand times and
						   everything that was left from its origin would 
						   be the word "and" and the Little Blind Text should 
						    around and return to its own, safe country. But 
							nothing the copy said could convince her and so
							 it didn’t take long until a few insidious Copy
							  Writers ambushed her, made her drunk with Longe 
							  and Parole and dragged her into their agency, where they abused her for their.</p>
              	</div>
              </div>
              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
              	<div className="row p-4">
						   		<div className="col-md-7">
						   			<h3 className="mb-4">23 Reviews</h3>
						   			<div className="review">
								   		<div className="user-img" style={{backgroundImage:"url(images/person_1.jpg)"}}></div>
								   		<div className="desc">
								   			<h4>
								   				<span className="text-left">Jacob Webb</span>
								   				<span className="text-right">14 March 2018</span>
								   			</h4>
								   			<p className="star">
								   				<span>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
							   					</span>
							   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
								   			</p>
								   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
								   		</div>
								   	</div>
								   	<div className="review">
								   		<div className="user-img" style={{backgroundImage:"url(images/person_2.jpg)"}}></div>
								   		<div className="desc">
								   			<h4>
								   				<span className="text-left">Jacob Webb</span>
								   				<span className="text-right">14 March 2018</span>
								   			</h4>
								   			<p className="star">
								   				<span>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
							   					</span>
							   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
								   			</p>
								   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
								   		</div>
								   	</div>
								   	<div className="review">
										   <div className="user-img" 
										   style={{backgroundImage:{}}}></div>
								   		<div className="desc">
								   			<h4>
								   				<span className="text-left">Jacob Webb</span>
								   				<span className="text-right">14 March 2018</span>
								   			</h4>
								   			<p className="star">
								   				<span>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
								   					<i className="ion-ios-star-outline"></i>
							   					</span>
							   					<span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
								   			</p>
								   			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
								   		</div>
								   	</div>
						   		</div>
						   		<div className="col-md-4">
						   			<div className="rating-wrap">
							   			<h3 className="mb-4">Give a Review</h3>
							   			<p className="star">
							   				<span>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					(98%)
						   					</span>
						   					<span>20 Reviews</span>
							   			</p>
							   			<p className="star">
							   				<span>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					(85%)
						   					</span>
						   					<span>10 Reviews</span>
							   			</p>
							   			<p className="star">
							   				<span>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					(98%)
						   					</span>
						   					<span>5 Reviews</span>
							   			</p>
							   			<p className="star">
							   				<span>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					(98%)
						   					</span>
						   					<span>0 Reviews</span>
							   			</p>
							   			<p className="star">
							   				<span>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					<i className="ion-ios-star-outline"></i>
							   					(98%)
						   					</span>
						   					<span>0 Reviews</span>
							   			</p>
							   		</div>
						   		</div>
						   	</div>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
    </div>
    <Gallery/>
    <div>
        <Footer/>
    </div>
    </div>

        )
    }
}