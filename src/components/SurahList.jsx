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
      loadApi: true,
      loadImage: true,
      data: [],
      query: "",
      sortBy: "1", // 1 = ascending, 2 = descending
    };
  }

  componentDidMount() {
    axios.get(api + "/surah").then((res) => {
      this.setState({
        data: res.data.data,
        loadApi: false,
      });
    });
  }

  onImageLoad = () => {
    this.setState({
      loadImage: false,
    });
  };

  handleInput = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  getSortedData = () => {
    const { data, sortBy } = this.state;
    const sortedData = [...data];
    
    if (sortBy === "1") {
      return sortedData.sort((a, b) => a.number - b.number);
    } else if (sortBy === "2") {
      return sortedData.sort((a, b) => b.number - a.number);
    }
    
    return sortedData;
  };

  render() {
    const { loadApi, query, sortBy } = this.state;
    const sortedData = this.getSortedData();

    const filteredData = sortedData.filter((data) => {
      if (query === "") return true;
      return data.name.transliteration.id.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-700 p-8 mb-12 shadow-xl shadow-teal-900/20">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Al-Quranul Karim</h2>
                <p className="text-teal-50 opacity-90 text-lg max-w-md">
                  Bacalah Al-Quran setiap hari untuk menenangkan hati dan pikiran.
                </p>
              </div>
              <img 
                src={banner} 
                alt="Al-Quran" 
                className="w-64 md:w-80 drop-shadow-2xl transition-transform hover:scale-105"
                onLoad={this.onImageLoad}
              />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            <div className="relative w-full md:max-w-md group">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari Surah (contoh: Al-Fatihah)..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-0 transition-all outline-none shadow-sm"
                onChange={this.handleInput}
                value={query}
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">Urutkan:</span>
              <select
                className="w-full md:w-48 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-teal-500 transition-all outline-none"
                onChange={this.handleSort}
                value={sortBy}
              >
                <option value="1">Nomor (Ascending)</option>
                <option value="2">Nomor (Descending)</option>
              </select>
            </div>
          </div>

          {/* Grid List */}
          {loadApi ? (
            <div className="flex justify-center py-20">
              <Loading />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((data) => (
                <a 
                  href={"/surah/" + data.number} 
                  key={data.number}
                  className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                      <svg className="absolute inset-0 w-full h-full text-teal-600 opacity-10 group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 40 40">
                        <path d="M20 2L24.5 15.5H38L27 24L31.5 37.5L20 29L8.5 37.5L13 24L2 15.5H15.5L20 2Z" fill="currentColor"/>
                      </svg>
                      <span className="text-lg font-bold text-teal-600">{data.number}</span>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-teal-600 transition-colors">
                        {data.name.transliteration.id}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {data.name.translation.id}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="font-arabic text-2xl text-teal-600 mb-1" dir="rtl">
                        {data.name.short}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">
                        {data.numberOfVerses} Ayat
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    );
  }
}

export default SurahList;