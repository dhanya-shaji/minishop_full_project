import React from 'react'
 export default class ApiFetching extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            name:""
        };
     }
     componentDidMount()
     {   
      
         fetch('http://localhost/MinishopApi/DataselectionApi.php')
         .then(result=>{
           return result.json()}
         
         ).then(data=>
          {
            
          })
        }
         render() {
             return(
            <div>
              {this.state.name}
            </div>
             ) 

    
 }
}
