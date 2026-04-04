import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';

const ShoppingCart = () => {
  // 1. State ibikwa mu mubyeyi
  const [cartCount, setCartCount] = useState(0);

  // 2. Handler function yo guhindura state
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="shopping-cart-container">
      <h1>Fluxify Electronics</h1>
      
      {/* 3. Pass state 'cartCount' as a prop to CartSummary */}
      <CartSummary total={cartCount} />

      <div className="product-list">
        {/* 4. Pass 'handleAddToCart' function as a prop to ProductCard */}
        <ProductCard name="iPhone 15 Pro" price="1,200,000 RWF" onAdd={handleAddToCart} />
        <ProductCard name="Samsung S24 Ultra" price="1,100,000 RWF" onAdd={handleAddToCart} />
        <ProductCard name="MacBook Air M2" price="1,500,000 RWF" onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ShoppingCart;