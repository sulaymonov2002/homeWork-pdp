import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid header-wrapper">
        <div className="header-title">
          <h1>Pricing</h1>
          <p>
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="cards">
          <div class="card text-center">
            <h2 class="card-header">Free</h2>
            <div class="card-body">
              <h1 class="card-title">
                $0 <sub>/ mo</sub>
              </h1>
              <p class="card-text">10 users included</p>
              <p class="card-text">2 GB of storage</p>
              <p class="card-text">Email support</p>
              <p class="card-text">Help center access</p>
              <a href="#" class="btn btn-outline-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card text-center">
            <h2 class="card-header">Pro</h2>
            <div class="card-body">
              <h1 class="card-title">
                $15 <sub>/ mo</sub>
              </h1>
              <p class="card-text">10 users included</p>
              <p class="card-text">2 GB of storage</p>
              <p class="card-text">Email support</p>
              <p class="card-text">Help center access</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card text-center">
            <h2 class="card-header">Enterprice</h2>
            <div class="card-body">
              <h1 class="card-title">
                $29 <sub>/ mo</sub>
              </h1>
              <p class="card-text">10 users included</p>
              <p class="card-text">2 GB of storage</p>
              <p class="card-text">Email support</p>
              <p class="card-text">Help center access</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
