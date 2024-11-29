import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import Checkout from "./Pages/Checkout";
import OrderTracking from "./Pages/OrderTracking";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events";
import Header from "./Components/Header";
import { CartProvider } from "./Components/CartContext";
import LoginRegister from "./Pages/LoginRegister";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="parent-container">
        <Header />
        <Navbar />
      </div>
      <CartProvider>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/events" element={<Events />} />
        <Route path="/loginregister" element={<LoginRegister />} />
      </Routes>
    </div>
  );
};

export default App;
