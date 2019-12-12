import React,{Component} from "react";

import { connect } from "react-redux"
import {CatagoryAction} from '../../Actions/index'
import PropTypes from 'prop-types'

class Catagories_View extends Component {
  constructor(props){
    super(props);
  
    this.props.Catagoryrequest();
  }
  static propTypes = {
    prop: PropTypes
}

            
               
  render() {
    return (
      <div>
      
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4>PRODUCT LISTS</h4>
                <button style={{ marginLeft: "600px", Color: "ffff" }}> 
                    CREATE
                </button>
              </div>
              { this.props.itemResponse.length === 0 && <h2>Loading...</h2>}
              {this.props.itemResponse.length > 0 && (

<div className="card-body">
<div className="table-responsive">
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>CATEGORIES NAME</th>
      </tr>
    </thead>
    <tbody>
      {this.props.itemResponse.map((item, i) => (
        <tr>
          <td>{item.Cate_Name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
              )}
            </div>
            </div>
            </div>

                 
                
                   
               
             
    )         

  }
}

const mapStateToProps= state => ({
  
      itemResponse:state.Catagory.itemResponse,
      resultCode: state.Catagory.resultCode,
      isItem: state.Catagory.isItem,
      error:state.Catagory.error
    });
const mapDispatchToProps = {
  ...CatagoryAction
}
export default connect(mapStateToProps, mapDispatchToProps)
   (Catagories_View)
