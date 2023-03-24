import React from "react";
import "./style.css";
import Hero from "./pages/Hero.jsx";
import Footer from "./pages/Footer.jsx";
import Header from "./pages/Header.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
