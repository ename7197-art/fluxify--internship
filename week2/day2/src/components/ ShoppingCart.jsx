import { useState } from "react";
import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  { id: 1, name: "Headphones", price: "59.99", image: "🎧" },
  { id: 2, name: "Keyboard",   price: "89.99", image: "⌨️"  },
  { id: 3, name: "Mouse",      price: "34.99", image: "🖱️"  },
];

export default function ShoppingCart() {
  // cartCount state lives here in the parent — lifted state
  const [cartCount, setCartCount] = useState(0);

  // handler passed down to each ProductCard as a prop
  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div style={card}>
      <span style={badge}>Task 2 · Shared State</span>
      <h2 style={heading}>Shopping Cart</h2>

      {/* CartSummary receives total as a read-only prop */}
      <CartSummary total={cartCount} />

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart}   // handler passed as prop
          />
        ))}
      </div>

      {cartCount > 0 && (
        <button
          onClick={() => setCartCount(0)}
          style={{
            marginTop: "1.25rem",
            padding: "7px 18px",
            background: "#fee2e2",
            color: "#991b1b",
            border: "1px solid #fca5a5",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          Clear cart
        </button>
      )}
    </div>
  );
}

const card = {
  background: "#fffef9",
  border: "1px solid #e8e4dc",
  borderRadius: "16px",
  padding: "1.75rem",
};

const badge = {
  display: "inline-block",
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#999",
  marginBottom: "8px",
};

const heading = {
  fontSize: "20px",
  fontWeight: "700",
  fontFamily: "'Georgia', serif",
  color: "#1a1a2e",
  marginBottom: "1.25rem",
  letterSpacing: "-0.5px",
};