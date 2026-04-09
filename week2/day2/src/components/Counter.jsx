import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={card}>
      <span style={badge}>Task 1 · Component 1</span>
      <h2 style={heading}>Counter</h2>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        margin: "2rem 0",
      }}>
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          disabled={count === 0}
          style={{
            ...actionBtn,
            opacity: count === 0 ? 0.3 : 1,
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}
        >
          −
        </button>

        <div style={{
          minWidth: "100px",
          textAlign: "center",
          fontSize: "4rem",
          fontWeight: "700",
          fontFamily: "'Georgia', serif",
          color: "#1a1a2e",
          lineHeight: 1,
          letterSpacing: "-2px",
        }}>
          {count}
        </div>

        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            ...actionBtn,
            background: "#1a1a2e",
            color: "#f5f0e8",
            border: "none",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <p style={{ fontSize: "12px", color: "#bbb", textAlign: "center" }}>
        Count cannot go below 0
      </p>
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
  marginBottom: "4px",
  letterSpacing: "-0.5px",
};

const actionBtn = {
  width: "48px",
  height: "48px",
  fontSize: "22px",
  fontWeight: "500",
  borderRadius: "50%",
  border: "1.5px solid #1a1a2e",
  background: "transparent",
  color: "#1a1a2e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s, background 0.2s",
};