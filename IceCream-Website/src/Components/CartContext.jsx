import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setCartItemCount((prevCount) => prevCount + 1);
    alert("Item added to Cart");
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));

    setCartItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

    alert("Item removed from Cart");
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing cart context
export const useCart = () => useContext(CartContext);
