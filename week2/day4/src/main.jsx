import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Iki kireba file ya App.jsx muri folder imwe
import './index.css';   // Iki kireba ama-styles ya Tailwind

// Hano React itangira gushaka ya <div id="root"> yari muri index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Ikosa: Ntabwo twabonye 'root' element muri index.html!");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}