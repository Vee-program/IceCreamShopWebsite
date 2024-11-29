import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="top-header">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="account">
        <Link to="/loginregister">Login / Register</Link>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="header-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="header-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="header-link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
