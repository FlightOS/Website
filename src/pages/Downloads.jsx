import React from "react";
import "../styles/downloads.css";
import Footer from "./Footer";
import Header from "./Header";

const Downloads = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="downloadstitle">Downloads</h1>
      <div className="bottomrelease">
        <h2 className="release-title">Release 1.0</h2>
        <ul className="checksum-list">
          <li>SHA256 Checksum: SOON</li>
        </ul>
        <a href="#" className="download-button">COMING SOON</a>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
