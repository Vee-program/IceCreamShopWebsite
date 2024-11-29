import React from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Catergory from "../Components/Catergory";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Catergory />
      <Footer />
    </div>
  );
};

export default Home;
