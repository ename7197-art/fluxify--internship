import { useState } from 'react';
import './App.css';

// ============================================
// TASK 1: COUNTER COMPONENT
// ============================================
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="component-card">
      <h3>📊 Counter</h3>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">−</button>
        <button onClick={increment} className="btn btn-success">+</button>
      </div>
      <p className="hint">Count cannot go below 0</p>
    </div>
  );
}

// ============================================
// TASK 1: TOGGLE CARD COMPONENT
// ============================================
function ToggleCard() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="component-card">
      <h3>🔄 Toggle Card</h3>
      <button onClick={() => setIsVisible(!isVisible)} className="btn btn-primary">
        {isVisible ? '🙈 Hide Content' : '👀 Show Content'}
      </button>
      {isVisible && (
        <div className="toggle-content">
          <p>✨ This is the hidden content! Click the button to hide/show me.</p>
          <p>You can put any text, images, or components here.</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// TASK 1: COLOR PICKER COMPONENT
// ============================================
function ColorPicker() {
  const [bgColor, setBgColor] = useState('#f0f0f0');
  
  const colors = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Yellow', value: '#ffff00' }
  ];

  return (
    <div className="component-card">
      <h3>🎨 Color Picker</h3>
      <div 
        className="color-preview" 
        style={{ backgroundColor: bgColor }}
      >
        <span>Preview Box</span>
      </div>
      <div className="color-buttons">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setBgColor(color.value)}
            className="color-btn"
            style={{ backgroundColor: color.value }}
            title={color.name}
          >
            {color.name}
          </button>
        ))}
      </div>
      <p className="hint">Current color: {bgColor}</p>
    </div>
  );
}

// ============================================
// TASK 2: CART SUMMARY COMPONENT
// ============================================
function CartSummary({ count }) {
  return (
    <div className="cart-summary">
      <div className="cart-icon">🛒</div>
      <div className="cart-details">
        <span className="cart-label">Cart Total</span>
        <span className="cart-count">{count} item{count !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}

// ============================================
// TASK 2: PRODUCT CARD (CHILD COMPONENT)
// ============================================
function ProductCard({ id, name, price, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">📦</div>
      <h4>{name}</h4>
      <p className="product-price">${price}</p>
      <button onClick={() => onAddToCart({ id, name, price })} className="btn-add">
        + Add to Cart
      </button>
    </div>
  );
}

// ============================================
// TASK 2: SHOPPING CART (PARENT COMPONENT)
// ============================================
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    { id: 1, name: '💻 Laptop', price: 999 },
    { id: 2, name: '🖱️ Mouse', price: 25 },
    { id: 3, name: '⌨️ Keyboard', price: 75 },
    { id: 4, name: '🎧 Headphones', price: 50 }
  ];

  return (
    <div className="shopping-cart-container">
      <div className="cart-header">
        <h3>🛍️ Shopping Cart</h3>
        <CartSummary count={cartItems.length} />
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-items-list">
          <h4>Items in cart:</h4>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ============================================
// WEEK 2 REQUIRED: TEAM DIRECTORY
// ============================================
function TeamDirectory() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alice Munezero", role: "Frontend Developer", email: "alice@example.com", avatar: "👩‍💻" },
    { id: 2, name: "Bob Habimana", role: "UI/UX Designer", email: "bob@example.com", avatar: "👨‍🎨" },
    { id: 3, name: "Clara Uwase", role: "Project Manager", email: "clara@example.com", avatar: "👩‍💼" },
    { id: 4, name: "David Niyonkuru", role: "Backend Developer", email: "david@example.com", avatar: "👨‍💻" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newMember, setNewMember] = useState({ name: "", role: "", email: "", avatar: "👤" });

  // Filter members based on search
  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add new member
  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember.name && newMember.role && newMember.email) {
      setTeamMembers([...teamMembers, { 
        id: Date.now(), 
        ...newMember 
      }]);
      setNewMember({ name: "", role: "", email: "", avatar: "👤" });
    }
  };

  // Delete member
  const deleteMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="team-directory">
      <div className="team-header">
        <h2>👥 Team Directory</h2>
        <p>{filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search by name, role, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm("")} className="clear-search">✖</button>
        )}
      </div>

      {/* Add Member Form */}
      <form onSubmit={handleAddMember} className="add-member-form">
        <input
          type="text"
          placeholder="Full Name *"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Role *"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email *"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          required
        />
        <button type="submit" className="btn-add-member">+ Add Member</button>
      </form>

      {/* Member Cards Grid */}
      <div className="members-container">
        {filteredMembers.map(member => (
          <div key={member.id} className="member-card">
            <div className="member-avatar">{member.avatar}</div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-email">{member.email}</p>
            </div>
            <button onClick={() => deleteMember(member.id)} className="delete-btn" title="Remove member">🗑️</button>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="no-results">
          <p>😕 No team members found. Try a different search or add a new member!</p>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📘 Week 2 - React Mini Projects</h1>
        <p>Built with React Hooks (useState) • No Backend • Pure Frontend</p>
      </header>

      <div className="tasks-section">
        <div className="section-title">
          <span>📌</span>
          <h2>Task 1: useState Basics</h2>
        </div>
        <div className="tasks-grid">
          <Counter />
          <ToggleCard />
          <ColorPicker />
        </div>
      </div>

      <div className="tasks-section">
        <div className="section-title">
          <span>📌</span>
          <h2>Task 2: Lifting State Up - Shopping Cart</h2>
        </div>
        <ShoppingCart />
      </div>

      <div className="tasks-section">
        <div className="section-title">
          <span>✅</span>
          <h2>Week 2 Required: Team Directory</h2>
        </div>
        <TeamDirectory />
      </div>
    </div>
  );
}

export default App;