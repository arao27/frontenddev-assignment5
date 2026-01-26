import "./Header.css";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="store-name">ComponentCorner</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;