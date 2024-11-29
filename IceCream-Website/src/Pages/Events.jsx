import React from "react";
import truck from "../assets/truck.jpg";
import desert1 from "../assets/desert1.jpg";
import desert2 from "../assets/desert2.jpg";
import desert3 from "../assets/desert3.jpg";
import Footer from "../Components/Footer/Footer";

const Events = () => {
  return (
    <div className="event">
      <div className="event-container">
        <h1 className="story-heading menu-heading">
          Host Your Sweetest Events with Us!
        </h1>
        <p className="event-paragraph">
          Make your special moments even sweeter with our delightful ice cream
          services! Whether it's a birthday party, wedding, corporate event, or
          any celebration, we bring the fun and flavor to you.
        </p>
        <h3 className="event-subheading">Our Ice Cream Truck:</h3>
        <p className="event-paragraph">
          A charming addition to any outdoor or indoor gathering, serving smiles
          and scoops on wheels!
        </p>
        <img src={truck} alt="ice cream truck" className="icecream-truck" />
        <h3 className="event-subheading">Gourmet Ice Cream Desserts:</h3>
        <div className="event-deserts">
          <img src={desert1} alt="ice cream desert" className="event-desert" />
          <img src={desert2} alt="ice cream desert" className="event-desert" />
          <img src={desert3} alt="ice cream desert" className="event-desert" />
        </div>
        <p className="event-paragraph">
          Let us create unforgettable memories with our tailored ice cream
          experience.{" "}
          <span className="event-CTA">
            Contact us today to book your event!
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
