import React from 'react'
export default class Image extends React.Component{
    constructor(props){
        super(props);
        console.log("cooo",this.props.location)
    }
    render()
    { 
        const {productDeatils}=this.props.location.productParam;
        return(
            <div>
                <div className="col-lg-6 mb-5 ftco-animate">
    				<a href=""className="image-popup prod-img-bg">
						<img src={productDeatils.Image}
						 className="img-fluid" alt="Colorlib Template"/>
                         </a>
    			</div>
            </div>
        )
    }
}
