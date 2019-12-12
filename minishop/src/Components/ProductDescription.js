import React from 'react'
import Product from './Product'
export default class ProductDescription extends React.Component{
     constructor(props){
         super(props);
     }
    render()
    {
        return(
            <section className="ftco-section bg-light">
            <div className="container">
                    <div  className="row justify-content-center mb-3 pb-3">
              <div  className="col-md-12 heading-section text-center ftco-animate">
                <h2  className="mb-4">New Shoes Arrival</h2>
                <p>Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia</p>
              </div>
            </div>   		
            </div>
            <div  className="container">
            <div  className="row">
            {this.props.data.map((product,index)=>(
                   <Product data={product}/>
                   ))}
            </div>
            </div>
        </section>
        )
    }
}
