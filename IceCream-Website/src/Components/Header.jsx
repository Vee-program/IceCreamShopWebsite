import React, { useState } from "react";
import "../Header.css";
import { Link } from "react-router-dom";

const Header = ({ items, onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    onSearchResults(filteredItems);
  };
  return (
    <header className="top-header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={handleSearch}
          value={query}
        />
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
