import React, { useState } from "react";
import "../Style.css"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Your message has been sent successfully! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });

    
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions? Please be free to ask!</p>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Visit Us</h3>
        <p>📍 45,Pawansut Nagar,Nagpur.</p>
        <p>📞 Phone: +91 9322824718</p>
        <p>📧 Email: vaibhavitingane07@gmail.com</p>
      </div>
    </div>
  );
}
