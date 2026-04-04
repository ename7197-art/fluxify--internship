import React from 'react';

const ProductCard = ({ name, price, onAdd }) => {
  return (
    <div className="product-card">
      <h4>{name}</h4>
      <p className="price">{price}</p>
      <button onClick={onAdd} className="add-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;