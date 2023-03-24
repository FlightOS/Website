import React from "react";
import "../styles/credits.css";
import Footer from "./Footer";
import Header from "./Header";

const Credits = () => {
  return (
    <div className="container">
    <Header />
      <h1 className="title" style={{ marginTop: "800px" }}>Credits</h1>
      <div className="thanks">
        <h2 className="subtitle">Thanks to those who contributed!</h2>
        <img src="hutao.gif" className="subImage"></img>
      </div>
      <div className="credit-list">
        <div className="credit">
          <img src="scar.webp" alt="Credit Avatar 1" className="avatar" />
          <div className="credit-info">
            <h3 className="credit-name">Scarlett Yuko#0001</h3>
            <p className="credit-role">Lead Developer</p>
          </div>
        </div>
        <div className="credit">
          <img src="nitelite.webp" alt="Credit Avatar 2" className="avatar" />
          <div className="credit-info">
            <h3 className="credit-name">nitelite#0443</h3>
            <p className="credit-role">Developer</p>
          </div>
        </div>
        <div className="credit">
          <img src="rift.png" alt="Credit Avatar 2" className="avatar" />
          <div className="credit-info">
            <h3 className="credit-name">Riftriot#8325</h3>
            <p className="credit-role">Web Developer</p>
          </div>
        </div>
        <div className="credit">
          <img src="madjikun.webp" alt="Credit Avatar 3" className="avatar" />
          <div className="credit-info">
            <h3 className="credit-name">koaku#7624</h3>
            <p className="credit-role">Developer and VFX</p>
          </div>
        </div>
        <div className="credit">
          <img src="sharpjack.webp" alt="Credit Avatar 2" className="avatar" />
          <div className="credit-info">
            <h3 className="credit-name">Sharp_Jack#4374</h3>
            <p className="credit-role">Developer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Credits;
