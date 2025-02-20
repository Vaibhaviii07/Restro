import React, { useContext } from "react";
import { CartContext } from "../Component/CartContext";
import { Link } from "react-router-dom";
import "../Style.css"; 
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, removeFromCart, removeItemCompletely, getTotalPrice } = useContext(CartContext);

  const totalPrice = getTotalPrice();
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          <p>Your cart is empty.</p> <Link to="/Menu">Go To Menu</Link>
        </p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{Number(item.price).toFixed(2)}</td>
                  <td>
                    <button onClick={() => addToCart(item)}>+</button>
                    <span className="cart-quantity">{item.quantity}</span>
                    
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                  </td>
                  <td>₹{(Number(item.price) * item.quantity).toFixed(2)}</td>
                  <td>
                    
                    <button className="remove-btn" onClick={() => removeItemCompletely(item.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
