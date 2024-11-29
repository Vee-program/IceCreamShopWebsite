import React from "react";
import hero from "../../assets/hero1.jpg";
import style from "../Hero/Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroContainer}>
        <div className={style.heroLeft}>
          <img
            src={hero}
            alt="2 hands holding ice cream cones"
            className={style.heroImage}
          />
        </div>
        <div className={style.heroRight}>
          <h1 className={style.headline}>Your Sweet Escape Awaits</h1>
          <p className={style.subheadline}>
            Deliciously handcrafted ice cream made with love and served with
            smiles.
          </p>
          <Link to="/menu">
            <button className={style.heroButton}>View Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
