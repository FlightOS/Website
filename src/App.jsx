import React from "react";
import "./style.css";
import Hero from "./pages/Hero.jsx";
import Footer from "./pages/Footer.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
