import React, { useState } from "react";
import "./App.css";
import WebRouter from "./components/Router";
import BackToTop from "react-back-to-top-button";
import arrowUp from "./components/svg/up-arrow.svg";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <WebRouter />
      <BackToTop
        showOnScrollUp={false}
        showAt={500}
        speed={100}
        easing="easeInOutQuint"
      >
        <img id="arrowUp" src={arrowUp} alt="ArrowUp" />
      </BackToTop>
    </div>
  );
};

export default App;
