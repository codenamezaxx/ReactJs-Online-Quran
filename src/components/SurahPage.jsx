import React, { PureComponent } from "react";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import Header from "./Header";

const api = "https://react-quran-api.vercel.app";

class SurahPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      code: 200,
      loading: true,
      basmalah: false,
      data: null, // Change to null for initial state
      verses: [],
      surahName: null, // Change to null for initial state
      surahNumber: props.surahNumber,
      surahTransliteration: "",
    };
  }

  componentDidMount() {
    axios.get(api + "/surah/" + this.state.surahNumber).then((res) => {
      this.setState({
        code: res.data.code,
        data: res.data.data,
        verses: res.data.data.verses,
        surahName: res.data.data.name,
        loading: false,
      }, () => this.setBasmalahVisibility()); // Call setBasmalahVisibility after state update
    }).catch(error => {
      console.error("Error fetching surah data:", error);
      this.setState({ loading: false, code: error.response?.status || 500 });
    });
  }

  setBasmalahVisibility = () => { // Changed method name to avoid confusion with render
    const { data } = this.state;
    if (data && (data.number === 1 || data.number === 9)) {
      this.setState({ basmalah: false });
    } else {
      this.setState({ basmalah: true });
    }
  };

  render() {
    const { loading, data, verses, surahName, basmalah, code } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (code !== 200 || !data) {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 text-center text-red-500">
            <h2 className="text-3xl font-bold mb-4">Error: Surah not found or API issue</h2>
            <p>Please try again later or check the Surah number.</p>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Surah Info Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 text-center">
            <h2 className="text-4xl font-bold text-teal-600 dark:text-emerald-400 mb-2">
              {surahName.transliteration.id}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-1">
              {surahName.translation.id} ({data.numberOfVerses} Ayat)
            </p>
            <p className="font-arabic text-5xl text-gray-800 dark:text-gray-200" dir="rtl">
              {surahName.long}
            </p>
          </div>

          {/* Basmalah */}
          {basmalah && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 text-center border border-gray-100 dark:border-gray-700">
              <p className="font-arabic text-4xl text-gray-800 dark:text-gray-200 mb-3" dir="rtl">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
              </p>
            </div>
          )}

          {/* Verses List */}
          <div className="space-y-6">
            {verses.map((verse) => (
              <div 
                key={verse.number.inSurah} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-700 pb-3">
                  <span className="text-lg font-semibold text-teal-600 dark:text-emerald-400">
                    {data.number}:{verse.number.inSurah}
                  </span>
                  
                  {verse.tafsir?.id?.short && (
                    <div className="relative group">
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors">
                        Tafsir
                      </button>
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                        {verse.tafsir.id.short}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <p className="font-arabic text-3xl md:text-4xl text-right leading-relaxed text-gray-900 dark:text-gray-100" dir="rtl">
                    {verse.text.arab}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {verse.translation.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default SurahPage;
