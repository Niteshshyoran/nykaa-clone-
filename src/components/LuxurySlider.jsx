import React from "react";
import "./LuxurySlider.css";

const LuxurySlider = () => {
  const brands = [
    "GIVENCHY",
    "VERSACE",
    "GIORGIO ARMANI",
    "MAC",
    "Murad",
    "KAY ALI",
    "Yves Saint Laurent",
  ];

  const slides = [
    {
      image: "https://images-static.nykaa.com/uploads/ccf3e937-6a45-43dd-9a1c-eb633dc689cd.jpg?tr=cm-pad_resize,w-600",
      label: "MAC",
    },
    {
      image: "https://images-static.nykaa.com/uploads/d3d520be-abc7-449b-8425-7cd3f766d57a.jpg?tr=cm-pad_resize,w-600",
      label: "FRAGRANCE",
    },
    {
        image: "https://images-static.nykaa.com/uploads/923a4b7c-aeff-43d1-8d9f-d421b13c1121.jpg?tr=cm-pad_resize,w-600",
        label: "TOM FORD",
      },
    {
        image: "https://images-static.nykaa.com/uploads/fbdc4b59-6819-4121-b9c7-08bc1b077ba0.jpg?tr=cm-pad_resize,w-600",
        label: "HYDRATION HEROES",
    },
    {
        image: "https://images-static.nykaa.com/uploads/9ece8faf-a342-4cfa-8997-9d155603ca10.jpg?tr=cm-pad_resize,w-600",
        label: "HYDRATION HEROES",
    },
  ];

  return (
    <div className="luxury-slider">
      <div className="luxury-header">
        <img
          src="https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=cm-pad_resize,w-1200"
          alt="Nykaa Luxe"
          className="luxury-logo"
        />
      </div>
      <div className="luxury-brands">
        {brands.map((brand, index) => (
          <div className="brand-item" key={index}>
            {brand}
          </div>
        ))}
      </div>
      <div className="luxury-carousel">
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img
              src={slide.image}
              alt={slide.label}
              className="slide-image"
            />
            <h3>{slide.label}</h3>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Luxury →</button>
    </div>
  );
};

export default LuxurySlider;
