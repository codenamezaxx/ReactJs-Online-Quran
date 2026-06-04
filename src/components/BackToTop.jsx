import React, { useState, useEffect } from "react";
import arrowUp from "./svg/up-arrow.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <img src={arrowUp} className="w-6 h-6 invert" alt="Up Arrow" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
