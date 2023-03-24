import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <a href="/" className="header-title-link">FlightOS</a>
      </h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Downloads">Downloads</a></li>
          <li><a href="/Credits">Credits</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
