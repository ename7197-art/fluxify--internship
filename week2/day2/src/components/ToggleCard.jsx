import { useState } from "react";

export default function ToggleCard() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={card}>
      <span style={badge}>Task 1 · Component 2</span>
      <h2 style={heading}>Toggle Card</h2>

      <button
        onClick={() => setVisible((v) => !v)}
        style={{
          ...toggleBtn,
          background: visible ? "#1a1a2e" : "transparent",
          color: visible ? "#f5f0e8" : "#1a1a2e",
        }}
      >
        <span style={{
          display: "inline-block",
          transition: "transform 0.3s",
          transform: visible ? "rotate(180deg)" : "rotate(0deg)",
          marginRight: "8px",
          fontSize: "12px",
        }}>
          ▼
        </span>
        {visible ? "Hide Content" : "Show Content"}
      </button>

      <div style={{
        overflow: "hidden",
        maxHeight: visible ? "200px" : "0px",
        transition: "max-height 0.4s ease",
      }}>
        <div style={{
          marginTop: "16px",
          padding: "1.25rem",
          background: "#f5f0e8",
          borderRadius: "10px",
          borderLeft: "4px solid #1a1a2e",
          fontSize: "14px",
          color: "#1a1a2e",
          lineHeight: "1.7",
        }}>
          This hidden content reveals itself on toggle. It can hold any content —
          text, images, forms, or nested components.
        </div>
      </div>
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
  marginBottom: "16px",
  letterSpacing: "-0.5px",
};

const toggleBtn = {
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "0.02em",
  borderRadius: "8px",
  border: "1.5px solid #1a1a2e",
  cursor: "pointer",
  transition: "background 0.25s, color 0.25s",
};