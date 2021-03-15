import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
export default class Error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
