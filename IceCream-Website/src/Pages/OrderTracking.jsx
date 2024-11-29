import React, { useState, useEffect } from "react";

const OrderTracking = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Retrieve the saved order from localStorage
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    setOrder(savedOrder);
  }, []);

  if (!order) {
    return <p>No order found. Please place an order first.</p>;
  }

  return (
    <div>
      <h1 className="story-heading">Order Tracking</h1>
      <h2 className="order-subheading">Order ID: {order.id}</h2>
      <p className="order-paragraph">Status: {order.status}</p>
      <div className="order-details">
        <h3 className="order-details-title">Order Details</h3>
        {order.items.map((item) => (
          <div key={item.id} className="order-itemContainer">
            <p className="order-paragraph">
              {item.name} x {item.quantity}
            </p>
            <p className="order-paragraph">${item.price * item.quantity}</p>
          </div>
        ))}
        <h3 className="order-details-title">Total: ${order.total}</h3>
      </div>
      <div className="user-details">
        <h3 className="order-details-title">Billing Information</h3>
        <p className="order-paragraph">Name: {order.userDetails.name}</p>
        <p className="order-paragraph">Address: {order.userDetails.address}</p>
        <p className="order-paragraph">
          Payment Method: {order.userDetails.paymentMethod}
        </p>
      </div>
    </div>
  );
};

export default OrderTracking;
