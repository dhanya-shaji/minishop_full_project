import React from "react";
import { Route, Router,browserHistory } from "react-router";
import home from "../Home/home";
import Catagories_View from "../Components/Tableview/Categories_View";
import SideNavbar from "../Components/Layout/SideNavbar"
export default (
  <Router history={browserHistory}>
    <Route path="/" component={home}>
    <Route path="/sidenavbar" component={SideNavbar}/>
    <Route path="/Catagories_view" component={Catagories_View} />
    </Route>
  </Router>
);
