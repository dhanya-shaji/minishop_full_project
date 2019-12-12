import React from "react";
import { Link } from 'react-router'
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
                <div className="navbar-header">
                  <a id="toggle-btn" href="" className="menu-btn"> 
                    <i className="icon-bars"> </i>
                    
                  </a>
                   
                    <div className="brand-text d-none d-md-inline-block"><Link to="/">
                      <span>
                        MINISHOP
                      </span>
                      <strong className="text-primary">Dashboard</strong></Link>
                    </div>
                    
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
