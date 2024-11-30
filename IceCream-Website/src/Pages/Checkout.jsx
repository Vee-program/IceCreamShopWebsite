import React, { useState } from "react";
import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    paymentMethod: "Credit Card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Simulate saving the order
    const order = {
      id: Math.floor(Math.random() * 100000), // Generate a random order ID
      items: cart,
      total: calculateTotal(),
      userDetails,
      status: "Processing",
    };

    // Save order in localStorage (simulating a backend call)
    localStorage.setItem("order", JSON.stringify(order));

    // Redirect to Order Tracking page
    navigate("/order-tracking");

    alert("Your order was successful, You can now track your order");
  };

  return (
    <div>
      <h1 className="story-heading">Checkout</h1>
      <div className="checkout-form">
        <h2 className="checkout-subheading">Billing Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="checkout-input"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userDetails.address}
          onChange={handleInputChange}
          className="checkout-input"
        />
        <label className="checkout-label">
          Payment Method:
          <select
            name="paymentMethod"
            value={userDetails.paymentMethod}
            onChange={handleInputChange}
            className="checkout-input">
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </label>
      </div>
      <div className="cart-summary">
        <h2 className="order-summary">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <h3 className="total">Total: ${calculateTotal()}</h3>
      </div>
      <button onClick={handleCheckout} className="place-order">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
