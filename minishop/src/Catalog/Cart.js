import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import CartHome from './CartHome'
import CartComponents from './CartComponents'
export default class Cart extends React.Component{
    constructor(props){
        super(props);
        
        }
        


    render()
    {
        
        return(
            <div>
            <Header/>
            <Navbar/>
            <CartHome/>
            <CartComponents/>
            <Footer/>
            </div>
            

        )
    }
}