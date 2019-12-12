import React from 'react'
export default class Feature2 extends React.Component{
    render()
    {
        return(
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-customer-service"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Support Customer</h3>
                <p style={{"fontSize":"20px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>    
          </div>
        )
    }
}