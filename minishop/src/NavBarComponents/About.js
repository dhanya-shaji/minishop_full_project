import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import Gallery from '../Components/Gallery'
import Feature1 from '../Features/Feature1'
import Feature2 from '../Features/Feature2'
import Features3 from '../Features/Features3'
import AboutHome from './AboutHome'
import AboutComponentDescription from './AboutComponentDescription'
import Testimonial from './Testmonial'
export default class About extends React.Component{
    render()
    {
        return(
            <div>
                <Header/>
                <Navbar/>
                <AboutHome/>
                <section className="ftco-section ftco-no-pt ftco-no-pb row">
                   <Feature1/>
                   <Feature2/>
                   <Features3/>
               </section>
               <AboutComponentDescription/>
               <Testimonial/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}