import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid navbar-wrapper">
        <div className="navbar-logo">
          <h3>Company name</h3>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Enterprice</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <button className="btn btn-outline-primary">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
