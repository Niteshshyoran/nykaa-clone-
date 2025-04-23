// import React from "react";
// import "./ProductSlider.css";

// const ProductSlider = ({ products }) => {
//   return (
//     <div className="product-slider">
//       <div className="slider-banner">
//         <h2>Nykaa Naturals</h2>
//         <p>Up To 25% Off On Haircare Bestsellers!</p>
//       </div>
//       <div className="slider-products">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <div className="offer-badge">OFFER</div>
//             <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
//             <div className="product-info">
//               <p className="rating">{product.rating} ⭐ ({product.reviews})</p>
//               <p className="product-name">{product.name}</p>
//               <p className="product-size">{product.size}</p>
//               <p className="price">
//                 ₹{product.discountPrice} <span className="original-price">₹{product.originalPrice}</span> {product.discount}%
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductSlider;
