// src/components/ItemList.js
import React from 'react';

function ItemList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;