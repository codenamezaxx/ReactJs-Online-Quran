import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import banner from "../alquranul-karim.svg";
import WebRouter from "./Router";

const api = "https://react-quran-api.vercel.app";

class SurahList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      surahNumber: null,
    };
  }

  componentDidMount() {
    axios.get(api + "/surah").then((res) => {
      this.setState({
        data: res.data.data,
      });
    });
  }

  render() {
    const openSurah = (number) => {
      this.setState({
        surahNumber: number,
      });
      <WebRouter surahNumber={number} />;
    };
    return (
      <div className="SurahList">
        <div className="banner">
          <img src={banner} id="alquranul-karim" alt="Banner" />
        </div>
        <h3>Daftar Surat</h3>
        <div className="bodyList">
          {this.state.data.map((data) => (
            <div id="surah-list">
              <span id="numberOfSurah">
                <b>{data.number}</b>
              </span>
              <p id="nameOfSurah">
                <a
                  href={"/surah/" + data.number}
                  onClick={openSurah(data.number)}
                >
                  {data.name.transliteration.id + " "}
                </a>
                <br />
                {"(" + data.name.translation.id + ")"}
              </p>
              <p id="surahInfo">
                {data.numberOfVerses + " Ayat"}
                <br />
                {data.revelation.id}
              </p>
              <span id="surahButtons">
                <Link
                  to={"/surah/" + data.number}
                  onClick={openSurah(data.number)}
                >
                  <button id="surahButton">Open</button>
                </Link>
                <button id="surahButton">Play</button>
                <button id="surahButton">Tafsir</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SurahList;
