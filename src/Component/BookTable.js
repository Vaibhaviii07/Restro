import React, { useState } from "react";
import "../Style.css"; 

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, time, guests } = formData;

    if (!name || !email || !phone || !date || !time || !guests) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    setMessage("✅ Table booked successfully!");
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "" });

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };

  return (
    <section className="book-table">
      <div className="container">
        <h2 className="book-table-title">📅 Book a Table</h2>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required />
          <button type="submit" className="btn book-btn">Reserve Now</button>
        </form>

        {message && <p className="form-message">{message}</p>}

        {bookingSuccess && (
          <div className="booking-success-slider show">
            🎉 Booking Confirmed!
          </div>
        )}
      </div>
    </section>
  );
};

export default BookTable;
