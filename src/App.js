import React from "react";
import "./App.css";
import WebRouter from "./components/Router";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Online Quran</h1>
        <form>
          <input type="search" placeholder="Search Surah..."></input>
        </form>
      </header>
      <WebRouter />
      <footer>@Zaxx | 2022</footer>
    </div>
  );
};

export default App;
