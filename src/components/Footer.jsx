import React from "react";
import vercel from "./svg/powered-by-vercel.svg";

const Footer = () => {
  return (
    <footer className="w3-container w3-border-teal w3-border-top">
      <h1>Quran Js</h1>
      <p className="w3-small">
        made by{" "}
        <a href="https://lynk.id/codenamezaxx" className="w3-text-teal">
          Zaxx
        </a>{" "}
        2022
      </p>
      <img src={vercel} id="powered-by-vercel"/>
    </footer>
  );
};

export default Footer;
