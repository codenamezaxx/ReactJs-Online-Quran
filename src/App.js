import React from "react";
import "./App.css";
import SurahList from "./components/SurahList";
import SurahPage from "./components/SurahPage";

function App() {
  return (
    <div className="App">
        <header>
          <h1>Online Quran</h1>
          <form>
            <input type="search" placeholder="Search Surah..."></input>
          </form>
        </header>
        <SurahPage />
        <footer>
            @Zaxx | 2022
        </footer>
    </div>
  );
}

export default App;
