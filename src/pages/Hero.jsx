import React from "react";
import "../styles/hero.css";
import { DiscordLink, GithubLink } from "../constants.jsx";

const Hero = () => {
  return (
    <div className="container">
      <svg width="1100" height="878.5" className="main-image"><path fill="#fff" d="M0 878.5h569.663L661.997 0z"/></svg>
      <h1 className="title">FlightOS</h1>
      <h2 className="sub">An arch based distro that aims to keep it simple.</h2>
      <div>
        <a href={GithubLink}>
          <img src="github.png" alt="Small Image 1" className="small-image" />
        </a>
        <a href={DiscordLink}>
          <img src="discord.png" alt="Small Image 2" className="small-image" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
