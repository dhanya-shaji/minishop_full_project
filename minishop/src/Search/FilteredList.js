import React from 'react'
import SearchProduct from './SearchProduct';

export default class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            suggestion:[],
            text:'',
            item:[],
        };
        this.onFetchProductDetails();
    }
    onFetchProductDetails=()=>{
        
      fetch('http://localhost/MinishopApi/DataselectionApi.php')
      .then(result=>{
          return result.json();
      }
      ).then(data=>
          {
            console.log(data,'datssssssssssssssssss');
            this.setState({item:data});
          })
        }
        onTextchanged=(e)=>{
            
            const value=e.target.value;
            let suggestion=[];
            if (value.length>0) {
                 suggestion =  this.state.item.filter(function(product) {
                    return product.name== value;
                });
            }
            this.setState(()=>({suggestion,text:value}));
        }
        rendersuggetion(){
            const {suggestion}=this.state;
            console.log(suggestion,"ghhjkkkj");
            if(suggestion.length===0){
                return null;
            }
            return(<div>
                 {suggestion.map((item)=>
                 <SearchProduct data={item}/>
            )});
            </div>
               
            )}
    
    render()
    {  
        const {text}=this.state;
        return(
            <div className="container">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search here....." 
                onChange={this.onTextchanged} type="text"/>
                <div className="input-group-btn">
                     <button class="btn btn-default"
                     style={{"width":"55px","height":"53px",backgroundColor:"grey"}}>
                         <i className="icon glyphicon glyphicon-search"/>
                    </button>
                </div>
              </div>
              <div>
                  {this.rendersuggetion()}
                </div>
          </div>
          
        )
    }
}