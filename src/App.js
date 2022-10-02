import React, { useState } from "react";
import "./App.css";
import WebRouter from "./components/Router";

const App = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value,);
  };
  return (
    <div className="App">
      <header>
        <h1>Online Quran</h1>
        <form>
          <input
            type="search"
            placeholder="Search Surah..."
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
      <WebRouter query={query} />
      <footer>@Zaxx | 2022</footer>
    </div>
  );
};

export default App;
