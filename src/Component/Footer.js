import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "../Style.css"; // Ensure the CSS file is linked

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-column">
          <h3>Opening Hours</h3>
          <p>Everyday</p>
          <p>10:00 AM - 11:00 PM</p>
          
        </div>

        <div class="contact_link_box">
            <h3>Contact Us</h3>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                   Location
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call  +91 9322824718
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  vaibhavitingane07@gmail.com
                </span>
              </a>
        </div>


      </div>
      
     
      <div className="footer-bottom">
        <h3>Restro</h3>
        <p>Restro The authentic Taste of love </p>
        &copy; {new Date().getFullYear()} Restro. All rights reserved.
        <p>Developed by Vaiभवी</p>
      
      <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          </div>
    </footer>
  );
};

export default Footer;
