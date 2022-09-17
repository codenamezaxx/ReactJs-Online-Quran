import React, { PureComponent } from "react";
import axios from "axios";

const api = "https://react-quran-api.vercel.app";

class SurahPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      code: null,
      data: [],
      verses: [],
      surahName: [],
      //surahTransliteration: [],
    };
  }

  componentDidMount() {
    axios.get(api + "/surah/1").then((res) => {
      this.setState({
        code: res.data.code,
        data: res.data.data,
        verses: res.data.data.verses,
        surahName: res.data.data.name,
        //surahTransliteration: res.data.data.name.transliteration,
      });
    });
  }

  render() {
    return (
      <div className="SurahPage">
        <p>
          <div className="surahName">{this.state.surahName.long}</div>
          <br />
          {this.state.verses.map((verses) => (
            <div className="verses">
              <div className="text">
                <p id="arab">
                  {verses.text.arab}
                  <span className="endOfAyah">
                    <span className="symbol">{"۝"}</span>
                    <span className="versesNumber">
                      {verses.number.inSurah}
                    </span>
                  </span>
                </p>
                <br />
                {verses.text.transliteration.en}
                <br />
              </div>
              {verses.number.inSurah + ". "}
              {verses.translation.id}
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default SurahPage;
