import React from "react";
import "./Footer.css";



const Footer = () => {
  return (
    <footer>
      {/* Shipping Section */}
      <div className="shipping-section">
        <div className="shipping-feature">
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="" /> 
          <p>FREE SHIPPING</p>
          <small>On orders above ₹299</small>
        </div>
        <div className="shipping-feature">
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="" />
          <p>EASY RETURNS</p>
          <small>15-Day Return Policy</small>
        </div>
        <div className="shipping-feature">
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="" />
          <p>100% AUTHENTIC</p>
          <small>Products Sourced Directly</small>
        </div>
        <div className="shipping-feature">
          <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="" />
          <p>1900+ BRANDS</p>
          <small>1.2 Lakh+ Products</small>
        </div>
      </div>

      {/* Terms and Conditions Section */}
      <div className="terms-section">
        <ul>
          <li>Terms & Conditions</li>
          <li>Shipping Policy</li>
          <li>Cancellation Policy</li>
          <li>Privacy Policy</li>
        </ul>
        <p>© 2024 NYKAA E-RETAIL LIMITED All Rights Reserved.</p>
      </div>
      <div>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
