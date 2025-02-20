import React, { useContext, useState } from "react";
import "../Style.css";
import hero2 from "../Image/hero2.jpg";
import burger from "../Image/burger3.jpg";
import Thali from "../Image/food.jpg";
import dessert from "../Image/dessert3.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../Component/CartContext";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const {cart} = useContext(CartContext);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const loggedInUser = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    navigate("/login");
  };
  
  return (
    <>

      <div className="hero_slider_container">
        <div className="hero_area">
          <div className="bg-box">
            <img src={hero2} alt="Hero Background" />
          </div>
        </div>
        <Slider/>
      </div>

      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
              <span>Restro</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              onClick={toggleNavbar} 
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggle-icon">&#9776;</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Menu">Menu</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active"aria-disabled="true" to="/BookTable">Book Table</Link>
                 
                </li>
              </ul>
              <div className="user_option">
              <div className="user_link" onClick={() => setShowDropdown(!showDropdown)}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>

              {showDropdown && (
                <div className="dropdown_menu">
                  {isAuthenticated ? (
                    <>
                      <p>Welcome, {loggedInUser}</p>
                      <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/Login" className="dropdown-item">Login</Link>
                      <Link to="/Sign_up" className="dropdown-item">Sign Up</Link>
                    </>
                  )}
                </div>
              )}
            </div>
              <div className="cart_icon">
                
                <Link to="/cart" className="btn cart-btn">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="cart-count">{cart.length}</span>
                  </Link>
                
              </div>
              
              
              <div className="order_online_container ms-auto">
                 <a className="order_online" href="/Menu">Order Online</a>
              </div>

            </div>
          
          </nav>
        </div>
      </header>
      <Offer/>
     
    </>
    
  );
  
}

const Slider = () => {
  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
         
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="detail-box">
                    <h1>Taste of Every Foodie</h1>
                    <p>
                      Welcome to Restro, where every bite is a celebration of flavor and every moment is a feast for the senses. We take pride in crafting dishes that not only satisfy your cravings but also create unforgettable dining experiences. We deliver meals that blend tradition with innovation.
                    </p>
                    <div className="btn-box">
                      <a href="/Menu" className="btn1">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="detail-box">
                    <h1>Where Every Bite Tells a Story</h1>
                    <p>
                      At Restro, we believe that good food brings people together. Our passion for culinary excellence is reflected in every dish we serve, crafted with fresh ingredients and love.
                    </p>
                    <div className="btn-box">
                      <a href="/Menu" className="btn1">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="detail-box">
                    <h1>Savor the Flavor of Happiness!</h1>
                    <p>
                      Discover a world of flavor at Restro, where every meal is a masterpiece. From our carefully sourced ingredients to our beautifully plated dishes, we focus on delivering not just food, but an experience.
                    </p>
                    <div className="btn-box">
                      <a href="/Menu" className="btn1">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="container">
          <ol className="carousel-indicators">
            <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
            <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
    
  );
};

const Offer =()=>
{
  const offers = [
    {
      id: 1,
      title: "Buy 1 Get 1 Free",
      description: "Enjoy our special Buy 1 Get 1 Free offer on selected meals.",
      image: burger,
    },
    {
      id: 2,
      title: "20% Off on First Order",
      description: "Order now and get 20% off on your first online order!",
      image: Thali,
    },
    {
      id: 3,
      title: "Free Dessert with Main Course",
      description: "Get a complimentary dessert with every main course ordered.",
      image: dessert,
    },
  ];
  return (
    <section className="offer_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Special <span>Offers</span></h2>
          <p> Irresistible Offers Just for You! </p>
        </div>

        <div className="offer_grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer_card">
              <img src={offer.image} alt={offer.title} className="offer_img" />
              <div className="offer_content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <a href="/Menu" className="btn1">Claim Offer</a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    
  );
}