import React from "react";
import "./hero.css";
import { DiscordLink, GithubLink } from "./constants.jsx";

const Hero = () => {
  return (
    <div className="container">
      <img src="logo.png" alt="Main Image" className="main-image" />
      <h1 className="title">FlightOS</h1>
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
