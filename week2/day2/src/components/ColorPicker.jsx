import { useState } from "react";

const PALETTE = [
  { hex: "#1a1a2e", name: "Midnight" },
  { hex: "#c94040", name: "Crimson"  },
  { hex: "#2d6a4f", name: "Forest"   },
  { hex: "#e07b39", name: "Ember"    },
];

export default function ColorPicker() {
  const [active, setActive] = useState(null);

  return (
    <div style={card}>
      <span style={badge}>Task 1 · Component 3</span>
      <h2 style={heading}>Color Picker</h2>

      <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
        {PALETTE.map((p) => (
          <button
            key={p.hex}
            onClick={() => setActive(p)}
            title={p.name}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: p.hex,
              border: active?.hex === p.hex
                ? `3px solid ${p.hex}`
                : "3px solid transparent",
              outline: active?.hex === p.hex ? `2px solid ${p.hex}` : "none",
              outlineOffset: "3px",
              cursor: "pointer",
              transition: "transform 0.15s, outline 0.15s",
              transform: active?.hex === p.hex ? "scale(1.15)" : "scale(1)",
            }}
          />
        ))}
      </div>

      <div style={{
        width: "100%",
        height: "110px",
        borderRadius: "12px",
        background: active ? active.hex : "#e8e4dc",
        transition: "background 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span style={{
          fontSize: "13px",
          fontWeight: "500",
          color: active ? "rgba(255,255,255,0.7)" : "#999",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}>
          {active ? active.name : "Pick a color"}
        </span>
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