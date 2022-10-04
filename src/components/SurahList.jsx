import React, { PureComponent } from "react";
import axios from "axios";
import banner from "./svg/alquranul-karim.svg";
//import SearchBar from "./SearchBar";

const api = "https://react-quran-api.vercel.app";

class SurahList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      surahNumber: null,
      surahName: "",
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
    return (
      <div className="SurahList">
        <div className="banner">
          <img src={banner} id="alquranul-karim" alt="Banner" />
        </div>
        <h3>Daftar Surat</h3>
        <span className="listBox">
          <div className="bodyList">
            {this.state.data.filter((data) => {
                if (this.props.query === "") {
                  return data;
                } else if (
                  data.name.transliteration.id
                    .toLowerCase()
                    .includes(this.props.query.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((data, index) => (
                <div id="surah-list" key={index}>
                  <span id="numberOfSurah">
                    <b>{data.number}</b>
                  </span>
                  <p id="nameOfSurah">
                    <a href={"/surah/" + data.number}>
                      {data.name.transliteration.id + " "}
                    </a>
                    <br />
                  </p>
                  <p id="translationName">{"(" + data.name.translation.id + ")"}</p>
                  <p id="surahInfo">
                    {data.numberOfVerses + " Ayat"}
                    <br />
                    {data.revelation.id}
                  </p>
                  <span id="surahButtons">
                    <button id="surahButton" disabled>Play</button>
                    <a href={"/surah/" + data.number}>
                      <button id="surahButton">Open</button>
                    </a>
                    <button id="surahButton" disabled>Tafsir</button>
                  </span>
                </div>
              ))}
          </div>
        </span>
      </div>
    );
  }
}

export default SurahList;
