import React from "react";
import "./OnOurRadar.css";

const OnOurRadar = () => {
  const products = [
    {
      name: "mCaffeine",
      description: "Upto 30% Off + Free Bestseller!",
      image: "https://images-static.nykaa.com/creatives/8b2c66f4-eddd-4148-afab-dd3419af80fc/default.jpg?tr=cm-pad_resize,w-200/mcaffeine.jpg",
      tag: "New Launch",
    },
    {
      name: "Nykaa Perfumery",
      description: "Flat 20% Off On Entire Range!",
      image: "https://images-static.nykaa.com/creatives/6fd06557-58b4-449c-8d24-00d2d40d8d26/default.jpg?tr=cm-pad_resize,w-200/nykaa-perfumery.jpg",
    },
    {
      name: "Olaplex",
      description: "Ultimate Trio - Mini On All Orders",
      image: "https://images-static.nykaa.com/creatives/dc9c95ae-cfab-4eee-a961-76bb54bf1844/default.jpg?tr=cm-pad_resize,w-200/olaplex.jpg",
    },
    {
      name: "Hyphen",
      description: "Up To 15% Off On Kriti's Favorites",
      image: "https://images-static.nykaa.com/creatives/98de2e35-d862-4fc8-be48-8104fda4410f/default.jpg?tr=cm-pad_resize,w-200/hyphen.jpg",
      tag: "New Launch",
    },
    {
      name: "COSRX",
      description: "Flat 15% Off Korean Essentials",
      image: "https://images-static.nykaa.com/creatives/be56510e-d67a-485d-8be1-a88489cad8c4/default.jpg?tr=cm-pad_resize,w-200/cosrx.jpg",
      tag: "New Launch",
    },
    {
      name: "Nyveda",
      description: "Up To 15% Off On Entire Brand!",
      image: "https://images-static.nykaa.com/creatives/4ce641d7-a753-47c6-bf2e-fe145a18b202/default.jpg?tr=cm-pad_resize,w-200/nyveda.jpg",
    },
  ];

  return (
    <div className="on-our-radar">
      <h2>On Our Radar</h2>
      <p>Best-in-show brands</p>
      <div className="product-row">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            {product.tag && <span className="tag">{product.tag}</span>}
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnOurRadar;
