import React from "react";
import "./footer.css";
import { DiscordLink, GithubLink } from "./constants.jsx";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "pink", color: "white", fontFamily: "Arial" }}>
      <div className="footer-section">
        <h3>Credits</h3>
        <p>Designers: Majikun Yuko#7624, Riftriot#8325</p>
        <p>Beta Testers: desp#2401, Amibo#5528, Endercass#0001, Albinus#4220</p>
        <p>Developer Team: Majikun Yuko#7624, Riftriot#8325, Scarlett Yuko#0001, Sharp_Jack#4374, nitelite#0443</p>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <p>
          Check out the source code at{" "}
          <a href={GithubLink}>
            {GithubLink}
          </a>
        </p>
        <p>Join our Discord server: <a href={DiscordLink}>{DiscordLink}</a></p>
        <p>Coming soon™</p>
      </div>
    </footer>
  );
};

export default Footer;
