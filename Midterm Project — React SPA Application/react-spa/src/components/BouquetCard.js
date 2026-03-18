import React from 'react';

function BouquetCard({ bouquet }) {
  return (
    <div className="bouquet-card">
      <img src={`images/${bouquet.name.toLowerCase().replace(/ /g, '-')}.jpg`} alt={bouquet.name} />
      <h3>{bouquet.name}</h3>
      <p>{bouquet.desc}</p>
      <p className="price">{bouquet.price}</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

export default BouquetCard;