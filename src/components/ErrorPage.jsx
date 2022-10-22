import React, { Component } from "react";

export default class ErrorPage extends Component {
  
  render() {
    return (
      <div className="w3-container w3-center">
        <div className="w3-panel w3-padding-medium w3-round-large">
          <h1 className="w3-jumbo w3-text-white">
            <b>404</b>
          </h1>
          <h3 className="w3-text-white">Page not found</h3>
          <a href="/">
            <button className="w3-button w3-teal w3-text-black w3-margin">
              Back To Home
            </button>
          </a>
        </div>
      </div>
    );
  }
}
