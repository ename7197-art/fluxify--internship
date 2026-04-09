export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div style={{ background: "#fffef9", border: "1px solid #e8e4dc",
      borderRadius: "14px", padding: "1.25rem", display: "flex",
      flexDirection: "column", alignItems: "center", gap: "10px", width: "160px" }}>
      <div style={{ fontSize: "2.5rem", background: "#f5f0e8", borderRadius: "10px",
        width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {image}
      </div>
      <p style={{ fontWeight: "600", fontSize: "14px", color: "#1a1a2e", margin: 0 }}>{name}</p>
      <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>${price}</p>
      <button onClick={onAddToCart} style={{ width: "100%", padding: "8px 0",
        background: "#1a1a2e", color: "#f5f0e8", border: "none",
        borderRadius: "8px", cursor: "pointer", fontSize: "13px" }}>
        Add to Cart
      </button>
    </div>
  );
}
