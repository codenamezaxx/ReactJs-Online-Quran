import React from "react";
import "./App.css";
import "./components/css/w3.css"
import "./components/css/SurahList.css"
import "./components/css/SurahPage.css"
import WebRouter from "./components/Router";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div className="App">
      <WebRouter />
      <BackToTop />
    </div>
  );
};

export default App;
