import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <header className="cart-container">
        <h1 className="story-heading menu-heading">Your Cart</h1>
        <Link to="/menu" className="cart-link">
          <i class="fa-solid fa-arrow-left"></i>Back to Menu
        </Link>
      </header>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} className="menu-image" />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="subtract-button">
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="add-button">
                  +
                </button>
              </p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button">
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <footer>
        <h3>Total: ${calculateTotal()}</h3>
      </footer>
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-btn">Proceed To Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
