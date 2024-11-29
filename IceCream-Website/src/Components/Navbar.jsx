import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Navbar.css";
import icecream from "../assets/ice-cream.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <a
            href="https://www.flaticon.com/free-icons/ice-cream"
            title="ice cream icons">
            <img src={icecream} width="40" className="logo-icon" />
          </a>
          <span className="logo-text">The</span> Chill{" "}
          <span className="logo-text">Remedy</span>
        </Link>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Our Story
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/menu"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Shop
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/cart"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/events"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Events
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/cart"
                className="nav__link nav__cta"
                onClick={closeMenuOnMobile}>
                Order Now
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
