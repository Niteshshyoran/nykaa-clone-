import React from "react";
import "./GiftCarousel.css";

const GiftCarousel = () => {
  return (
    <div className="gift-carousel">
      <div className="gift-header">
        <h2>Get Gifting</h2>
        <p>Pamper, delight & spoil your loved ones</p>
        <br/>
      </div>
      <div className="gift-slider">
        <div className="gift-item">
          <img src="https://images-static.nykaa.com/uploads/97a082e3-76ba-4671-8a10-97c867ff5b2f.jpg?tr=cm-pad_resize,w-600" alt="The Gift Store" />
        </div>
        <div className="gift-item">
          <img src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=cm-pad_resize,w-600" alt="Nykaa Gift Card" />
        </div>
      </div>
    </div>
  );
};

export default GiftCarousel;
