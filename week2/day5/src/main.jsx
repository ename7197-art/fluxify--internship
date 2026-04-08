import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Genzura niba ya <div id="root"> iri muri index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Ikosa: Ntabwo twabonye 'root' element! Genzura niba muri index.html harimo <div id='root'></div>");
}