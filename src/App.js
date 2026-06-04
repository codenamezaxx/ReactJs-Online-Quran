import React from "react";
import "./App.css";
import WebRouter from "./components/Router";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <WebRouter />
      <BackToTop />
    </div>
  );
};

export default App;
