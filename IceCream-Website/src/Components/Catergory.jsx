import React from "react";
import cake from "../assets/cake7.jpg";
import icecream from "../assets/blueberry-saused.jpg";
import cookie from "../assets/berry-cookie.jpg";
import chocolate from "../assets/dark-choc.jpg";
import { Link } from "react-router-dom";

const Catergory = () => {
  return (
    <div className="catergory">
      <h1 className="story-heading">Catergory</h1>
      <div className="catergory-container">
        <Link to="/menu">
          <div className="placeholder-container">
            <img src={cake} alt="" className="catergory-image" />
            <div className="placeholder">Ice Cream Cakes</div>
          </div>
        </Link>
        <Link to="/menu">
          <div className="placeholder-container">
            <img src={icecream} alt="" className="catergory-image" />
            <div className="placeholder">Ice Cream</div>
          </div>
        </Link>
        <Link to="/menu">
          <div className="placeholder-container">
            <img src={cookie} alt="" className="catergory-image" />
            <div className="placeholder">Ice Cream Sandwich</div>
          </div>
        </Link>
        <Link to="/menu">
          <div className="placeholder-container">
            <img src={chocolate} alt="" className="catergory-image" />
            <div className="placeholder">Toppings</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catergory;
