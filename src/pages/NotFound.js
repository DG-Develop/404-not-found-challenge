import React, { Component } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/NotFound.scss";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Container />

        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
