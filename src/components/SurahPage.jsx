import React, { PureComponent } from "react";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import Header from "./Header";
import TafsirModal from "./TafsirModal";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../api/config";

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
      isTafsirOpen: false,
      selectedVerseIndex: null,
    };
  }

  handleOpenTafsir = (index) => {
    this.setState({
      isTafsirOpen: true,
      selectedVerseIndex: index,
    });
  };

  handleCloseTafsir = () => {
    this.setState({
      isTafsirOpen: false,
      selectedVerseIndex: null,
    });
  };

  handlePrevTafsir = () => {
    const { selectedVerseIndex } = this.state;
    if (selectedVerseIndex > 0) {
      this.setState({ selectedVerseIndex: selectedVerseIndex - 1 });
    }
  };

  handleNextTafsir = () => {
    const { selectedVerseIndex, verses } = this.state;
    if (selectedVerseIndex < verses.length - 1) {
      this.setState({ selectedVerseIndex: selectedVerseIndex + 1 });
    }
  };

  componentDidMount() {
    this.fetchSurahData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.surahNumber !== this.props.surahNumber) {
      this.setState(
        {
          loading: true,
          surahNumber: this.props.surahNumber,
          isTafsirOpen: false,
          selectedVerseIndex: null
        },
        () => {
          this.fetchSurahData();
          window.scrollTo(0, 0);
        }
      );
    }
  }

  fetchSurahData = () => {
    axios.get(API_BASE_URL + "/surah/" + this.state.surahNumber).then((res) => {
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
  };

  setBasmalahVisibility = () => { // Changed method name to avoid confusion with render
    const { data } = this.state;
    if (data && (data.number === 1 || data.number === 9)) {
      this.setState({ basmalah: false });
    } else {
      this.setState({ basmalah: true });
    }
  };

  render() {
    const { loading, data, verses, surahName, basmalah, code, isTafsirOpen, selectedVerseIndex } = this.state;

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
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-teal-600 dark:text-emerald-400 hover:text-teal-700 dark:hover:text-emerald-300 font-semibold transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Daftar Surah
            </Link>
          </div>

          {/* Surah Info Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 text-center">
            <h2 className="text-4xl font-bold text-teal-600 dark:text-emerald-400 mb-2">
              {surahName.transliteration.id}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-1">
              {surahName.translation.id} ({data.numberOfVerses} Ayat)
            </p>
            <p className="font-arabic text-5xl leading-relaxed text-gray-800 dark:text-gray-200" dir="rtl">
              {surahName.long}
            </p>
          </div>

          {/* Basmalah */}
          {basmalah && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 text-center border border-gray-100 dark:border-gray-700">
              <p className="font-arabic text-4xl leading-relaxed text-gray-800 dark:text-gray-200 mb-3" dir="rtl">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
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
                    <button
                      onClick={() => this.handleOpenTafsir(verses.indexOf(verse))}
                      className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors shadow-sm active:scale-95"
                    >
                      Tafsir
                    </button>
                  )}
                </div>

                <div className="mb-4">
                  <p className="mb-8 font-arabic text-3xl md:text-4xl text-right leading-relaxed md:leading-loose text-gray-900 dark:text-gray-100" dir="rtl">
                    {verse.text.arab}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed md:leading-relaxed border-l-4 border-teal-500 pl-4 italic">
                    {verse.translation.id}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Surah Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-8">
            {data.number > 1 ? (
              <Link 
                to={`/surah/${data.number - 1}`}
                className="w-full sm:flex-1 flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-teal-500 transition-all group shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-teal-600 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Surah Sebelumnya</p>
                  <p className="text-gray-900 dark:text-gray-100 font-bold">Surah Ke-{data.number - 1}</p>
                </div>
              </Link>
            ) : <div className="hidden sm:block sm:flex-1"></div>}
            
            <Link 
              to="/"
              className="w-full sm:w-auto flex items-center justify-center p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all font-bold text-sm"
            >
              Daftar Surah
            </Link>

            {data.number < 114 ? (
              <Link 
                to={`/surah/${data.number + 1}`}
                className="w-full sm:flex-1 flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-teal-500 transition-all group text-right shadow-sm hover:shadow-md"
              >
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Surah Selanjutnya</p>
                  <p className="text-gray-900 dark:text-gray-100 font-bold">Surah Ke-{data.number + 1}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 text-teal-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div className="hidden sm:block sm:flex-1"></div>}
          </div>
        </main>

        <TafsirModal
          isOpen={isTafsirOpen}
          onClose={this.handleCloseTafsir}
          verse={verses[selectedVerseIndex]}
          surahNumber={data?.number}
          onPrev={this.handlePrevTafsir}
          onNext={this.handleNextTafsir}
          hasPrev={selectedVerseIndex > 0}
          hasNext={selectedVerseIndex < verses.length - 1}
        />
        
        <Footer />
      </div>
    );
  }
}

export default SurahPage;
