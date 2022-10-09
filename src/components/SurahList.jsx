import React, { PureComponent } from "react";
import axios from "axios";
import banner from "./svg/alquranul-karim.svg";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
//import SearchBar from "./SearchBar";

const api = "https://react-quran-api.vercel.app";


class SurahList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      surahNumber: null,
      surahName: "",
      query: "",
    };
  }

  componentDidMount() {
    axios.get(api + "/surah").then((res) => {
      this.setState({
        data: res.data.data,
        loading: false,
      });
    });
  }

  handleChange = e =>  {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <loader>
            <Loading />
          </loader>
        ) : (
          <div className="SurahList">
            <Header />
            <div className="banner">
              <img src={banner} id="alquranul-karim" alt="Banner" />
            </div>
            <div className="searchBar">
              <input
                type="search"
                placeholder="Cari Surah..."
                onChange={this.handleChange}
                value={this.state.query}
              />
            </div>
            <h3>Daftar Surah</h3>
            <hr /><br />
            <span className="listBox">
              <div className="bodyList">
                {this.state.data
                  .filter((data) => {
                    if (this.state.query === "") {
                      return data;
                    } else if (
                      data.name.transliteration.id
                        .toLowerCase()
                        .includes(this.state.query.toLowerCase())
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
                        <a id="nameOfSurah" href={"/surah/" + data.number}>
                          {data.name.transliteration.id + " "}
                        </a>
                        <br />
                      </p>
                      <p id="translationName">
                        {"(" + data.name.translation.id + ")"}
                      </p>
                      <p id="surahInfo">
                        {data.numberOfVerses + " Ayat"}
                        <br />
                        {data.revelation.id}
                      </p>
                    </div>
                  ))}
              </div>
            </span>
            <br /><hr />
            <Footer />
          </div>
        )}
      </>
    );
  }
}

export default SurahList;
