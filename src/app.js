import React, { Component } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
