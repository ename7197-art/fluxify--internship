import Counter from "./components/Counter";
import ToggleCard from "./components/ToggleCard";
import ColorPicker from "./components/ColorPicker";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "2rem 1rem",
      fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
    }}>
      <h1 style={{
        fontSize: "13px",
        fontWeight: "600",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#999",
        marginBottom: "2rem",
      }}>
        React Components — Task 1 &amp; Task 2
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <Counter />
        <ToggleCard />
        <ColorPicker />
        <ShoppingCart />
      </div>
    </div>
  );
}