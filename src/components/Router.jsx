import React, { PureComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList";
import SurahPage from "./SurahPage";

const pathname = window.location.pathname;

class WebRouter extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SurahList />} />
            <Route
              exact
              path={"/surah/:surahNumber"}
              element={<SurahPage surahNumber={pathname} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default WebRouter;
