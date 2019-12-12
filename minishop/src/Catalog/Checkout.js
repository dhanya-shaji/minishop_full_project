import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import CheckHome from './CheckHome'
import CheckoutComponentDescription from './CheckoutComponentDescription'
export default class Checkout extends React.Component{
    render()
    {
        return(
            <div>
             <Header/>
            <Navbar/>
            <CheckHome/>
            <CheckoutComponentDescription/>
            <Footer/>
            </div>
           
            

        )
    }
}