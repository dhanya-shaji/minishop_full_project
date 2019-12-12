import React from 'react'
import Header from './Common/Header'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Homecomponents from './Components/Homecomponents'
import Feature1 from './Features/Feature1'
import Feature2 from './Features/Feature2'
import Features3 from './Features/Features3'
import ProductDescription from './Components/ProductDescription'
import Offer from './Components/Offer'
import DealWithTheMonth from './Components/DealWithTheMonth'
import Gallery from './Components/Gallery'
import FilteredList from './Search/FilteredList'

/*const ProductDetails=[
    {
        productImage:'./images/product-1.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1200rs"
    },
    {
        productImage:'./images/product-2.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1300rs"
    },
    {
        productImage:'./images/product-3.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1400rs"
    },
    {
        productImage:'./images/product-4.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1500rs"
    },
    {
        productImage:'./images/product-5.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1600rs"
    },
    {
        productImage:'./images/product-6.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1700rs"
    },
    {
        productImage:'./images/product-7.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1800rs"
    },
    {
        productImage:'./images/product-8.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1900rs"
    }
];*/
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productDeatils:[]
        }
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
              this.setState({productDeatils:data});
            })
          }
       
    render()
    {
        return(
           <div>
               <Header/>
               <Navbar/>
               <Homecomponents/>
               <FilteredList/>
               <section className="ftco-section ftco-no-pt ftco-no-pb row">
                   <Feature1/>
                   <Feature2/>
                   <Features3/>
               </section>
                <ProductDescription data={this.state.productDeatils}/>
                <Offer/>
                <DealWithTheMonth/>
                <Gallery/>
                <Footer/>
           </div>
        )
    }
}

