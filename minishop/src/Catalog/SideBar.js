import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const heading=["headingOne","headingTwo"];
export default class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.renderSubCategory = this.renderSubCategory.bind(this);
    }
    renderSubCategory(cateId){
       var lsit=  this.props.data.map(function(item, i){
            console.log('test','tesrrrrrrrrrrrrrrrrrrr');
            if(item.parentId===cateId)
            return (<li><a href="#">{item.cateName}</a></li>)
          });
          return lsit;
        }    
    render(){
        return(
    <div className="col-md-4 col-lg-2">
	<div className="sidebar">
	<div className="sidebar-box-2">
	<h2 className="heading">Categories</h2>
	<div>  
  {this.props.data.map((catagory,index)=>(
      <div className="fancy-collapse-panel">
      <div className="panel-group" id="accordion" role="tablist" 
      aria-multiselectable="true">
<div className="panel panel-default">
<div className="panel-heading" role="tab" id={heading[index]}>
    <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" 
        href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {catagory.parentId==="0"&&
        catagory.cateName
        }
        </a>
    </h4>
</div>
<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" 
aria-labelledby="headingOne">
    <div className="panel-body">
        <ul>
        {this.renderSubCategory(catagory.cateId)}
        </ul>
    </div>
</div>
</div>
</div></div>
 ))}
</div>
    </div></div></div>
    
        )}}