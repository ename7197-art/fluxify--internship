import { useState } from "react";
import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  { id: 1, name: "Headphones", price: "59.99", image: "🎧" },
  { id: 2, name: "Keyboard",   price: "89.99", image: "⌨️" },
  { id: 3, name: "Mouse",      price: "34.99", image: "🖱️" },
];

export default function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount((c) => c + 1);
  return (
    <div style={{ background: "#fffef9", border: "1px solid #e8e4dc",
      borderRadius: "16px", padding: "1.75rem" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#1a1a2e", marginBottom: "1.25rem" }}>
        Shopping Cart
      </h2>
      <CartSummary total={cartCount} />
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price}
            image={p.image} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {cartCount > 0 && (
        <button onClick={() => setCartCount(0)} style={{ marginTop: "1rem",
          padding: "7px 18px", background: "#fee2e2", color: "#991b1b",
          border: "1px solid #fca5a5", borderRadius: "8px", cursor: "pointer" }}>
          Clear cart
        </button>
      )}
    </div>
  );
}
