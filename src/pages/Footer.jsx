import React from "react";
import "../styles/footer.css";
import { DiscordLink, GithubLink } from "../constants.jsx";

const Footer = () => {
  return (
   <footer className="footer" style={{ color: "white", fontFamily: "Arial" }}>
      <div className="footer-section">
        <h3>Credits</h3>
        <p>Site Designers: Rifriot#8325, Majikun Yuko#7624</p>
        <p>Developer Team: Majikun Yuko#7624, Riftriot#8325, Scarlett Yuko#0001, Sharp_Jack#4374, nitelite#0443</p>
      </div>
      <div className="footer-section beta-testers">
        <h3>Beta Testers</h3>
        <p>desp#2401</p>
        <p>Amibo#5528</p>
        <p>Endercass#0001</p>
        <p>Albinus#4220</p>
      </div>
      <div className="footer-section">
        <h3>More</h3>
        <p>Check out the source code at <a href={GithubLink}>{GithubLink}</a></p>
        <p>Join our Discord server: <a href={DiscordLink}>{DiscordLink}</a></p>
        <p>Coming soon™</p>
      </div>
    </footer>
  );
};

export default Footer;
