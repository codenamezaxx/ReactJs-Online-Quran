import React from 'react';

const TafsirModal = ({ isOpen, onClose, verse, surahNumber, onPrev, onNext, hasPrev, hasNext }) => {
  if (!isOpen || !verse) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-teal-600 dark:text-emerald-400">
              Tafsir Ayat {verse.number.inSurah}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Surah {surahNumber}:{verse.number.inSurah}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <div className="mb-6">
            <p className="font-arabic text-3xl text-right leading-relaxed text-gray-900 dark:text-gray-100 mb-4" dir="rtl">
              {verse.text.arab}
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-6 border-l-4 border-teal-500 pl-4">
              "{verse.translation.id}"
            </p>
          </div>
          
          <div className="bg-teal-50 dark:bg-emerald-900/20 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-teal-700 dark:text-emerald-400 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Tafsir Pendek
            </h4>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
              {verse.tafsir.id.short}
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-medium transition-all ${
              hasPrev 
                ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-emerald-400 border border-teal-100 dark:border-emerald-900 hover:bg-teal-50 dark:hover:bg-emerald-900/30' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed border border-transparent'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ayat Sebelumnya
          </button>
          
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-medium transition-all ${
              hasNext 
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-200 dark:shadow-none hover:bg-teal-700' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
            }`}
          >
            Ayat Selanjutnya
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TafsirModal;