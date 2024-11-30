import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Navbar.css";
import icecream from "../assets/ice-cream.png";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cartItemCount } = useCart();

  const [showMenu, setShowMenu] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
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
          <div className="logo-container">
            <img src={icecream} alt="icecream icon" className="logo-image" />
          </div>
        </Link>

        <div className={`nav__menu ${showMenu ? "active" : ""}`} id="nav-menu">
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
                to="/events"
                className="nav__link"
                onClick={closeMenuOnMobile}>
                Events
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/cart"
                className="cart-icon"
                onClick={closeMenuOnMobile}>
                <ion-icon name="cart-outline"></ion-icon>
                {cartItemCount > 0 && (
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      textAlign: "center",
                      position: "absolute",
                      top: "-10px",
                      right: "8px",
                      color: "pink",
                      fontSize: "0.9rem",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}>
                    {cartItemCount}
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={` hamburger ${showMenu ? "active" : ""}`}
          onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
