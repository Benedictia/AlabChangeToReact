// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component
import './index.css';  // Import global styles (if you have one)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This matches the div in public/index.html
);
