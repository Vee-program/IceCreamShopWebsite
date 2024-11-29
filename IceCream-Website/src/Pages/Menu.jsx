import React, { useState } from "react";
import { iceCreamItems } from "../data";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import Footer from "../Components/Footer/Footer";

const Menu = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    price: "",
    topping: "",
    category: "",
    flavor: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredItems = iceCreamItems.filter((item) => {
    return (
      (filters.price === "" ||
        (filters.price === "low-to-high" && item.price) ||
        (filters.price === "high-to-low" && item.price)) &&
      (filters.topping === "" || item.topping === filters.topping) &&
      (filters.category === "" || item.category === filters.category) &&
      (filters.flavor === "" ||
        item.name.toLowerCase().includes(filters.flavor.toLowerCase()))
    );
  });

  return (
    <div className="menu">
      <div className="menu-container">
        <header>
          <h1 className="story-heading menu-heading">Ice Cream Menu</h1>
        </header>

        <aside className="filters">
          <h2>Filters</h2>
          <form>
            {/* Price Filter */}
            <label>
              Price:
              <select name="price" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </label>

            {/* Topping Filter */}
            <label>
              Toppings:
              <select name="topping" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="chocolate">Chocolate</option>
                <option value="fruit">Fruit</option>
                <option value="none">None</option>
              </select>
            </label>

            {/* Category Filter */}
            <label>
              Category:
              <select name="category" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="sandwich">Ice Cream Sandwiches</option>
                <option value="cake">Ice Cream Cakes</option>
                <option value="flavor">Ice Cream Flavors</option>
              </select>
            </label>

            {/* Flavor Search */}
            <label>
              Flavor:
              <input
                type="text"
                name="flavor"
                placeholder="Search flavor..."
                onChange={handleFilterChange}
              />
            </label>
          </form>
        </aside>

        <section className="menu-items">
          <h2 className="menu-subheading">Menu Items</h2>
          <Link to="/cart" className="cart-link">
            Go To Cart <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <div className="items-list">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} className="menu-image" />
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Category: {item.category}</p>
                  <p>Topping: {item.topping}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="addCart-button">
                    <ion-icon name="cart-outline"></ion-icon>ADD TO CART
                  </button>
                </div>
              ))
            ) : (
              <p>No items match your filters.</p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
