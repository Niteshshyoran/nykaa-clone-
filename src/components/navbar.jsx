import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <span>BEAUTY BONANZA Get Your Amazing Deals</span>
      </div>

      {/* Main Bar */}
      <div className="main-bar">
        <div className="logo">NYKAA</div>
        <div className="nav-links">
          <span>Categories</span>
          <span>Brands</span>
          <span>Luxe</span>
          <span>Nykaa Fashion</span>
          <span>Beauty Advice</span>
        </div>
        <div className="search-signin">
          <input type="text" placeholder="Search on Nykaa" />
          <button onClick={togglePopup}>Sign In</button>
          <div className="cart-icon">🛒</div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="categories-bar">
        <span>Makeup</span>
        <span>Skin</span>
        <span>Hair</span>
        <span>Appliances</span>
        <span>Bath & Body</span>
        <span>Natural</span>
        <span>Mom & Baby</span>
        <span>Health & Wellness</span>
        <span>Men</span>
        <span>Fragrance</span>
        <span>Lingerie & Accessories</span>
        <span className="offer-tag">OFFERS</span>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Login / Create Account</h3>
            <p>Register now and get 1000 Nykaa reward points instantly!</p>
            <button className="popup-button">Sign in with Mobile / Email</button>
            <button className="popup-button google">Google</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
