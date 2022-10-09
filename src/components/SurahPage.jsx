import React, { PureComponent } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";
import Footer from "./Footer";
import Header from "./Header";

const api = "https://react-quran-api.vercel.app";

class SurahPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      basmalah: false,
      code: null,
      data: [],
      verses: [],
      surahName: [],
      surahNumber: props.surahNumber,
      surahTransliteration: "",
    };
  }

  componentDidMount() {
    axios.get(api + this.state.surahNumber).then((res) => {
      this.setState({
        code: res.data.code,
        data: res.data.data,
        verses: res.data.data.verses,
        surahName: res.data.data.name,
        loading: false,
        surahTransliteration: res.data.data.name.transliteration.id,
      });
    });
  }

  Basmalah() {
    if (this.state.data.number === 1 || this.state.data.number === 9) {
      this.setState({ basmalah: false });
    } else {
      this.setState({ basmalah: true });
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <loader>
            <Loading />
          </loader>
        ) : (
          <div className="SurahPage">
            <Header />
            <p>
              <div className="surahName">
                <p id="arab">{this.state.surahName.long}</p>
                <br />
                <p id="translation">{this.state.surahTransliteration}</p>
              </div>
              {this.Basmalah()}
              {this.state.basmalah ? (
                <div className="basmalah">
                  <p id="arab">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                  <p id="translation">
                    Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                  </p>
                </div>
              ) : (
                <></>
              )}
              {this.state.verses.map((verses) => (
                <div className="verses">
                  <span className="versesNumber">
                    {this.state.data.number + " : " + verses.number.inSurah}
                  </span>
                  <div className="text">
                    <p id="arab">{verses.text.arab}</p>
                    <br />
                  </div>
                  <div id="translation">
                    <p id="idText">{verses.translation.id}</p>
                  </div>
                </div>
              ))}
            </p>
            <br /><hr />
            <Footer />
          </div>
        )}
      </>
    );
  }
}

export default SurahPage;
