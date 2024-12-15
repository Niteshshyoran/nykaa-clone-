import React from "react";
import "./ProductShowcase.css";

const ProductShowcase = () => {
    const products = [
        { name: "Pond's", image: "https://images-static.nykaa.com/uploads/7f4c553e-d44b-497c-8d5e-53d6a6753c9e.jpg?tr=cm-pad_resize,w-200/to/ponds.png" },
        { name: "Simple", image: "https://images-static.nykaa.com/uploads/b88ce276-a7b9-43a8-b5c6-c3afe0c8af30.jpg?tr=cm-pad_resize,w-200/to/simple.png" },
        { name: "Lotus", image: "https://images-static.nykaa.com/uploads/e0f28b2f-35aa-4e86-b3b1-b16ac73c0f5c.jpg?tr=cm-pad_resize,w-200/to/lotus.png" },
        { name: "Lux", image: "https://images-static.nykaa.com/uploads/058ca63c-cf79-4bf9-b067-083c9b0fc5d4.jpg?tr=cm-pad_resize,w-200/to/lux.png" },
        { name: "Dove", image: "https://images-static.nykaa.com/uploads/484451e9-8594-4c93-8d87-b6b1c486ce4b.jpg?tr=cm-pad_resize,w-200/to/dove.png" },
      ];
        
  return (
     <div className="product-showcase">
      {/* Section Title */}
      <div className="section-header">
        <h2>Head To Toe Essentials</h2>
        <p>Up To 40% Off On Must-Haves</p>
        <div className="arrow-icon">→</div>
      </div>

     {/* Product Row */}

     <div className="product-row">
     {products.map((product, index) => (
       <div key={index} className="product-circle">
         <img src={product.image} alt={product.name} />
         <p>{product.name}</p>
       </div>
     ))}
   </div>

   {/* Subsections */}
   <div className="subsections">
     {[
       { title: "Holiday Scents" },
       { title: "Festive Beauty Edit" },
       { title: "French Pharmacy" },
       { title: "Parisian Makeup" },
       { title: "Festive Skincare" },
     ].map((item, index) => (
       <div key={index} className="subsection-item">
         <p>{item.title}</p>
       </div>
     ))}
   </div>
      {/* Brands */}
      <div className="brand-carousel">
        <h2>Only At Nykaa</h2>
        <p>Beauty you won't find anywhere else</p>
        <div className="brand-logos">
              {["elf", "manyo", "kay", "redken", "guerlain", "sol", "charlotte", "kiehls", "wed", "florence"].map((brand, index) => (
                <div key={index} className={`brand-logo ${brand}`}>
                    {brand.toUpperCase()}
        </div>
          ))}
        </div>
      </div>

      {/* cards */}
      <div className="promo-cards">
        <div className="promo-card">
          <img src="https://images-static.nykaa.com/creatives/a6369ec0-c137-4697-9cbc-2c58308ce956/default.jpg?tr=cm-pad_resize,w-600/lingerie.jpg" alt="Simplifying Lingerie" />
          <h3>Simplifying Lingerie For You</h3>
          <p>Up to 30% Off - Effortless Everyday!</p>
          <button>Shop Now</button>
        </div>
        <div className="promo-card">
          <img src="https://images-static.nykaa.com/creatives/c8ba1ba0-bc4f-4ab2-8690-2e16c84c4b24/default.jpg?tr=cm-pad_resize,w-600/skincare.jpg" alt="Moisturize Brighten Protect" />
          <h3>Moisturize Brighten Protect</h3>
          <p>Up to 20% Off on Entire Range</p>
          <button>Shop Now</button>
        </div>
        <div className="promo-card">
          <img src="https://images-static.nykaa.com/creatives/ca736733-2858-4d70-9e1f-5b05cd8a8b95/default.jpg?tr=cm-pad_resize,w-600/murad.jpg" alt="Youth Renewal" />
          <h3>Youth Renewal Retinol Trial Kit</h3>
          <p>Gift on ₹2000+ - Reduces Uneven Skin</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
