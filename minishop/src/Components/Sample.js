import React from 'react'
export default class Sample extends React.Component{
    constructor(props){
        super(props);
        this.item=[
            "sara","basil","catherine"
        ]  ; 
        this.state={
            suggestion:[],
            text:'',
        };
    }
        onTextchanged=(e)=>{
            const value=e.target.value;
            let suggestion=[];
            if (value.length>0) {
                const regex=new RegExp(value);
                suggestion=this.item.sort().filter(v=>regex.test(v));
            }
            this.setState(()=>({suggestion,text:value}));
        }
        rendersuggetion(){
            const {suggestion}=this.state;
            if(suggestion.length===0){
                return null;
            }
            return(
                <ul>
                    {suggestion.map((item)=>
                        <li>{item}</li>)}    
                </ul> 
            );
        }
    
    render()
    {  
        const {text}=this.state;
        return(
            <div>
                <input value={text} onChange={this.onTextchanged} type="text"/>
                {this.rendersuggetion()}
            </div>
        )
    }
}