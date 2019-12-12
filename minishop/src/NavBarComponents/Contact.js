import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import Gallery from '../Components/Gallery'
import ContactHome from './ContactHome'
import ContactComponentDescription from './ContactComponentDescription'
export default class Contact extends React.Component{
    render(){
        return(
    <div>
        <Header/>
        <Navbar/>
        <ContactHome/>
        <ContactComponentDescription/>
        <Gallery/>
        <Footer/>
    </div>
        )
    }
}