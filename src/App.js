import React, { useState } from "react";
import "./App.css";
import WebRouter from "./components/Router";
import BackToTop from "react-back-to-top-button";
import arrowUp from "./components/svg/up-arrow.svg";

const App = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      <header>
        <a className="title" href="/">
          <span>
            <h1>Online Quran</h1>
          </span>
        </a>
        <input
          type="search"
          placeholder="Cari Surat.."
          onChange={handleChange}
          value={query}
        />
      </header>
      <WebRouter query={query} />
      <BackToTop
        showOnScrollUp={false}
        showAt={500}
        speed={100}
        easing="easeInOutQuint"
      >
        <img id="arrowUp" src={arrowUp} alt="ArrowUp" />
      </BackToTop>
      <footer>
        <div className="footer">
          <h1>Online Quran</h1>
          <p>by <a href="https://lynk.id/codenamezaxx">Zaxx</a> 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
