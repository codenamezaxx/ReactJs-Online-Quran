import React, { PureComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurahList from "./SurahList";
import SurahPage from "./SurahPage";

const pathname = window.location.pathname;

class WebRouter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SurahList query={this.props.query}/>} />
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
