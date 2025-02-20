import React, { useContext } from "react";
import { CartContext } from "../Component/CartContext";
import { useNavigate } from "react-router-dom";
import "../Style.css"; 

export default function Checkout() {
  const { cart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToBilling = () => {
    navigate("/billing");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">🛍️ Checkout</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. <a href="/menu">Go to Menu</a>
        </p>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-card">
                <img src={item.image} alt={item.name} className="checkout-item-img" />
                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: <strong>₹{Number(item.price).toFixed(2)}</strong></p>
                  <p>Quantity: <strong>{item.quantity}</strong></p>
                  <p>Total: <strong>₹{(Number(item.price) * item.quantity).toFixed(2)}</strong></p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2>Total: ₹{getTotalPrice().toFixed(2)}</h2>
            <button className="checkout-btn" onClick={handleProceedToBilling}>
              Proceed to Billing ➡️
            </button>
          </div>
        </>
      )}
    </div>
  );
}
