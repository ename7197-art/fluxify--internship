export default function CartSummary({ total }) {
  return (
    <div style={{
      background: total > 0 ? "#f0fdf4" : "#fafafa",
      border: `1px solid ${total > 0 ? "#bbf7d0" : "#e8e4dc"}`,
      borderRadius: "12px", padding: "1rem 1.25rem",
      display: "flex", alignItems: "center", gap: "12px",
      transition: "background 0.3s", marginBottom: "1.5rem",
    }}>
      <span style={{ fontSize: "18px" }}>🛒</span>
      <p style={{ fontSize: "15px", fontWeight: "600",
        color: total > 0 ? "#166534" : "#999", margin: 0 }}>
        {total === 0 ? "Your cart is empty" : `${total} item${total > 1 ? "s" : ""} in cart`}
      </p>
    </div>
  );
}
