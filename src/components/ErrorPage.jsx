import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-lg mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak ada. Mungkin Anda salah mengetik URL atau halaman telah dipindahkan.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
        >
          Kembali ke Beranda
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
