import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SurahList from "./SurahList";
import SurahPage from "./SurahPage";
import ErrorPage from "./ErrorPage";

const SurahPageWrapper = () => {
  const { surahNumber } = useParams();
  return <SurahPage surahNumber={surahNumber} />;
};

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurahList />} />
        <Route path="/surah/:surahNumber" element={<SurahPageWrapper />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
