import React, { PureComponent } from "react";
import axios from "axios";

const api = "https://react-quran-api.vercel.app";

class SurahList extends PureComponent {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // ComponentDidMount is used to
  // execute the code
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
        <h3>Daftar Surat</h3>
        <div>
          {this.state.data.map((data) => (
            <div id="surah-list">
              <p>
                {" "}
                {" " + data.number + "   | "}
                <a href={"/surah/" + data.number}>
                  {data.name.transliteration.id + " "}
                </a>
                {"(" + data.name.translation.id + ")"}
                {" | " + data.numberOfVerses + " Ayat | "}
                {data.revelation.id}
              </p>
              <a href={"/surah/" + data.number}>
              <button>Open</button>
              </a>
              <button>Play</button>
              <button>Tafsir</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SurahList;
