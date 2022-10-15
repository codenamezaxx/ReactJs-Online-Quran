import React, { PureComponent } from "react";
import axios from "axios";
import banner from "./svg/alquranul-karim.svg";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";

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
      sortBy: "1"
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

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    });
  };

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value,
    })
  }

  sortingList = (e) => {
    if (this.sortBy === "1") {
      return e.sort()
    } else if (this.sortBy === "2") {
      return e.sort().reverse()
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
          <div className="SurahList">
            <Header />
            <div className="w3-border-bottom w3-border-teal w3-margin-bottom">
              <div className="banner">
                <img src={banner} id="alquranul-karim" alt="Banner" />
              </div>
              <div className="searchBar">
                <input
                  placeholder="Cari Surah..."
                  onChange={this.handleInput}
                  value={this.state.query}
                />
              </div>
              <h3>Daftar Surah</h3>
              <br />
            </div>
            <div className="listBox">
              <div className="list-container">
                <select
                  name="sort"
                  id="sort-by"
                  className="w3-select w3-margin w3-hide"
                  onChange={this.handleSort}
                  disabled
                >
                  <option value="1" selected>
                    Turun
                  </option>
                  <option value="2">Naik</option>
                </select>
                <span className="listBox w3-container">
                  <div className="bodyList w3-container w3-border w3-border-green w3-padding">
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
                        <a href={"/surah/" + data.number}>
                          <div
                            id="surah-list"
                            className="w3-container w3-display-container w3-cell w3-mobile w3-border w3-border-green w3-margin-bottom w3-margin-right"
                            key={index}
                          >
                            <div className="surah-left-pos w3-display-left">
                              <span id="numberOfSurah">
                                <b>{data.number}</b>
                              </span>
                              <p id="nameOfSurah" className="w3-padding">
                                <a id="nameOfSurah" className="w3-text-teal">
                                  {data.name.transliteration.id + " "}
                                </a>
                                <p id="translationName">
                                  {"(" + data.name.translation.id + ")"}
                                </p>
                              </p>
                            </div>
                            <p id="surahInfo" className="w3-display-topright">
                              {data.numberOfVerses + " Ayat"}
                              <br />
                              {data.revelation.id}
                            </p>
                          </div>
                        </a>
                      ))}
                  </div>
                </span>
              </div>
            </div>
            <br />
            <Footer />
          </div>
        )}
      </>
    );
  }
}

export default SurahList;