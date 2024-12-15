import React from 'react';
import './LingerieAccessories.css';

const LingerieAccessoriesComponent = () => {
  return (
    <div className="lingerie-accessories">
      <h2>Lingerie & Accessories</h2>
      <p>Handpicked styles for you</p>
      <div className="lingerie-slider">
        <div className="slider-item">
          <img src="https://images-static.nykaa.com/uploads/7e9469cf-e20e-46fa-a877-625e167bb3ef.jpg?tr=cm-pad_resize,w-600" alt="Lingerie & Accessories Store" />
        </div>
        <div className="slider-item">
          <img src="https://images-static.nykaa.com/uploads/783ade0e-d5c6-44d9-af0e-25eb3c0d605f.jpg?tr=cm-pad_resize,w-600" alt="Exquisite Styles and Intimate Comfort" />
        </div>
        <div className="slider-item">
          <img src="https://images-static.nykaa.com/uploads/a260da2d-db12-43f3-b3f0-0d00bbe607a1.jpg?tr=cm-pad_resize,w-600" alt="Dazzle in Elegance" />
        </div>
      </div>
      <div className='categories'>
        <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/7495b1e0-d4d4-4e41-b9e1-7cbb2cd0c9bf.jpg?tr=cm-pad_resize,w-200" alt="T-shirt Bras" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/d89d5842-4a30-4f54-8a7e-4772405b97d6.jpg?tr=cm-pad_resize,w-200" alt="Minimal Jewellery" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/e9794275-4fe2-4979-89bc-961bbdd5c40b.jpg?tr=cm-pad_resize,w-200" alt="Panty Packs" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/b8c1cc89-dbfe-4790-866f-a89787a7ab92.jpg?tr=cm-pad_resize,w-200" alt="Sling Bags" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/6e56aee1-70a2-4e06-8001-355a7f63b837.png?tr=cm-pad_resize,w-200" alt="Hottest Heels" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/b3ece4d0-5096-4bac-b013-0608271e8073.jpg?tr=cm-pad_resize,w-200" alt="Sleek Watches" />
            </div>
            <div className="category-item">
                <img src="https://images-static.nykaa.com/uploads/8936bd5b-af16-4162-98b3-7d75ad60b549.jpg?tr=cm-pad_resize,w-200" alt="Cozy Sleepwears" />
            </div>
      </div>
      <div className="brands">
        <div className="brand-item">
          <img src="https://images-static.nykaa.com/uploads/4e1bbdc1-21a6-40fa-a0ae-34dd7ac17d34.jpg?tr=cm-pad_resize,w-300" alt="House of Nykaa" />
          <p>Flat 20% Off</p>
        </div>
        <div className="brand-item">
          <img src="https://images-static.nykaa.com/uploads/457d11a3-19b2-419e-8390-996cd9c3e2dc.jpg?tr=cm-pad_resize,w-300" alt="Pipa Bella" />
          <p>Up to 70% Off</p>
        </div>
        <div className="brand-item">
          <img src="https://images-static.nykaa.com/uploads/32942a89-515a-4a43-ac3b-73bae3a8d2f6.jpg?tr=cm-pad_resize,w-300" alt="Ajai" />
          <p>Up to 70% Off</p>
        </div>
        <div className="brand-item">
          <img src="https://images-static.nykaa.com/uploads/1758f5ff-493e-4d71-abed-e1a4be9c7c4f.jpg?tr=cm-pad_resize,w-300" alt="Nykaa Luxe" />
          <p>Up to 30% Off</p>
        </div>
      </div>
    </div>
  );
};

export default LingerieAccessoriesComponent;
