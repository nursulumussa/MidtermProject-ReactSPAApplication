// src/components/AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      onAddItem(newItem);
      setNewItem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Add a new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;