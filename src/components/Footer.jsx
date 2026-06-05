import React from "react";
import vercel from "./svg/powered-by-vercel.svg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent mb-4">
            Quran Js
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md">
            A modern Al-Quran application built with React and Tailwind CSS. 
            May it be a blessing for everyone.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span>Made with ❤️ by</span>
            <a 
              href="https://codenamezaxx.my.id" 
              className="font-medium text-teal-600 hover:text-teal-500 transition-colors"
            >
              codenamezaxx
            </a>
            <span>© 2022 - {new Date().getFullYear()}</span>
          </div>
          <img src={vercel} alt="Powered by Vercel" className="h-5 opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
