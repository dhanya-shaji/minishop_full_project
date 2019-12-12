import React from "react";
import SideBar from "./SideBar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default class CatalogProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: []
    };
    this.onFetchSportsDetails();
  }
  onFetchSportsDetails = () => {
    fetch(
      "http://localhost/MinishopApi/catagoriesDataselectionApi.php?type=getByAllId"
    )
      .then(result => {
        return result.json();
      })
      .then(datas => {
        this.setState({ catagories: datas });
        console.log(datas);
      });
  };
  render() {
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {this.props.data.map((product, index) => (
                  <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                    <div className="product d-flex flex-column">
                      <Link
                        to={{
                          pathname: "/SingleProductView",
                          productParam: { productDeatils: product }
                        }}
                        className="img-prod"
                      >
                        <img
                          className="img-fluid"
                          style={{ height: "200px", width: "250px" }}
                          src={product.image}
                          alt="Colorlib Template"
                        />
                        <div className="overlay"></div>
                      </Link>
                      <div className="text py-3 pb-4 px-3">
                        <div className="d-flex">
                          <div className="cat">
                            <span>Lifestyle</span>
                          </div>
                          <div className="rating">
                            <p className="text-right mb-0">
                              <a href="#">
                                <span className="ion-ios-star-outline"></span>
                              </a>
                              <a href="#">
                                <span className="ion-ios-star-outline"></span>
                              </a>
                              <a href="#">
                                <span className="ion-ios-star-outline"></span>
                              </a>
                              <a href="#">
                                <span className="ion-ios-star-outline"></span>
                              </a>
                              <a href="#">
                                <span className="ion-ios-star-outline"></span>
                              </a>
                            </p>
                          </div>
                        </div>
                        <h3>
                          <a href="#">{product.name}</a>
                        </h3>
                        <div className="pricing">
                          <p className="price">
                            <span>{product.prize}</span>
                          </p>
                        </div>
                        <p className="bottom-area d-flex px-3">
                          <Link to={{pathname:"/Cart"}}
                            className="add-to-cart text-center py-2 mr-1"
                          >
                            <span>
                              Add to cart <i className="ion-ios-add ml-1"></i>
                            </span>
                          </Link>
                          <Link to={{pathname:"/Cart"}} className="buy-now text-center py-2">
                            Buy now
                            <span>
                              <i className="ion-ios-cart ml-1"></i>
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SideBar
              data={this.state.catagories}
              datas={this.state.catagories}
            />
          </div>
        </div>
      </section>
    );
  }
}
