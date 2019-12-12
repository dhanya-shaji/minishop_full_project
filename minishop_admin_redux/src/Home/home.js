import React from "react";
import { Provider } from "react-redux";

import Navbar from "../Components/Layout/Navbar";
import Catagories_View from "../Components/Tableview/Categories_View";
import SideNavbar from "../Components/Layout/SideNavbar";

import sagas from "../sagas/index";
import configureStore from "./configureStore";


const store = configureStore();
store.runSaga(sagas);



export default class home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <SideNavbar location={this.props.location} />
          <div className="page">
            <Navbar />
            <Catagories_View />
          </div>
        </div>
      </Provider>
    );
  }
}
