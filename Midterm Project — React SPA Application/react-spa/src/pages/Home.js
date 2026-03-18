import React from 'react';
import BouquetCard from '../components/BouquetCard';

const bouquets = [
  { id: 1, name: "Spring Mix", price: "10,500 ₸", desc: "Bright seasonal flowers with fresh greens." },
  { id: 2, name: "Pink Rose Bouquet", price: "12,900 ₸", desc: "Soft pink roses for a gentle mood." },
  { id: 3, name: "White Elegance", price: "14,300 ₸", desc: "Minimal and classy, perfect for formal events." },
];

function Home() {
  return (
    <div className="home">
      <h2>Popular Bouquets</h2>
      <div className="bouquet-grid">
        {bouquets.map(bouquet => (
          <BouquetCard key={bouquet.id} bouquet={bouquet} />
        ))}
      </div>
    </div>
  );
}

export default Home;