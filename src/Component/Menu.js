import React, { useContext, useState } from "react";
import "../Style.css";
import { CartContext } from "../Component/CartContext";

import butterChicken from "../Image/Butter-Chicken3.jpg";
import paneerTikka from "../Image/paneerTikka.jpg";
import butterNaan from "../Image/butterNaan.jpg";
import Biryani from "../Image/Biryani.jpg";
import Pizza from "../Image/margherita.jpg";
import pasta from "../Image/pasata.jpg";
import salad from "../Image/salad.jpg";
import Lasagna from "../Image/lasagna.jpg";
import sandwich from "../Image/sandwich.jpg";
import samosa from "../Image/samosa.jpg";
import fries from "../Image/fries.jpg";
import burger from "../Image/burger.jpg";
import gulabjamun from "../Image/gulabjamun.jpg";
import tiramisu from "../Image/teremasu.jpg";
import chai from "../Image/chai.jpg";
import coffee from "../Image/coffee.jpg";

const menuItems = [
  { id: 1, name: "Butter Chicken", category: "Indian", price: "150", image: butterChicken },
  { id: 2, name: "Butter Naan", category: "Indian", price: "20", image: butterNaan },
  { id: 3, name: "Biryani", category: "Indian", price: "150", image: Biryani },
  { id: 4, name: "Paneer Tikka", category: "Indian", price: "99", image: paneerTikka },
  { id: 5, name: "Margherita Pizza", category: "Italian", price: "99", image: Pizza },
  { id: 6, name: "Pasta", category: "Italian", price: "120", image: pasta },
  { id: 7, name: "Salads", category: "Italian", price: "200", image: salad },
  { id: 8, name: "Lasagna", category: "Italian", price: "250", image: Lasagna },
  { id: 9, name: "Sandwich", category: "Fast Food", price: "150", image: sandwich },
  { id: 10, name: "Samosa", category: "Fast Food", price: "40", image: samosa },
  { id: 11, name: "French Fries", category: "Fast Food", price: "89", image: fries },
  { id: 12, name: "Cheese Burger", category: "Fast Food", price: "99", image: burger },
  { id: 13, name: "Gulab Jamun", category: "Desserts", price: "59", image: gulabjamun },
  { id: 14, name: "Tiramisu", category: "Desserts", price: "200", image: tiramisu },
  { id: 15, name: "Masala Chai", category: "Beverages", price: "20", image: chai },
  { id: 16, name: "Cold Coffee", category: "Beverages", price: "79", image: coffee },
];

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Indian", "Italian", "Fast Food", "Desserts", "Beverages"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section className="menu-section">
        <div className="container">
          
          <div className="menu-banner">
            <img src={"/Menu"} alt="Menu Banner" className="banner-image" />
            <h2 className="menu-title">Our Menu</h2>
          </div>

          
          <div className="menu-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-items">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="menu-card">
                  <img src={item.image} alt={item.name} className="menu-image" />
                  <div className="menu-card-body">
                    <h3>{item.name}</h3>
                    <p className="menu-price">₹{item.price}</p>
                    <button className="btn add-to-cart-btn" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-items-message">No items available in this category.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
