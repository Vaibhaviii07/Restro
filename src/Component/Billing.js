import React, { useState } from "react";
import "../Style.css"; 

export default function Billing() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Card",
  });

  const [message, setMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.phone) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    setMessage("");
    setPaymentSuccess(true);

    setTimeout(() => {
      setPaymentSuccess(false);
    }, 3000);
  };

  return (
    <div className="billing-wrapper">
      <div className="billing-container">
        <h2 className="billing-title">💳 Billing Details</h2>
        <form onSubmit={handleSubmit} className="billing-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" placeholder="Enter delivery address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Payment Method:</label>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          <button type="submit" className="btn pay-btn">Proceed to Pay</button>
        </form>

        {message && <p className="form-message">{message}</p>}

        {paymentSuccess && (
          <div className="payment-success-slider show">
            🎉 Payment Successful! Order Placed.
          </div>
        )}
      </div>
    </div>
  );
}
