import React from 'react';
import ProductCard from './BouquetCard';
import pinkRose from '../assets/pinkrose.jpg';
import redRose from '../assets/Redrose.jpg';
import whiteRose from '../assets/whiterose.jpg';

const bouquets = [
  { id: 1, name: "Pink Rose Bouquet", price: "12,900 ₸", desc: "Soft pink roses for a gentle mood.", image: pinkRose },
  { id: 2, name: "Spring Mix", price: "10,500 ₸", desc: "Bright seasonal flowers with fresh greens.", image: redRose },
  { id: 3, name: "White Elegance", price: "14,300 ₸", desc: "Minimal and classy, perfect for formal events.", image: whiteRose },
];

function MainContent() {
  return (
    <main className="main-content">
      <h2>Популярные букеты</h2>
      <div className="product-grid">
        {bouquets.map(bouquet => (
          <ProductCard key={bouquet.id} bouquet={bouquet} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;