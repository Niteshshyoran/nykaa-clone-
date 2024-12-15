import React from "react";
import "./OfferBanner.css";

const OfferBanner = () => {
  return (
    <div className="offer-banner">
      <div className="offer-text">
        <img
          src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1800"
          alt="Offer Icon"
          className="offer-icon"
        />
        <span>Extra 20% Off On Your First App Purchase</span>
      </div>
      <button className="offer-button">USE CODE EXTRA20%</button>
    </div>
  );
};

export default OfferBanner;
