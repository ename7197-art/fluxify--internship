import React from 'react';

const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary">
      <h3>🛒 Cart Summary</h3>
      <p>Total Items: <strong>{total}</strong></p>
    </div>
  );
};

export default CartSummary;