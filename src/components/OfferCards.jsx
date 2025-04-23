import React from "react";
import "./OfferCards.css";

const offers = [
  {
    bgImg: "https://images-static.nykaa.com/uploads/abc6769f-1977-4851-97d8-cda0c9dfaca8.jpg?tr=cm-pad_resize,w-900", 
    title: "Up To 40% Off",
    subtitle: "On Party-Ready Picks",
    description: "DID SOMEONE SAY CHRISTMAS MAKEUP?",
    buttonText: "Shop Now",
  },
  {
    bgImg: "https://images-static.nykaa.com/creatives/61f6713e-0bcc-40a2-a847-ae1a1b142c7d/default.jpg?tr=cm-pad_resize,w-900",
    title: "Exclusive B1G1",
    subtitle: "Glow Up Your Skin!",
    buttonText: "Shop Now",
  },
  {
    bgImg: "https://images-static.nykaa.com/creatives/465d6fee-aedd-4656-9397-19c3ae4d738b/default.jpg?tr=cm-pad_resize,w-900",
    title: "Hydration vs Moisturising",
    subtitle: "Which Does Your Skin Need?",
    buttonText: "Shop Now",
  },
  {
    bgImg: "https://images-static.nykaa.com/uploads/6a8e0bc9-42ee-480d-9c89-8379f7858bac.jpg?tr=cm-pad_resize,w-600",
    title: "Buy 2 Get Extra 5% Off",
    subtitle: "Buy 3 Get Extra 10% Off",
    buttonText: "Shop Now",
  },
];

const OfferCards = () => {
  return (
    <div className="offer-cards-container">
      {offers.map((offer, index) => (
        <div
          className="offer-card"
          key={index}
          style={{ backgroundImage: `url(${offer.bgImg})` }}
        >
          <div className="offer-content">
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-subtitle">{offer.subtitle}</p>
            {offer.description && (
              <p className="offer-description">{offer.description}</p>
            )}
            <button className="offer-button">{offer.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCards;


